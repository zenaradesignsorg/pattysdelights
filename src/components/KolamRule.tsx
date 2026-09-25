import { cn } from "@/lib/utils";

interface KolamRuleProps {
  className?: string;
}

/**
 * Hairline divider with a small kolam-inspired knot at its centre —
 * a nod to the Tamil celebrations Patty caters. Use sparingly.
 */
export const KolamRule = ({ className }: KolamRuleProps) => (
  <div aria-hidden="true" className={cn("flex items-center gap-4 text-coral", className)}>
    <span className="h-px flex-1 bg-current opacity-40" />
    <svg viewBox="0 0 48 24" className="h-5 w-10 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.25">
      <path d="M24 3c4 4.5 8 9 0 18C16 12 20 7.5 24 3Z" />
      <path d="M9 12c4.5-4 9-8 18 0-9 8-13.5 4-18 0Z" transform="translate(-3 0)" />
      <path d="M21 12c4.5-4 9-8 18 0-9 8-13.5 4-18 0Z" transform="translate(3 0)" />
      <circle cx="24" cy="12" r="1.4" fill="currentColor" stroke="none" />
      <circle cx="4" cy="12" r="1.1" fill="currentColor" stroke="none" />
      <circle cx="44" cy="12" r="1.1" fill="currentColor" stroke="none" />
    </svg>
    <span className="h-px flex-1 bg-current opacity-40" />
  </div>
);
