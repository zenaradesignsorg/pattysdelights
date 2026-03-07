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
  style
}: ImageProps) => {
  // These are handled by vite-imagetools at build time
  const avif = `${src}?format=avif`;
  const webp = `${src}?format=webp`;

  const imgStyle: React.CSSProperties = {
    ...style,
    ...(objectFit && { objectFit }),
    ...(objectPosition && { objectPosition }),
  };

  return (
    <picture className={className}>
      <source srcSet={avif} type="image/avif" />
      <source srcSet={webp} type="image/webp" />
      <img
        src={src}
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
