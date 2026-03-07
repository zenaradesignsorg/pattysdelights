/**
 * Helper function to generate optimized image URLs for CSS background-image usage
 * Returns the original image path - vite-imagetools will handle optimization at build time
 * For background images, we use the original format as browsers handle format selection
 * via the picture element, which doesn't work with CSS background-image
 */
export const getOptimizedImageUrl = (src: string): string => {
  return src;
};
