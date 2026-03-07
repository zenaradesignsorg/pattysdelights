interface ImageProps {
  src: string; // The base path to your PNG in src/assets
  alt: string;
  className?: string;
  priority?: boolean; // If true, it's for Hero images
  objectFit?: string; // For object-cover, object-contain, etc.
  objectPosition?: string; // For positioning (e.g., 'center 20%')
  onError?: (e: React.SyntheticEvent<HTMLImageElement, Event>) => void;
  onLoad?: (e: React.SyntheticEvent<HTMLImageElement, Event>) => void;
  style?: React.CSSProperties;
  sizes?: string; // Optional custom sizes attribute for responsive images
}

export const SafeImage = ({ 
  src, 
  alt, 
  className, 
  priority = false,
  objectFit,
  objectPosition,
  onError,
  onLoad,
  style,
  sizes = "(max-width: 1200px) 100vw, 1200px"
}: ImageProps) => {
  // Generate responsive srcsets with multiple widths for optimal mobile performance
  // vite-imagetools will generate these at build time
  const avifSet = `${src}?w=400;800;1200&format=avif&as=srcset`;
  const webpSet = `${src}?w=400;800;1200&format=webp&as=srcset`;
  const fallbackSrc = `${src}?w=800`; // 800px is a good middle ground for fallback
  const fallbackSrcSet = `${src}?w=400;800;1200&as=srcset`; // Original format srcset for fallback

  const imgStyle: React.CSSProperties = {
    ...style,
    ...(objectFit && { objectFit }),
    ...(objectPosition && { objectPosition }),
  };

  return (
    <picture className={className}>
      <source srcSet={avifSet} type="image/avif" sizes={sizes} />
      <source srcSet={webpSet} type="image/webp" sizes={sizes} />
      <img
        src={fallbackSrc}
        srcSet={fallbackSrcSet}
        sizes={sizes}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : 'auto'}
        className={className}
        style={Object.keys(imgStyle).length > 0 ? imgStyle : undefined}
        onError={onError}
        onLoad={onLoad}
      />
    </picture>
  );
};
