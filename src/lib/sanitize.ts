/**
 * Input Sanitization Utilities
 * 
 * Provides functions to sanitize user input to prevent XSS attacks,
 * email header injection, and other security vulnerabilities.
 */

/**
 * HTML escape function to prevent XSS attacks
 * Escapes special characters that could be interpreted as HTML
 */
export const escapeHtml = (text: string): string => {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
    '/': '&#x2F;',
  };
  
  return String(text).replace(/[&<>"'/]/g, (char) => map[char] || char);
};

/**
 * Sanitize text input by removing potentially dangerous characters
 * and trimming whitespace
 */
export const sanitizeText = (text: string, maxLength?: number): string => {
  if (!text) return '';
  
  // Remove control characters except newlines and tabs
  let sanitized = text.replace(/[\x00-\x08\x0B-\x0C\x0E-\x1F\x7F]/g, '');
  
  // Trim whitespace
  sanitized = sanitized.trim();
  
  // Apply length limit if specified
  if (maxLength && sanitized.length > maxLength) {
    sanitized = sanitized.substring(0, maxLength);
  }
  
  return sanitized;
};

/**
 * Validate and sanitize email address
 * Returns null if email is invalid
 */
export const validateAndSanitizeEmail = (email: string): string | null => {
  if (!email) return null;
  
  // Basic email regex pattern
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  // Remove whitespace
  const trimmed = email.trim();
  
  // Check length (RFC 5321 limit is 320 characters)
  if (trimmed.length > 320 || trimmed.length === 0) {
    return null;
  }
  
  // Check for email header injection attempts
  if (/[\r\n]/.test(trimmed)) {
    return null;
  }
  
  // Validate format
  if (!emailRegex.test(trimmed)) {
    return null;
  }
  
  // Convert to lowercase for consistency
  return trimmed.toLowerCase();
};

/**
 * Validate and sanitize phone number
 * Accepts various formats and normalizes to digits only
 */
export const validateAndSanitizePhone = (phone: string): string | null => {
  if (!phone) return null;
  
  // Remove all non-digit characters except + at the start
  let sanitized = phone.trim();
  
  // Check for header injection attempts
  if (/[\r\n]/.test(sanitized)) {
    return null;
  }
  
  // Remove all non-digit characters (keep + if at start)
  const digitsOnly = sanitized.replace(/[^\d+]/g, '');
  
  // Must have at least 10 digits (minimum for valid phone number)
  const digitCount = digitsOnly.replace(/\+/g, '').length;
  
  if (digitCount < 10 || digitCount > 15) {
    return null;
  }
  
  return sanitized;
};

/**
 * Validate input length
 */
export const validateLength = (
  text: string,
  minLength: number,
  maxLength: number
): boolean => {
  if (!text) return minLength === 0;
  return text.length >= minLength && text.length <= maxLength;
};

/**
 * Sanitize for use in email headers (prevents header injection)
 */
export const sanitizeEmailHeader = (text: string): string => {
  if (!text) return '';
  
  // Remove newlines and carriage returns (header injection prevention)
  return text.replace(/[\r\n]/g, '').trim();
};

/**
 * Constants for input validation
 */
export const INPUT_LIMITS = {
  NAME_MAX: 100,
  EMAIL_MAX: 320,
  PHONE_MAX: 20,
  MESSAGE_MAX: 5000,
  GUEST_COUNT_MAX: 100000,
  DATE_MAX: 10, // YYYY-MM-DD format
} as const;
