import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram, Clock, Star } from "lucide-react";

const Footer = () => {
  const serviceAreas = [
    "Toronto",
    "Mississauga",
    "Brampton",
    "Markham",
    "Vaughan",
    "Scarborough",
    "Oakville",
  ];
  
  return (
    <footer className="bg-cream border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-serif font-bold text-secondary mb-4">
              Patty's Delights
            </h3>
            <p className="text-muted-foreground mb-4">
              Serving the Greater Toronto Area with fresh, handcrafted treats and beautiful event styling.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-secondary mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-muted-foreground hover:text-primary transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="font-semibold text-secondary mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-muted-foreground">
                <Phone className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <a href="tel:+14165551234" className="hover:text-primary transition-colors">
                  (416) 555-1234
                </a>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <Mail className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <a href="mailto:hello@pattysdelights.com" className="hover:text-primary transition-colors">
                  hello@pattysdelights.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span>Greater Toronto Area</span>
              </li>
            </ul>
          </div>
          
          {/* Business Info */}
          <div>
            <h4 className="font-semibold text-secondary mb-4">Business Hours</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>Mon-Fri: 9am - 7pm</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>Sat-Sun: 10am - 5pm</span>
              </li>
            </ul>
            
            <div className="mt-6">
              <h5 className="font-semibold text-secondary mb-3">Why Choose Us?</h5>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-coral" />
                  <span>10+ years experience</span>
                </li>
                <li className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-coral" />
                  <span>500+ happy events</span>
                </li>
                <li className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-coral" />
                  <span>Fresh local ingredients</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Service Areas */}
        <div className="border-t border-border pt-8">
          <h4 className="font-semibold text-secondary mb-3 text-center">Service Areas</h4>
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {serviceAreas.map((area) => (
              <span
                key={area}
                className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
        
        {/* Copyright */}
        <div className="text-center text-sm text-muted-foreground pt-6 border-t border-border">
          <p>&copy; {new Date().getFullYear()} Patty's Delights. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
