import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { trackPhoneClick } from "@/lib/analytics";
import { NAV_LINKS, PHONE_DISPLAY, PHONE_HREF } from "@/lib/site";
import { cn } from "@/lib/utils";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();
  const closeRef = useRef<HTMLButtonElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  // Close whenever the route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Lock scroll, move focus in, close on Escape, return focus on close
  useEffect(() => {
    if (!isOpen) return;
    const toggle = toggleRef.current;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
      toggle?.focus();
    };
  }, [isOpen]);

  return (
    <>
      <button
        ref={toggleRef}
        type="button"
        onClick={() => setIsOpen(true)}
        className="-mr-2 rounded-full p-2.5 text-secondary transition-colors hover:bg-muted lg:hidden"
        aria-label="Open menu"
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
      >
        <Menu className="h-6 w-6" />
      </button>

      {isOpen &&
        createPortal(
          <div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
            className="fixed inset-0 z-[9999] flex flex-col bg-paper animate-in fade-in duration-200 lg:hidden"
          >
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
              <span className="font-serif text-xl font-semibold text-secondary">Patty's Delights</span>
              <button
                ref={closeRef}
                type="button"
                onClick={() => setIsOpen(false)}
                className="-mr-2 rounded-full p-2.5 text-secondary transition-colors hover:bg-muted"
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <nav aria-label="Mobile" className="container mx-auto flex flex-1 flex-col px-4 pt-6">
              {NAV_LINKS.map((link, i) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  end
                  className={({ isActive }) =>
                    cn(
                      "flex items-baseline gap-4 border-b border-border py-4 font-serif text-3xl transition-colors",
                      isActive ? "text-coral-deep" : "text-secondary hover:text-coral-deep"
                    )
                  }
                >
                  <span className="font-sans text-xs font-semibold tabular-nums text-muted-foreground">
                    0{i + 1}
                  </span>
                  {link.name}
                </NavLink>
              ))}
            </nav>

            <div className="container mx-auto space-y-3 px-4 pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-6">
              <Button asChild size="lg" className="w-full">
                <Link to="/contact">Request a Quote</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="w-full">
                <a href={PHONE_HREF} onClick={trackPhoneClick}>
                  <Phone aria-hidden="true" />
                  {PHONE_DISPLAY}
                </a>
              </Button>
            </div>
          </div>,
          document.body
        )}
    </>
  );
};

export default MobileNav;
