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
import { Phone, Mail, Clock, MapPin } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { submitContactForm } from "@/lib/contact-api";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    guestCount: "",
    services: "",
    budget: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await submitContactForm(formData);

      if (result.success) {
        toast.success("Quote request received! We'll be in touch soon.");
        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          date: "",
          guestCount: "",
          services: "",
          budget: "",
          message: "",
        });
      } else {
        toast.error(result.error || "Failed to send request. Please try again or call us directly.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error("An unexpected error occurred. Please try again or call us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif font-bold text-secondary mb-4 md:mb-6">
              Get in Touch
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-coral to-primary mx-auto rounded-full mb-4 md:mb-6" />
            <p className="text-base md:text-lg lg:text-xl text-foreground leading-relaxed px-4">
              Tell us about your event—we'll bring the treats
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 md:gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6 md:space-y-8">
              {/* Highlighted Phone Number */}
              <div className="bg-gradient-to-br from-coral to-primary rounded-lg p-6 md:p-8 shadow-lg border-2 border-coral/20">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                    <Phone className="h-7 w-7 md:h-8 md:w-8 text-white" />
                  </div>
                  <div>
                    <p className="text-white/90 text-sm md:text-base font-medium mb-1">Best Way to Reach Us</p>
                    <p className="text-white text-lg md:text-xl font-bold">Call Now</p>
                  </div>
                </div>
                <a 
                  href="tel:+16476677559" 
                  className="block w-full bg-white text-coral font-bold text-xl md:text-2xl py-4 px-6 rounded-lg text-center hover:bg-white/95 transition-colors shadow-lg hover:shadow-xl"
                >
                  (647) 667-7559
                </a>
                <p className="text-white/90 text-xs md:text-sm text-center mt-3">
                  Available Mon-Fri: 9am-7pm, Sat-Sun: 10am-5pm
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 md:p-8 border border-border shadow-sm">
                <h2 className="text-xl md:text-2xl font-serif font-bold text-secondary mb-4 md:mb-6">
                  Contact Information
                </h2>
                
                <div className="space-y-4 md:space-y-6">

                  <div className="flex items-start gap-3 md:gap-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-coral/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="h-5 w-5 md:h-6 md:w-6 text-coral" />
                    </div>
                    <div>
                      <p className="font-semibold text-secondary mb-1 text-sm md:text-base">Email</p>
                      <a href="mailto:Pattysdelightsinc@gmail.com" className="text-sm md:text-base text-muted-foreground hover:text-coral transition-colors break-all">
                        Pattysdelightsinc@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 md:gap-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-coral/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="h-5 w-5 md:h-6 md:w-6 text-coral" />
                    </div>
                    <div>
                      <p className="font-semibold text-secondary mb-1 text-sm md:text-base">Hours</p>
                      <p className="text-sm md:text-base text-muted-foreground">Mon-Fri: 9am - 7pm</p>
                      <p className="text-sm md:text-base text-muted-foreground">Sat-Sun: 10am - 5pm</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 md:gap-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-coral/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-5 w-5 md:h-6 md:w-6 text-coral" />
                    </div>
                    <div>
                      <p className="font-semibold text-secondary mb-1 text-sm md:text-base">Coverage</p>
                      <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                        Greater Toronto Area including Toronto, Mississauga, Brampton, Markham, Vaughan, Scarborough, Oakville
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-coral to-primary text-white rounded-lg p-6 md:p-8 shadow-lg">
                <h3 className="text-lg md:text-xl font-serif font-bold mb-2 md:mb-3">
                  Quick Response Guaranteed
                </h3>
                <p className="text-white/90 text-xs md:text-sm leading-relaxed">
                  We typically respond to all inquiries within 24 hours. For urgent requests, please call us directly!
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-lg p-6 md:p-8 lg:p-10 border border-border shadow-sm">
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-secondary mb-2">
                  Request a Quote
                </h2>
                <p className="text-sm md:text-base text-muted-foreground mb-6 md:mb-8">
                  Fill out the form below and we'll get back to you with a custom quote
                </p>

                <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm md:text-base">Name *</Label>
                      <Input
                        id="name"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        required
                        className="border-border focus:border-coral text-sm md:text-base"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-sm md:text-base">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="(647) 667-7559"
                        value={formData.phone}
                        onChange={(e) => handleChange("phone", e.target.value)}
                        required
                        className="border-border focus:border-coral text-sm md:text-base"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm md:text-base">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        className="border-border focus:border-coral text-sm md:text-base"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="date" className="text-sm md:text-base">Date of Event</Label>
                      <Input
                        id="date"
                        type="date"
                        value={formData.date}
                        onChange={(e) => handleChange("date", e.target.value)}
                        className="border-border focus:border-coral text-sm md:text-base"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="guestCount" className="text-sm md:text-base">Guest Count</Label>
                      <Input
                        id="guestCount"
                        type="number"
                        placeholder="50"
                        value={formData.guestCount}
                        onChange={(e) => handleChange("guestCount", e.target.value)}
                        className="border-border focus:border-coral text-sm md:text-base"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="services" className="text-sm md:text-base">Services Interested In</Label>
                      <Select onValueChange={(value) => handleChange("services", value)}>
                        <SelectTrigger className="border-border focus:border-coral text-sm md:text-base">
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
                    <Label htmlFor="budget" className="text-sm md:text-base">Budget Range</Label>
                    <Select onValueChange={(value) => handleChange("budget", value)}>
                      <SelectTrigger className="border-border focus:border-coral text-sm md:text-base">
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
                    <Label htmlFor="message" className="text-sm md:text-base">Message *</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your event..."
                      rows={5}
                      value={formData.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      required
                      className="border-border focus:border-coral resize-none text-sm md:text-base"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-coral hover:bg-coral/90 text-white text-base md:text-lg py-6 disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Submit Request"}
                  </Button>

                  <p className="text-xs md:text-sm text-muted-foreground text-center">
                    We'll review your request and get back to you within 24 hours
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
