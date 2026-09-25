import { memo, useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import MobileNav from "./MobileNav";
import { trackPhoneClick } from "@/lib/analytics";
import { NAV_LINKS, PHONE_DISPLAY, PHONE_HREF } from "@/lib/site";
import { cn } from "@/lib/utils";
import logoImage from "@/assets/pattysdelightslogo-removebg.png?w=112&format=webp";

const SCROLL_THRESHOLD = 24;

const Header = memo(() => {
  const { pathname } = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let frame: number | null = null;
    const update = () => {
      frame = null;
      setIsScrolled(window.scrollY > SCROLL_THRESHOLD);
    };
    const onScroll = () => {
      if (frame === null) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame !== null) cancelAnimationFrame(frame);
    };
  }, []);

  // On the home hero the header floats transparent until the visitor scrolls
  const overHero = pathname === "/" && !isScrolled;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,border-color] duration-300",
        overHero
          ? "border-b border-transparent bg-transparent"
          : "border-b border-border/70 bg-paper/95 shadow-[0_1px_12px_-6px_hsl(var(--ink)/0.15)] backdrop-blur supports-[backdrop-filter]:bg-paper/85"
      )}
    >
      <div className="container mx-auto flex h-16 items-center gap-6 px-4 md:h-20">
        <Link
          to="/"
          aria-label="Patty's Delights home"
          className="flex shrink-0 items-center gap-3 text-secondary"
        >
          <img
            src={logoImage}
            alt=""
            width={56}
            height={56}
            className="h-11 w-11 md:h-12 md:w-12"
          />
          <span className="whitespace-nowrap font-serif text-xl font-semibold tracking-tight md:text-2xl">
            Patty's Delights
          </span>
        </Link>

        <nav aria-label="Main" className="hidden flex-1 items-center justify-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end
              className={({ isActive }) =>
                cn(
                  "relative py-2 text-[0.95rem] font-medium transition-colors",
                  "after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:bg-coral after:transition-transform after:duration-300",
                  isActive ? "after:scale-x-100" : "after:scale-x-0 hover:after:scale-x-100",
                  isActive ? "text-secondary" : "text-foreground/75 hover:text-secondary"
                )
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-5 lg:ml-0">
          <a
            href={PHONE_HREF}
            onClick={trackPhoneClick}
            className="hidden items-center gap-2 text-sm font-medium text-secondary transition-colors hover:text-coral-deep xl:flex"
          >
            <Phone aria-hidden="true" className="h-4 w-4" />
            {PHONE_DISPLAY}
          </a>
          <Button asChild size="sm" className="hidden lg:inline-flex">
            <Link to="/contact">Request a Quote</Link>
          </Button>
          <MobileNav />
        </div>
      </div>
    </header>
  );
});

Header.displayName = "Header";

export default Header;
