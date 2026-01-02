import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";
import MobileNav from "./MobileNav";

const Header = ({ transparent = false }: { transparent?: boolean }) => {
  const location = useLocation();
  
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];
  
  const isActive = (path: string) => location.pathname === path;
  
  const handleLinkClick = () => {
    // Ensure instant scroll to top on navigation (no animation for instant feel)
    window.scrollTo(0, 0);
  };
  
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 ${
      transparent 
        ? "bg-transparent backdrop-blur-none border-b-0" 
        : "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border"
    }`}>
      {/* Top bar */}
      {!transparent && (
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
      )}
      
      {/* Main header */}
      <div className={`container mx-auto px-4 ${transparent ? 'py-6' : 'py-4'}`}>
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            onClick={handleLinkClick}
            className={`text-2xl md:text-3xl font-serif font-bold hover:text-primary transition-colors ${
              transparent ? 'text-white' : 'text-secondary'
            }`}
          >
            Patty's Delights
          </Link>
          
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={handleLinkClick}
                className={`font-medium transition-colors hover:text-primary ${
                  isActive(link.path) 
                    ? "text-primary" 
                    : transparent 
                      ? "text-white" 
                      : "text-foreground"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
          
          <div className="flex items-center gap-4">
            <Button asChild size={transparent ? "sm" : "lg"} className={`hidden md:inline-flex ${
              transparent 
                ? "bg-white text-primary hover:bg-white/90" 
                : ""
            }`}>
              <Link to="/contact" onClick={handleLinkClick}>Buy Now</Link>
            </Button>
            <MobileNav isWhite={transparent} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
