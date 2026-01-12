import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Instagram, Clock, Star } from "lucide-react";
import { trackPhoneClick, trackEmailClick, trackExternalLink } from "@/lib/analytics";

const Footer = () => {
  const handleLinkClick = () => {
    // Ensure instant scroll to top on navigation (no animation for instant feel)
    window.scrollTo(0, 0);
  };
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
              Serving the Greater Toronto Area with fresh, homemade food and beautiful setups. Our goal is to bring a mom's care to every celebration.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/pattys.delights/" 
                target="_blank" 
                rel="noopener noreferrer" 
                onClick={() => trackExternalLink("https://www.instagram.com/pattys.delights/", "Instagram")}
                className="text-muted-foreground hover:text-primary transition-colors" 
                aria-label="Follow us on Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-secondary mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" onClick={handleLinkClick} className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" onClick={handleLinkClick} className="text-muted-foreground hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" onClick={handleLinkClick} className="text-muted-foreground hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/gallery" onClick={handleLinkClick} className="text-muted-foreground hover:text-primary transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" onClick={handleLinkClick} className="text-muted-foreground hover:text-primary transition-colors">
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
                <a 
                  href="tel:+16476677559" 
                  onClick={trackPhoneClick}
                  className="hover:text-primary transition-colors"
                >
                  (647) 667-7559
                </a>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <Mail className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <a 
                  href="mailto:Pattysdelightsinc@gmail.com" 
                  onClick={trackEmailClick}
                  className="hover:text-primary transition-colors"
                >
                  Pattysdelightsinc@gmail.com
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
