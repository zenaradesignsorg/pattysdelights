export const NAV_LINKS = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Gallery", path: "/gallery" },
  { name: "Contact", path: "/contact" },
] as const;

export const PHONE_DISPLAY = "(647) 667-7559";
export const PHONE_HREF = "tel:+16476677559";
export const EMAIL = "Pattysdelightsinc@gmail.com";
export const INSTAGRAM_URL = "https://www.instagram.com/pattys.delights/";

export const SERVICE_AREAS = [
  "Toronto",
  "Mississauga",
  "Brampton",
  "Markham",
  "Vaughan",
  "Scarborough",
  "Oakville",
] as const;

export const HOURS = [
  { days: "Mon–Fri", time: "9am – 7pm" },
  { days: "Sat–Sun", time: "10am – 5pm" },
] as const;
