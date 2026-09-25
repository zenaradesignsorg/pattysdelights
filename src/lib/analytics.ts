/**
 * Google Analytics 4 (GA4) Integration
 * 
 * This module handles all GA4 tracking functionality including:
 * - Page views
 * - Custom events
 * - User interactions
 */

type GtagParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    gtag?: (command: 'config' | 'event' | 'js' | 'set', targetId: string | Date, config?: GtagParams) => void;
    dataLayer?: unknown[];
  }
}

// Get GA4 Measurement ID from environment variable
const GA4_MEASUREMENT_ID = import.meta.env.VITE_GA4_MEASUREMENT_ID || 'G-DLRC2DY0R2';

/**
 * Track a page view.
 * gtag is configured with send_page_view: false in index.html,
 * so this is the single source of page_view events (initial load + every route change).
 */
export const trackPageView = (path: string, title?: string) => {
  if (!window.gtag || !GA4_MEASUREMENT_ID) {
    return;
  }

  window.gtag('event', 'page_view', {
    page_path: path,
    page_location: window.location.href,
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
  eventParams?: GtagParams
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
export const trackFormSubmit = (formName: string, formData?: GtagParams) => {
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
