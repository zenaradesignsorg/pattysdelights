import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { trackPageView } from "@/lib/analytics";

/**
 * Google Analytics 4 Component
 * Sends one page_view per route (including the first load)
 */
const GoogleAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    // Wait a frame so the SEO component has set this route's document.title
    const id = requestAnimationFrame(() => trackPageView(location.pathname + location.search));
    return () => cancelAnimationFrame(id);
  }, [location.pathname, location.search]);

  return null;
};

export default GoogleAnalytics;
