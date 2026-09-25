import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  as?: "h1" | "h2";
  /** Use `light` on dark backgrounds */
  tone?: "dark" | "light";
  className?: string;
}

export const SectionHeading = ({
  eyebrow,
  title,
  intro,
  align = "left",
  as: Heading = "h2",
  tone = "dark",
  className,
}: SectionHeadingProps) => {
  const centered = align === "center";

  return (
    <div className={cn("max-w-2xl", centered && "mx-auto text-center", className)}>
      {eyebrow && (
        <p
          className={cn(
            "mb-4 flex items-center gap-3 font-sans text-xs font-semibold uppercase tracking-[0.22em]",
            centered && "justify-center",
            tone === "light" ? "text-coral" : "text-coral-deep"
          )}
        >
          <span aria-hidden="true" className="h-px w-8 bg-current opacity-60" />
          {eyebrow}
        </p>
      )}
      <Heading
        className={cn(
          Heading === "h1" ? "text-4xl md:text-5xl lg:text-6xl" : "text-3xl md:text-4xl lg:text-[2.75rem]",
          "font-semibold",
          tone === "light" && "text-paper"
        )}
      >
        {title}
      </Heading>
      {intro && (
        <p
          className={cn(
            "mt-5 text-base md:text-lg leading-relaxed",
            tone === "light" ? "text-paper/75" : "text-muted-foreground"
          )}
        >
          {intro}
        </p>
      )}
    </div>
  );
};
