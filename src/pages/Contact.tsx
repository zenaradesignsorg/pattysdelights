import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Phone } from "lucide-react";
import { useState, useRef } from "react";
import { toast } from "sonner";
import { SectionHeading } from "@/components/SectionHeading";
import { submitContactForm } from "@/lib/contact-api";
import { trackFormSubmit, trackPhoneClick, trackEmailClick } from "@/lib/analytics";
import { EMAIL, HOURS, PHONE_DISPLAY, PHONE_HREF, SERVICE_AREAS } from "@/lib/site";
import {
  sanitizeText,
  validateAndSanitizeEmail,
  validateAndSanitizePhone,
  INPUT_LIMITS,
} from "@/lib/sanitize";

interface FormState {
  name: string;
  email: string;
  phone: string;
  date: string;
  guestCount: string;
  services: string;
  budget: string;
  message: string;
}

const EMPTY_FORM: FormState = {
  name: "",
  email: "",
  phone: "",
  date: "",
  guestCount: "",
  services: "",
  budget: "",
  message: "",
};

const fieldClass = "h-12 rounded-md border-input bg-paper text-base focus-visible:border-secondary";

const Contact = () => {
  const [formData, setFormData] = useState<FormState>(EMPTY_FORM);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formLoadTime = useRef<number>(Date.now());
  const honeypotRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Anti-spam: Check honeypot field (should be empty)
    if (honeypotRef.current && honeypotRef.current.value) {
      // Bot detected - silently reject
      return;
    }

    // Anti-spam: Check if form was submitted too quickly (less than 3 seconds)
    const timeSpent = (Date.now() - formLoadTime.current) / 1000;
    if (timeSpent < 3) {
      toast.error("Please take your time filling out the form");
      return;
    }
    
    // Client-side validation
    const sanitizedName = sanitizeText(formData.name, INPUT_LIMITS.NAME_MAX);
    const sanitizedEmail = formData.email ? validateAndSanitizeEmail(formData.email) : null;
    const sanitizedPhone = validateAndSanitizePhone(formData.phone);
    const sanitizedMessage = sanitizeText(formData.message, INPUT_LIMITS.MESSAGE_MAX);

    // Validate required fields
    if (!sanitizedName || sanitizedName.length < 1) {
      toast.error("Please enter your name");
      return;
    }

    if (!sanitizedPhone) {
      toast.error("Please enter a valid phone number");
      return;
    }

    if (!sanitizedMessage || sanitizedMessage.length < 10) {
      toast.error("Please enter a message (at least 10 characters)");
      return;
    }

    // Validate email if provided
    if (formData.email && !sanitizedEmail) {
      toast.error("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);

    try {
      // Create sanitized form data with anti-spam metadata
      const sanitizedFormData = {
        name: sanitizedName,
        email: sanitizedEmail || "",
        phone: sanitizedPhone,
        date: sanitizeText(formData.date || "", INPUT_LIMITS.DATE_MAX),
        guestCount: sanitizeText(formData.guestCount || "", 10),
        services: sanitizeText(formData.services || "", 100),
        budget: sanitizeText(formData.budget || "", 50),
        message: sanitizedMessage,
        // Anti-spam fields
        _honeypot: "", // Honeypot field (should be empty)
        _timeSpent: Math.round(timeSpent), // Time spent on form in seconds
      };

      const result = await submitContactForm(sanitizedFormData);

      if (result.success) {
        trackFormSubmit("contact_form", {
          service_interest: sanitizedFormData.services,
          budget_range: sanitizedFormData.budget,
        });
        toast.success("Quote request received! We'll be in touch soon.");
        // Reset form
        setFormData(EMPTY_FORM);
      } else {
        toast.error(result.error || "Failed to send request. Please try again or call us directly.");
      }
    } catch {
      toast.error("An unexpected error occurred. Please try again or call us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: keyof FormState, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section className="pb-20 pt-12 md:pb-28 md:pt-20">
      <div className="container mx-auto grid gap-14 px-4 lg:grid-cols-12 lg:gap-16">
        {/* Intro & Contact Info */}
        <div className="lg:col-span-5">
          <SectionHeading
            as="h1"
            eyebrow="Contact"
            title="Let's Talk About Your Event"
            intro="Share your plans—we'll make them delicious and beautiful."
          />

          {/* Highlighted Phone Number */}
          <div className="mt-10 rounded-md bg-ink p-7 text-paper md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-coral">Best Way to Reach Us</p>
            <a
              href={PHONE_HREF}
              onClick={trackPhoneClick}
              className="mt-3 inline-flex items-center gap-3 font-serif text-3xl text-paper underline decoration-paper/25 underline-offset-8 transition-colors hover:decoration-coral md:text-4xl"
            >
              <Phone aria-hidden="true" className="h-6 w-6 text-coral" />
              {PHONE_DISPLAY}
            </a>
            <p className="mt-4 text-sm text-paper/70">
              Call Now · Available {HOURS.map((row) => `${row.days}: ${row.time}`).join(", ")}
            </p>
          </div>

          <dl className="mt-10 border-t border-border">
            <div className="grid grid-cols-[6.5rem_1fr] gap-4 border-b border-border py-5">
              <dt className="text-sm font-semibold text-secondary">Email</dt>
              <dd>
                <a
                  href={`mailto:${EMAIL}`}
                  onClick={trackEmailClick}
                  className="break-all text-muted-foreground transition-colors hover:text-coral-deep"
                >
                  {EMAIL}
                </a>
              </dd>
            </div>
            <div className="grid grid-cols-[6.5rem_1fr] gap-4 border-b border-border py-5">
              <dt className="text-sm font-semibold text-secondary">Hours</dt>
              <dd className="text-muted-foreground">
                {HOURS.map((row) => (
                  <p key={row.days}>
                    {row.days}: {row.time}
                  </p>
                ))}
              </dd>
            </div>
            <div className="grid grid-cols-[6.5rem_1fr] gap-4 border-b border-border py-5">
              <dt className="text-sm font-semibold text-secondary">Coverage</dt>
              <dd className="leading-relaxed text-muted-foreground">
                Greater Toronto Area including {SERVICE_AREAS.join(", ")}
              </dd>
            </div>
          </dl>

          <div className="mt-10 border-l-2 border-coral pl-5">
            <h2 className="font-serif text-xl font-semibold text-secondary">Quick Response Guaranteed</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              We typically respond to all inquiries within 24 hours. For urgent requests, please call us directly!
            </p>
          </div>
        </div>

        {/* Form */}
        <div className="lg:col-span-7">
          <div className="rounded-md border border-border bg-card p-6 shadow-card md:p-10">
            <h2 className="text-2xl font-semibold md:text-3xl">Request a Quote</h2>
            <p className="mt-2 text-muted-foreground">
              Fill out the form below and we'll get back to you with a custom quote
            </p>

            <form onSubmit={handleSubmit} className="relative mt-8 space-y-6">
              {/* Honeypot field - hidden from users but visible to bots */}
              <div style={{ position: "absolute", left: "-9999px", opacity: 0, pointerEvents: "none" }} aria-hidden="true">
                <Label htmlFor="website">Website (leave blank)</Label>
                <Input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" ref={honeypotRef} />
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    autoComplete="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    required
                    maxLength={INPUT_LIMITS.NAME_MAX}
                    className={fieldClass}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    inputMode="tel"
                    placeholder="(647) 667-7559"
                    value={formData.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    required
                    maxLength={INPUT_LIMITS.PHONE_MAX}
                    className={fieldClass}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    maxLength={INPUT_LIMITS.EMAIL_MAX}
                    className={fieldClass}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="date">Date of Event</Label>
                  <Input
                    id="date"
                    name="date"
                    type="date"
                    value={formData.date}
                    onChange={(e) => handleChange("date", e.target.value)}
                    className={fieldClass}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="guestCount">Guest Count</Label>
                  <Input
                    id="guestCount"
                    name="guestCount"
                    type="number"
                    inputMode="numeric"
                    placeholder="50"
                    value={formData.guestCount}
                    onChange={(e) => handleChange("guestCount", e.target.value)}
                    min="1"
                    max="100000"
                    className={fieldClass}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="services">Services Interested In</Label>
                  <Select value={formData.services} onValueChange={(value) => handleChange("services", value)}>
                    <SelectTrigger id="services" className={fieldClass}>
                      <SelectValue placeholder="Select services" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="fruit-platters">Fruit Platters</SelectItem>
                      <SelectItem value="fruit-carving">Fruit Carving</SelectItem>
                      <SelectItem value="bubble-tea">Bubble Tea Station</SelectItem>
                      <SelectItem value="ice-cream">Ice Cream & Kulfi</SelectItem>
                      <SelectItem value="tea-station">Tea Station</SelectItem>
                      <SelectItem value="juice-station">Juice Station</SelectItem>
                      <SelectItem value="dessert-table">Dessert Table</SelectItem>
                      <SelectItem value="custom">Custom / Multiple</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="budget">Budget Range</Label>
                <Select value={formData.budget} onValueChange={(value) => handleChange("budget", value)}>
                  <SelectTrigger id="budget" className={fieldClass}>
                    <SelectValue placeholder="Select budget range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="under-200">Under $200</SelectItem>
                    <SelectItem value="200-500">$200 - $500</SelectItem>
                    <SelectItem value="500-1000">$500 - $1,000</SelectItem>
                    <SelectItem value="1000-2000">$1,000 - $2,000</SelectItem>
                    <SelectItem value="2000-plus">$2,000+</SelectItem>
                    <SelectItem value="flexible">Flexible</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message *</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about your event..."
                  rows={5}
                  value={formData.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  required
                  maxLength={INPUT_LIMITS.MESSAGE_MAX}
                  className="resize-none rounded-md border-input bg-paper text-base focus-visible:border-secondary"
                />
                <p className="text-right text-xs text-muted-foreground" aria-live="polite">
                  {formData.message.length} / {INPUT_LIMITS.MESSAGE_MAX} characters
                </p>
              </div>

              <Button type="submit" size="lg" className="h-14 w-full text-base" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Submit Request"}
              </Button>

              <p className="text-center text-sm text-muted-foreground">
                We'll review your request and get back to you within 24 hours
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
