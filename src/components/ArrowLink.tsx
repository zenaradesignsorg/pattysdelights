import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ArrowLinkProps {
  to: string;
  children: ReactNode;
  className?: string;
  tone?: "dark" | "light";
}

/** Quiet secondary call-to-action: text with an underline and arrow */
export const ArrowLink = ({ to, children, className, tone = "dark" }: ArrowLinkProps) => (
  <Link
    to={to}
    className={cn(
      "group inline-flex items-center gap-2 text-sm font-semibold tracking-[0.01em] underline decoration-1 underline-offset-[6px] transition-colors",
      tone === "light"
        ? "text-paper decoration-paper/40 hover:decoration-paper"
        : "text-secondary decoration-secondary/30 hover:text-coral-deep hover:decoration-coral-deep",
      className
    )}
  >
    {children}
    <ArrowRight aria-hidden="true" className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
  </Link>
);
