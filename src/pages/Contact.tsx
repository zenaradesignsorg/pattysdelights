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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission would be handled here
    toast.success("Quote request received! We'll be in touch soon.");
    console.log("Form data:", formData);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-secondary mb-6">
              Get in Touch
            </h1>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6" />
            <p className="text-xl text-foreground leading-relaxed">
              Tell us about your event—we'll bring the treats
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-8">
              <div className="bg-card rounded-2xl p-8 shadow-card">
                <h2 className="text-2xl font-serif font-bold text-secondary mb-6">
                  Contact Information
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-secondary mb-1">Phone</p>
                      <a href="tel:+14165551234" className="text-muted-foreground hover:text-primary transition-colors">
                        (416) 555-1234
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-secondary mb-1">Email</p>
                      <a href="mailto:hello@pattysdelights.com" className="text-muted-foreground hover:text-primary transition-colors">
                        hello@pattysdelights.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-secondary mb-1">Hours</p>
                      <p className="text-muted-foreground">Mon-Fri: 9am - 7pm</p>
                      <p className="text-muted-foreground">Sat-Sun: 10am - 5pm</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-secondary mb-1">Coverage</p>
                      <p className="text-muted-foreground">
                        Greater Toronto Area including Toronto, Mississauga, Brampton, Markham, Vaughan, Scarborough, Oakville
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-primary text-primary-foreground rounded-2xl p-8 shadow-card">
                <h3 className="text-xl font-serif font-bold mb-3">
                  Quick Response Guaranteed
                </h3>
                <p className="opacity-90">
                  We typically respond to all inquiries within 24 hours. For urgent requests, please call us directly!
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-card rounded-2xl p-8 md:p-10 shadow-card">
                <h2 className="text-3xl font-serif font-bold text-secondary mb-2">
                  Request a Quote
                </h2>
                <p className="text-muted-foreground mb-8">
                  Fill out the form below and we'll get back to you with a custom quote
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="(416) 555-1234"
                        value={formData.phone}
                        onChange={(e) => handleChange("phone", e.target.value)}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="eventDate">Event Date *</Label>
                      <Input
                        id="eventDate"
                        type="date"
                        value={formData.eventDate}
                        onChange={(e) => handleChange("eventDate", e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="eventTime">Event Start Time</Label>
                      <Input
                        id="eventTime"
                        type="time"
                        value={formData.eventTime}
                        onChange={(e) => handleChange("eventTime", e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="guestCount">Guest Count *</Label>
                      <Input
                        id="guestCount"
                        type="number"
                        placeholder="50"
                        value={formData.guestCount}
                        onChange={(e) => handleChange("guestCount", e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="venue">Venue / City *</Label>
                    <Input
                      id="venue"
                      placeholder="e.g., Toronto, Mississauga Banquet Hall"
                      value={formData.venue}
                      onChange={(e) => handleChange("venue", e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="services">Services Interested In</Label>
                    <Select onValueChange={(value) => handleChange("services", value)}>
                      <SelectTrigger>
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

                  <div className="space-y-2">
                    <Label htmlFor="budget">Budget Range</Label>
                    <Select onValueChange={(value) => handleChange("budget", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select budget range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="under-500">Under $500</SelectItem>
                        <SelectItem value="500-1000">$500 - $1,000</SelectItem>
                        <SelectItem value="1000-2000">$1,000 - $2,000</SelectItem>
                        <SelectItem value="2000-plus">$2,000+</SelectItem>
                        <SelectItem value="flexible">Flexible</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="notes">Additional Notes / Theme</Label>
                    <Textarea
                      id="notes"
                      placeholder="Tell us about your event theme, special requests, dietary restrictions, etc."
                      rows={5}
                      value={formData.notes}
                      onChange={(e) => handleChange("notes", e.target.value)}
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    Submit Quote Request
                  </Button>

                  <p className="text-sm text-muted-foreground text-center">
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
