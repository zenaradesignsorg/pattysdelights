import type { CSSProperties, SyntheticEvent } from "react";
import type { Picture } from "@/types/picture";

interface SafeImageProps {
  /** Build-time Picture from an `@/assets/*?responsive` import */
  image: Picture;
  alt: string;
  className?: string;
  /** Above-the-fold images: eager load + high fetch priority */
  priority?: boolean;
  /** How wide the image renders, so the browser picks the right file */
  sizes?: string;
  style?: CSSProperties;
  onError?: (e: SyntheticEvent<HTMLImageElement, Event>) => void;
}

const MODERN_FORMATS = ["avif", "webp"] as const;

export const SafeImage = ({
  image,
  alt,
  className,
  priority = false,
  sizes = "100vw",
  style,
  onError,
}: SafeImageProps) => {
  // The fallback (jpeg/png) srcset is whichever source isn't a modern format
  const fallbackSrcSet = Object.entries(image.sources).find(
    ([format]) => !MODERN_FORMATS.includes(format as (typeof MODERN_FORMATS)[number])
  )?.[1];

  return (
    <picture className="contents">
      {MODERN_FORMATS.map((format) =>
        image.sources[format] ? (
          <source key={format} srcSet={image.sources[format]} type={`image/${format}`} sizes={sizes} />
        ) : null
      )}
      <img
        src={image.img.src}
        srcSet={fallbackSrcSet}
        sizes={sizes}
        width={image.img.w}
        height={image.img.h}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        fetchPriority={priority ? "high" : "auto"}
        className={className}
        style={style}
        onError={onError}
      />
    </picture>
  );
};
