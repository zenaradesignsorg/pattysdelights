import type { CSSProperties } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SafeImage } from "@/components/SafeImage";
import { trackPhoneClick } from "@/lib/analytics";
import { PHONE_HREF } from "@/lib/site";
import { cn } from "@/lib/utils";
import type { Picture } from "@/types/picture";
import carvingImage from "@/assets/fruits-13.jpg?responsive";
import dessertTableImage from "@/assets/dessert-table-04.jpg?responsive";
import fruitTableImage from "@/assets/fruit-table-03.jpg?responsive";
import bubbleTeaImage from "@/assets/bubble-tea-station-02.png?responsive";
import kulfiImage from "@/assets/ice-cream-01.jpg?responsive";

interface Arch {
  image: Picture;
  alt: string;
  caption: string;
  /** Height relative to the tallest arch, like tiers on a buffet table */
  height: string;
  /** Outer arches are hidden on small screens */
  outer?: boolean;
  priority?: boolean;
}

const arches: Arch[] = [
  {
    image: carvingImage,
    alt: "Watermelon hand-carved into a rose",
    caption: "Fruit carving",
    height: "62%",
    outer: true,
  },
  {
    image: dessertTableImage,
    alt: "Dessert table with marigolds and golden lanterns",
    caption: "Dessert tables",
    height: "82%",
  },
  {
    image: fruitTableImage,
    alt: "Banquet fruit table with carved pineapples, papaya boats and dragon fruit",
    caption: "Fruit tables",
    height: "100%",
    priority: true,
  },
  {
    image: bubbleTeaImage,
    alt: "Bubble tea station with matcha and classic milk tea",
    caption: "Bubble tea",
    height: "82%",
  },
  {
    image: kulfiImage,
    alt: "Rows of kulfi and ice cream cups ready to serve",
    caption: "Kulfi & ice cream",
    height: "62%",
    outer: true,
  },
];

/**
 * Home hero: Patty's work set out like a buffet table — arched frames of
 * varying heights standing against a coloured backdrop wall, on a cream tablecloth,
 * with a kolam dot grid behind the type.
 */
export const Hero = () => (
  <section className="relative overflow-hidden bg-hero-wall pt-16 md:pt-20">
    {/* Pulli (kolam dot grid), fading out from the top right */}
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 [background-image:radial-gradient(hsl(var(--coral-deep)/0.4)_1.2px,transparent_1.6px)] [background-size:26px_26px] [mask-image:radial-gradient(ellipse_75%_28%_at_100%_0%,black,transparent)] md:[mask-image:radial-gradient(ellipse_55%_60%_at_85%_10%,black,transparent)]"
    />

    <div className="container relative mx-auto px-4">
      {/* Type */}
      <div className="grid gap-8 pt-10 md:pt-14 lg:grid-cols-12 lg:items-end lg:gap-10 lg:pt-10 xl:pt-14">
        <div className="lg:col-span-8">
          <p className="mb-6 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-secondary sm:text-xs sm:tracking-[0.22em]">
            Fruit art · Desserts · Beverage stations
          </p>
          <h1 className="font-serif text-[3.25rem] font-medium leading-[0.95] tracking-[-0.02em] text-secondary sm:text-7xl lg:text-[6.25rem] xl:text-[7.5rem]">
            <span className="block">Your party,</span>
            <span className="block pl-[12%] font-normal italic text-coral-deep">our passion</span>
          </h1>
        </div>

        <div className="lg:col-span-4 lg:pb-3">
          <p className="max-w-md text-base leading-relaxed text-muted-foreground md:text-lg">
            Bringing mom's cooking to your celebration. Patty creates everything by hand—savory platters, sweet treats, stunning fruit art, and more. Made with love, just like home.
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-4">
            <Button asChild size="lg" className="px-6 sm:px-7">
              <Link to="/contact">
                Request a Quote
                <ArrowRight aria-hidden="true" />
              </Link>
            </Button>
            <a
              href={PHONE_HREF}
              onClick={trackPhoneClick}
              className="inline-flex items-center gap-2 text-sm font-semibold text-secondary underline decoration-secondary/30 underline-offset-[6px] transition-colors hover:text-coral-deep hover:decoration-coral-deep"
            >
              <Phone aria-hidden="true" className="h-4 w-4" />
              Call Now
            </a>
          </div>
        </div>
      </div>

      {/* The table: arches stand on a single edge line */}
      <div className="mt-12 lg:mt-10">
        <ul className="flex h-[300px] items-end gap-2.5 sm:h-[380px] sm:gap-4 lg:h-[clamp(240px,calc(100svh-520px),520px)] lg:gap-5">
          {arches.map((arch, index) => (
            <li
              key={arch.caption}
              className={cn(
                "hero-arch relative min-w-0",
                arch.priority ? "flex-[1.35]" : "flex-1",
                arch.outer && "hidden md:block"
              )}
              style={{ height: arch.height, "--arch-delay": `${index * 90}ms` } as CSSProperties}
            >
              <Link
                to="/services"
                aria-label={`${arch.caption} — see services`}
                className="group block h-full overflow-hidden rounded-t-full bg-muted ring-1 ring-secondary/10"
              >
                <SafeImage
                  image={arch.image}
                  alt={arch.alt}
                  priority={arch.priority || !arch.outer}
                  sizes={arch.priority ? "(min-width: 768px) 26vw, 44vw" : "(min-width: 768px) 19vw, 30vw"}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>

    {/* Table edge, then the cream tablecloth carrying the captions */}
    <div className="relative border-t border-secondary/40 bg-paper">
      <ul aria-hidden="true" className="container mx-auto flex gap-2.5 px-4 pb-10 pt-3 sm:gap-4 md:pb-14 lg:gap-5 lg:pb-12">
        {arches.map((arch) => (
          <li
            key={arch.caption}
            className={cn(
              "min-w-0 truncate text-center font-serif text-xs italic text-secondary/80 sm:text-sm md:text-base",
              arch.priority ? "flex-[1.35]" : "flex-1",
              arch.outer && "hidden md:block"
            )}
          >
            {arch.caption}
          </li>
        ))}
      </ul>
    </div>
  </section>
);
