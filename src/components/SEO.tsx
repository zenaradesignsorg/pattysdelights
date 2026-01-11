import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * SEO Component
 * Updates meta tags, canonical URLs, and structured data for each page
 */
const SEO = () => {
  const location = useLocation();
  const baseUrl = "https://www.pattysdelights.com";

  // Page-specific SEO data
  const seoData: Record<string, {
    title: string;
    description: string;
    canonical: string;
    ogImage?: string;
  }> = {
    "/": {
      title: "Patty's Delights - Fresh Handcrafted Treats for GTA Events",
      description: "Beautiful fruit platters, dessert tables, bubble tea & ice cream stations for house parties and banquet halls across the GTA. Handmade with a mom's touch.",
      canonical: `${baseUrl}/`,
      ogImage: `${baseUrl}/hero-fruits.jpg`,
    },
    "/about": {
      title: "About Patty's Delights - Meet the Artist Behind the Magic",
      description: "Meet Patty, the heart behind Patty's Delights. 10+ years of cooking and baking experience bringing authentic flavors with a caring mom's touch to GTA events.",
      canonical: `${baseUrl}/about`,
      ogImage: `${baseUrl}/patty-profile.jpg`,
    },
    "/services": {
      title: "Services - Fruit Platters, Dessert Tables & Beverage Stations | Patty's Delights",
      description: "Premium event catering services including fruit platters, fruit carving, dessert tables, bubble tea stations, ice cream & kulfi, tea stations, and juice bars across the GTA.",
      canonical: `${baseUrl}/services`,
    },
    "/gallery": {
      title: "Gallery - See Our Beautiful Event Creations | Patty's Delights",
      description: "Browse our collection of beautifully styled events, fruit platters, dessert tables, and beverage stations. See the artistry and quality that makes every event special.",
      canonical: `${baseUrl}/gallery`,
    },
    "/contact": {
      title: "Contact Us - Get a Quote for Your Event | Patty's Delights",
      description: "Contact Patty's Delights for your next event. Serving Toronto, Mississauga, Brampton, Markham, Vaughan, Scarborough, and Oakville. Get a custom quote today!",
      canonical: `${baseUrl}/contact`,
    },
  };

  const currentPage = seoData[location.pathname] || seoData["/"];

  useEffect(() => {
    // Update document title
    document.title = currentPage.title;

    // Update or create meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute("content", currentPage.description);

    // Update canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute("href", currentPage.canonical);

    // Update Open Graph tags
    const updateOGTag = (property: string, content: string) => {
      let ogTag = document.querySelector(`meta[property="${property}"]`);
      if (!ogTag) {
        ogTag = document.createElement("meta");
        ogTag.setAttribute("property", property);
        document.head.appendChild(ogTag);
      }
      ogTag.setAttribute("content", content);
    };

    updateOGTag("og:title", currentPage.title);
    updateOGTag("og:description", currentPage.description);
    updateOGTag("og:url", currentPage.canonical);
    if (currentPage.ogImage) {
      updateOGTag("og:image", currentPage.ogImage);
    }
  }, [location.pathname, currentPage]);

  return null;
};

export default SEO;
