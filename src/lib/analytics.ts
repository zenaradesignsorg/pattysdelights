/**
 * Google Analytics 4 (GA4) Integration
 * 
 * This module handles all GA4 tracking functionality including:
 * - Page views
 * - Custom events
 * - User interactions
 */

declare global {
  interface Window {
    gtag?: (
      command: 'config' | 'event' | 'js' | 'set',
      targetId: string | Date,
      config?: Record<string, any>
    ) => void;
    dataLayer?: any[];
  }
}

// Get GA4 Measurement ID from environment variable
const GA4_MEASUREMENT_ID = import.meta.env.VITE_GA4_MEASUREMENT_ID || 'G-DLRC2DY0R2';

/**
 * Initialize Google Analytics 4
 * This should be called once when the app loads
 * Note: The gtag.js script is loaded in index.html, so we just ensure gtag is available
 */
export const initGA4 = () => {
  // Only initialize if we have a valid measurement ID
  if (!GA4_MEASUREMENT_ID) {
    if (import.meta.env.DEV) {
      console.log('GA4: No tracking ID configured. Analytics will not be active.');
    }
    return;
  }

  // Ensure dataLayer and gtag are initialized (script in index.html should handle this)
  window.dataLayer = window.dataLayer || [];
  
  // If gtag is not already defined (should be from index.html), define it
  if (!window.gtag) {
    window.gtag = function() {
      window.dataLayer.push(arguments);
    };
  }

  // Track initial page view
  if (window.gtag) {
    window.gtag('config', GA4_MEASUREMENT_ID, {
      page_path: window.location.pathname,
    });
  }
};

/**
 * Track a page view
 * Call this when the route changes
 */
export const trackPageView = (path: string, title?: string) => {
  if (!window.gtag || !GA4_MEASUREMENT_ID) {
    return;
  }

  window.gtag('config', GA4_MEASUREMENT_ID, {
    page_path: path,
    page_title: title || document.title,
  });
};

/**
 * Track a custom event
 * @param eventName - Name of the event (e.g., 'button_click', 'form_submit')
 * @param eventParams - Additional parameters for the event
 */
export const trackEvent = (
  eventName: string,
  eventParams?: Record<string, any>
) => {
  if (!window.gtag || !GA4_MEASUREMENT_ID) {
    if (import.meta.env.DEV) {
      console.log('GA4 Event (not tracked - no ID):', eventName, eventParams);
    }
    return;
  }

  window.gtag('event', eventName, eventParams);
};

/**
 * Track form submissions
 */
export const trackFormSubmit = (formName: string, formData?: Record<string, any>) => {
  trackEvent('form_submit', {
    form_name: formName,
    ...formData,
  });
};

/**
 * Track button clicks
 */
export const trackButtonClick = (buttonName: string, location?: string) => {
  trackEvent('button_click', {
    button_name: buttonName,
    location: location || window.location.pathname,
  });
};

/**
 * Track phone number clicks
 */
export const trackPhoneClick = () => {
  trackEvent('phone_click', {
    phone_number: '(647) 667-7559',
  });
};

/**
 * Track email clicks
 */
export const trackEmailClick = () => {
  trackEvent('email_click', {
    email: 'Pattysdelightsinc@gmail.com',
  });
};

/**
 * Track external link clicks
 */
export const trackExternalLink = (url: string, linkText?: string) => {
  trackEvent('external_link_click', {
    link_url: url,
    link_text: linkText,
  });
};
