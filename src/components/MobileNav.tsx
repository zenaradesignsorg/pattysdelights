import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const MobileNav = ({ isWhite = false }: { isWhite?: boolean }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];
  
  const isActive = (path: string) => location.pathname === path;
  
  const closeMenu = () => setIsOpen(false);
  
  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);
  
  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`md:hidden p-2 hover:bg-muted rounded-lg transition-colors ${
          isWhite ? 'text-white hover:bg-white/10' : ''
        }`}
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>
      
      {/* Mobile menu overlay */}
      {isOpen && createPortal(
        <div className="fixed inset-0 bg-background z-[9999] md:hidden">
          <div className="container mx-auto px-4 py-6">
            <div className="flex items-center justify-between mb-8">
              <Link 
                to="/" 
                className="text-2xl font-serif font-bold text-secondary"
                onClick={closeMenu}
              >
                Patty's Delights
              </Link>
              <button
                onClick={closeMenu}
                className="p-2 hover:bg-muted rounded-lg transition-colors"
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={closeMenu}
                  className={`text-lg font-medium py-3 px-4 rounded-lg transition-colors ${
                    isActive(link.path) 
                      ? "bg-coral text-white" 
                      : "hover:bg-muted text-foreground"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Button asChild size="lg" className="mt-4 bg-coral hover:bg-coral/90">
                <Link to="/contact" onClick={closeMenu}>
                  Buy Now
                </Link>
              </Button>
            </nav>
          </div>
        </div>,
        document.body
      )}
    </>
  );
};

export default MobileNav;

