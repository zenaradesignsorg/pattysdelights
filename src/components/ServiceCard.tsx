import { SafeImage } from "@/components/SafeImage";
import { ArrowLink } from "@/components/ArrowLink";
import { cn } from "@/lib/utils";
import type { Picture } from "@/types/picture";

interface ServiceCardProps {
  title: string;
  description: string;
  image: Picture;
  imageAlt: string;
  features: string[];
  /** Full-width horizontal layout, used for the closing "Custom Requests" card */
  wide?: boolean;
}

const ServiceCard = ({ title, description, image, imageAlt, features, wide = false }: ServiceCardProps) => (
  <article
    className={cn(
      "group flex h-full flex-col",
      wide && "overflow-hidden rounded-md bg-muted md:grid md:grid-cols-2"
    )}
  >
    <div
      className={cn(
        "overflow-hidden rounded-md bg-muted",
        // Wide: the text column sets the height and the photo fills it
        wide ? "relative aspect-[4/3] rounded-none md:aspect-auto" : "aspect-[4/3]"
      )}
    >
      <SafeImage
        image={image}
        alt={imageAlt}
        sizes={wide ? "(min-width: 768px) 50vw, 92vw" : "(min-width: 1024px) 30vw, (min-width: 768px) 46vw, 92vw"}
        className={cn(
          "h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]",
          wide && "absolute inset-0"
        )}
      />
    </div>
    <div className={cn("flex flex-grow flex-col pt-6", wide && "justify-center p-8 md:min-h-[26rem] md:p-12 lg:p-16")}>
      <h3 className={cn("font-semibold", wide ? "text-3xl md:text-4xl" : "text-2xl")}>{title}</h3>
      <p className={cn("mt-2 leading-relaxed text-muted-foreground", wide && "mt-4 max-w-lg text-lg")}>{description}</p>
      <ul className={cn("mb-6 mt-5 flex-grow space-y-2 border-t border-border pt-5", wide && "sm:columns-2 sm:gap-8")}>
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-3 text-[0.95rem] leading-snug text-foreground/85 break-inside-avoid">
            <span aria-hidden="true" className="mt-[0.6rem] h-px w-3 shrink-0 bg-coral" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <ArrowLink to="/contact" className="self-start">
        Request a Quote
      </ArrowLink>
    </div>
  </article>
);

export default ServiceCard;
