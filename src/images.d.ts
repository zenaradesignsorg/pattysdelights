declare module '*&format=webp' {
  const src: string;
  export default src;
}

declare module '*&format=avif' {
  const src: string;
  export default src;
}

declare module '*&w=*&format=avif&as=srcset' {
  const srcSet: string;
  export default srcSet;
}

declare module '*&w=*&format=webp&as=srcset' {
  const srcSet: string;
  export default srcSet;
}

declare module '*&w=*' {
  const src: string;
  export default src;
}
