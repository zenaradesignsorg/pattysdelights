import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { initGA4, trackPageView } from "@/lib/analytics";

/**
 * Google Analytics 4 Component
 * Initializes GA4 and tracks page views on route changes
 */
const GoogleAnalytics = () => {
  const location = useLocation();

  // Initialize GA4 on mount
  useEffect(() => {
    initGA4();
  }, []);

  // Track page views on route changes
  useEffect(() => {
    trackPageView(location.pathname + location.search);
  }, [location]);

  return null;
};

export default GoogleAnalytics;
