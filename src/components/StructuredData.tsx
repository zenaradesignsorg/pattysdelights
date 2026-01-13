import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Structured Data Component
 * Adds JSON-LD structured data for better SEO and rich snippets
 */
const StructuredData = () => {
  const location = useLocation();

  useEffect(() => {
    // Remove existing structured data scripts if they exist
    const existingScripts = [
      "structured-data-organization",
      "structured-data-page",
      "structured-data-faq",
      "structured-data-breadcrumb"
    ];
    existingScripts.forEach(id => {
      const script = document.getElementById(id);
      if (script) {
        script.remove();
      }
    });

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
    let faqSchema = null;
    let breadcrumbSchema = null;

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
      
      // Breadcrumb for About page
      breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.pattysdelights.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "About",
            "item": "https://www.pattysdelights.com/about"
          }
        ]
      };
    } else if (location.pathname === "/services") {
      // Services page - FAQ schema
      faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Who do you work with?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Patty's Delights serves everyone—from banquet hall owners looking for a reliable catering partner, to event planners coordinating celebrations, to families planning their own special moments at home. Whether you're hosting 20 people or 500, Patty works with you to create something memorable."
            }
          },
          {
            "@type": "Question",
            "name": "What size events do you cater?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Big or small, every event gets the same care and attention. Patty handles everything from intimate house parties to grand banquet hall celebrations. You don't need a huge budget or a fancy venue—if it matters to you, it matters to us. The food is always made fresh, crafted with skill, and served with heart."
            }
          },
          {
            "@type": "Question",
            "name": "Do you coordinate directly with halls?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes! If you're hosting at a banquet hall, Patty works seamlessly with their team to ensure everything runs smoothly. She can also connect you with partner venues if you need a space for your event."
            }
          },
          {
            "@type": "Question",
            "name": "Can you accommodate dietary restrictions?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Absolutely! We work with you to ensure all guests can enjoy our offerings. We can accommodate allergies, vegetarian, vegan, halal, and other dietary needs. Just let us know your requirements when you inquire."
            }
          },
          {
            "@type": "Question",
            "name": "How much setup time do you need?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Typically, we arrive 1-2 hours before your event starts to set up stations beautifully. The exact timing depends on the complexity of your order. We coordinate with you to ensure everything is ready when your guests arrive."
            }
          },
          {
            "@type": "Question",
            "name": "Do you require power or water access?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "For some stations (like ice cream or bubble tea), we do need access to power. Water access is helpful but not always required. We'll discuss all technical needs during the planning phase."
            }
          },
          {
            "@type": "Question",
            "name": "Do you provide serving staff?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes! For certain stations like bubble tea or made-to-order items, we provide friendly staff to serve your guests and keep everything running smoothly throughout your event."
            }
          },
          {
            "@type": "Question",
            "name": "How does cleanup work?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We handle all cleanup for our stations. At the end of your event, we pack up everything and leave the space as we found it. You focus on enjoying your guests!"
            }
          },
          {
            "@type": "Question",
            "name": "How far in advance should I book?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "For larger events, we recommend reaching out 1-2 weeks in advance. For home parties, about a week is ideal. That said, if you have a last-minute celebration, don't hesitate to contact us—we'll do our best to make it happen!"
            }
          }
        ]
      };
      
      // Breadcrumb for Services page
      breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.pattysdelights.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Services",
            "item": "https://www.pattysdelights.com/services"
          }
        ]
      };
    } else if (location.pathname === "/gallery") {
      // Breadcrumb for Gallery page
      breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.pattysdelights.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Gallery",
            "item": "https://www.pattysdelights.com/gallery"
          }
        ]
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
      
      // Breadcrumb for Contact page
      breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.pattysdelights.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Contact",
            "item": "https://www.pattysdelights.com/contact"
          }
        ]
      };
    }

    // Create and inject structured data scripts
    const createScript = (schema: object, id: string) => {
      // Remove existing script with same ID if it exists
      const existing = document.getElementById(id);
      if (existing) {
        existing.remove();
      }
      
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
    if (faqSchema) {
      createScript(faqSchema, "structured-data-faq");
    }
    if (breadcrumbSchema) {
      createScript(breadcrumbSchema, "structured-data-breadcrumb");
    }

    // Cleanup function
    return () => {
      const orgScript = document.getElementById("structured-data-organization");
      const pageScript = document.getElementById("structured-data-page");
      const faqScript = document.getElementById("structured-data-faq");
      const breadcrumbScript = document.getElementById("structured-data-breadcrumb");
      if (orgScript) orgScript.remove();
      if (pageScript) pageScript.remove();
      if (faqScript) faqScript.remove();
      if (breadcrumbScript) breadcrumbScript.remove();
    };
  }, [location.pathname]);

  return null;
};

export default StructuredData;
