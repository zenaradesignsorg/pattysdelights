import { memo } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";
import MobileNav from "./MobileNav";
import { trackPhoneClick, trackEmailClick } from "@/lib/analytics";
import logoImage from "@/assets/pattysdelightslogo-removebg.png";

// Static navigation links moved outside component to prevent recreation on every render
const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Gallery", path: "/gallery" },
  { name: "Contact", path: "/contact" },
];

const Header = memo(({ transparent = false }: { transparent?: boolean }) => {
  const location = useLocation();
  
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
            <a 
              href="tel:+16476677559" 
              onClick={trackPhoneClick}
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span className="hidden sm:inline">(647) 667-7559</span>
            </a>
            <a 
              href="mailto:Pattysdelightsinc@gmail.com" 
              onClick={trackEmailClick}
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="h-4 w-4" />
              <span className="hidden sm:inline">Pattysdelightsinc@gmail.com</span>
            </a>
          </div>
        </div>
      )}
      
      {/* Main header */}
      <div className={`container mx-auto px-4 ${transparent ? 'py-6' : 'py-4'}`}>
        <div className="flex items-center">
          {/* Left: Logo + Brand */}
          <div className="flex-1">
            <Link 
              to="/" 
              onClick={handleLinkClick}
              className={`flex items-center gap-3 hover:opacity-80 transition-opacity duration-300 ${
                transparent ? 'text-white' : 'text-secondary'
              }`}
            >
              <div className="relative">
                <img 
                  src={logoImage} 
                  alt="Patty's Delights Logo" 
                  className="h-12 md:h-16 w-auto object-contain"
                  loading="eager"
                  decoding="async"
                  {...({ fetchpriority: "high" } as any)}
                  style={{ 
                    filter: transparent 
                      ? 'drop-shadow(0 2px 8px rgba(0,0,0,0.6)) brightness(1.15) contrast(1.1)' 
                      : 'drop-shadow(0 1px 4px rgba(0,0,0,0.3))',
                    maxWidth: '140px'
                  }}
                />
              </div>
              <span className="text-2xl md:text-3xl font-serif font-bold">
                Patty's Delights
              </span>
            </Link>
          </div>
          
          {/* Center: Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 flex-1 justify-center">
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
          
          {/* Right: Button + Mobile Nav */}
          <div className="flex items-center gap-4 flex-1 justify-end">
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
});

Header.displayName = "Header";

export default Header;
