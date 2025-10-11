import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";
import MobileNav from "./MobileNav";

const Header = () => {
  const location = useLocation();
  
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      {/* Top bar */}
      <div className="bg-muted py-2">
        <div className="container mx-auto px-4 flex justify-end items-center gap-6 text-sm">
          <a href="tel:+14165551234" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
            <Phone className="h-4 w-4" />
            <span className="hidden sm:inline">(416) 555-1234</span>
          </a>
          <a href="mailto:hello@pattysdelights.com" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
            <Mail className="h-4 w-4" />
            <span className="hidden sm:inline">hello@pattysdelights.com</span>
          </a>
        </div>
      </div>
      
      {/* Main header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl md:text-3xl font-serif font-bold text-secondary hover:text-primary transition-colors">
            Patty's Delights
          </Link>
          
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-medium transition-colors hover:text-primary ${
                  isActive(link.path) ? "text-primary" : "text-foreground"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
          
          <div className="flex items-center gap-4">
            <Button asChild size="lg" className="hidden md:inline-flex">
              <Link to="/contact">Request a Quote</Link>
            </Button>
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
