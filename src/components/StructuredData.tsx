import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Structured Data Component
 * Adds JSON-LD structured data for better SEO and rich snippets
 */
const StructuredData = () => {
  const location = useLocation();

  useEffect(() => {
    // Remove existing structured data script if it exists
    const existingScript = document.getElementById("structured-data");
    if (existingScript) {
      existingScript.remove();
    }

    // Base organization schema
    const organizationSchema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Patty's Delights",
      "description": "Premium event catering specializing in fruit platters, dessert tables, and beverage stations across the Greater Toronto Area.",
      "url": "https://www.pattysdelights.com",
      "logo": "https://www.pattysdelights.com/favicon-512x512.png",
      "image": "https://www.pattysdelights.com/hero-fruits.jpg",
      "telephone": "+16476677559",
      "email": "Pattysdelightsinc@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Greater Toronto Area",
        "addressRegion": "ON",
        "addressCountry": "CA"
      },
      "areaServed": [
        "Toronto",
        "Mississauga",
        "Brampton",
        "Markham",
        "Vaughan",
        "Scarborough",
        "Oakville"
      ],
      "priceRange": "$$",
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "09:00",
          "closes": "19:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Saturday", "Sunday"],
          "opens": "10:00",
          "closes": "17:00"
        }
      ],
      "sameAs": [
        "https://www.instagram.com/pattys.delights/"
      ]
    };

    // Page-specific schemas
    let pageSchema = null;

    if (location.pathname === "/") {
      // Home page - Service schema
      pageSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Event Catering",
        "provider": {
          "@type": "LocalBusiness",
          "name": "Patty's Delights"
        },
        "areaServed": {
          "@type": "City",
          "name": "Greater Toronto Area"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Event Catering Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Fruit Platters & Carving"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Dessert Tables"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Beverage Stations"
              }
            }
          ]
        }
      };
    } else if (location.pathname === "/about") {
      // About page - Person schema
      pageSchema = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Patty",
        "jobTitle": "Owner & Event Caterer",
        "worksFor": {
          "@type": "LocalBusiness",
          "name": "Patty's Delights"
        },
        "description": "10+ years of cooking and baking experience, bringing authentic flavors with a caring mom's touch to events across the GTA."
      };
    } else if (location.pathname === "/contact") {
      // Contact page - ContactPage schema
      pageSchema = {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "mainEntity": {
          "@type": "LocalBusiness",
          "name": "Patty's Delights",
          "telephone": "+16476677559",
          "email": "Pattysdelightsinc@gmail.com"
        }
      };
    }

    // Create and inject structured data scripts
    const createScript = (schema: object, id: string) => {
      const script = document.createElement("script");
      script.id = id;
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
    };

    createScript(organizationSchema, "structured-data-organization");
    if (pageSchema) {
      createScript(pageSchema, "structured-data-page");
    }

    // Cleanup function
    return () => {
      const orgScript = document.getElementById("structured-data-organization");
      const pageScript = document.getElementById("structured-data-page");
      if (orgScript) orgScript.remove();
      if (pageScript) pageScript.remove();
    };
  }, [location.pathname]);

  return null;
};

export default StructuredData;
