import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Stagger delay in ms */
  delay?: number;
}

// One shared observer for every Reveal on the page
let observer: IntersectionObserver | null = null;

const getObserver = () => {
  if (observer || typeof IntersectionObserver === "undefined") return observer;
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-revealed");
          observer?.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
  );
  return observer;
};

/**
 * Fades content up as it scrolls into view.
 * Content stays fully visible unless main.tsx has enabled `.reveal-ready`
 * (JS running + no reduced-motion preference).
 */
export const Reveal = ({ children, className, delay = 0 }: RevealProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    const obs = getObserver();
    if (!el) return;
    if (!obs) {
      el.classList.add("is-revealed");
      return;
    }
    obs.observe(el);
    return () => obs.unobserve(el);
  }, []);

  return (
    <div
      ref={ref}
      data-reveal
      className={cn(className)}
      style={delay ? ({ "--reveal-delay": `${delay}ms` } as CSSProperties) : undefined}
    >
      {children}
    </div>
  );
};
