declare module "*?responsive" {
  const picture: import("./types/picture").Picture;
  export default picture;
}

declare module "*format=webp" {
  const src: string;
  export default src;
}
