/** Shape of a vite-imagetools `as=picture` import */
export interface Picture {
  /** Keyed by format (avif, webp, jpg, png); value is a srcset string */
  sources: Record<string, string>;
  img: {
    src: string;
    w: number;
    h: number;
  };
}
