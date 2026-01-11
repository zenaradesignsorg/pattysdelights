# Security Policy

This document outlines the security measures implemented for the Patty's Delights website and provides guidelines for reporting security vulnerabilities.

## Security Measures Implemented

### 1. Input Validation & Sanitization

- **Client-Side Validation**: All form inputs are validated before submission
  - Length limits enforced (`maxLength` attributes)
  - Format validation (email, phone numbers)
  - Required field validation
  
- **Server-Side Sanitization**: All user input is sanitized before processing
  - HTML escaping to prevent XSS attacks
  - Email header injection prevention
  - Control character removal
  - Length validation and truncation

**Files**: `src/lib/sanitize.ts`, `src/pages/Contact.tsx`, `api/contact.ts`, `src/api/contact.ts`

### 2. XSS (Cross-Site Scripting) Protection

- All user input is HTML-escaped before being inserted into email templates
- Content Security Policy (CSP) headers configured
- X-XSS-Protection header enabled
- No use of `dangerouslySetInnerHTML` or `innerHTML` with user input

**Files**: `src/lib/sanitize.ts`, `api/contact.ts`, `src/lib/resend.ts`

### 3. Email Header Injection Prevention

- Email addresses are validated and sanitized before use in email headers
- Newline and carriage return characters are removed
- Email format validation using regex patterns
- Reply-To headers are sanitized

**Files**: `src/lib/sanitize.ts`, `api/contact.ts`, `src/lib/resend.ts`

### 4. API Key Security

- API keys are never exposed in client-side code
- Only server-side environment variables are used (`RESEND_API_KEY`)
- Client-side fallback removed to prevent key exposure
- Environment variables are properly gitignored

**Files**: `src/lib/resend.ts`, `.gitignore`

### 5. Security Headers

The following security headers are configured:

- **X-Frame-Options**: DENY (prevents clickjacking)
- **X-Content-Type-Options**: nosniff (prevents MIME type sniffing)
- **X-XSS-Protection**: 1; mode=block (enables XSS filter)
- **Referrer-Policy**: strict-origin-when-cross-origin
- **Strict-Transport-Security**: HSTS enabled (forces HTTPS)
- **Content-Security-Policy**: Restricts resource loading
- **Permissions-Policy**: Restricts browser features

**Files**: `index.html`, `netlify.toml`, `vercel.json`, `public/.htaccess`

### 6. Request Size Limits

- Request body size limited to 50KB
- Input length limits enforced on all form fields
- Server-side validation of request size

**Files**: `api/contact.ts`, `src/api/contact.ts`, `src/pages/Contact.tsx`

### 7. Error Handling

- Generic error messages returned to clients (no sensitive information leaked)
- Detailed errors logged server-side only
- No stack traces exposed to users

**Files**: `api/contact.ts`, `src/api/contact.ts`

### 8. Anti-Spam Protection

Multiple layers of anti-spam protection:

- **Honeypot Field**: Hidden form field that bots fill but humans don't see
  - Field is visually hidden using CSS (`position: absolute`, `left: -9999px`)
  - Bots typically fill all form fields, including hidden ones
  - If honeypot is filled, submission is silently rejected
  
- **Time-Based Validation**: Prevents instant form submissions
  - Tracks time from form load to submission
  - Rejects submissions made in less than 3 seconds
  - Legitimate users need time to fill out the form
  
- **Rate Limiting**: Documentation provided for implementation
  - 5 requests per 15 minutes per IP (recommended)
  - Configurable limits
  - Support for Vercel, Netlify, and custom implementations

**Files**: `src/pages/Contact.tsx`, `api/contact.ts`, `src/api/contact.ts`, `RATE_LIMITING.md`

### 9. CSRF Protection

CSRF protection strategy documented:
- Origin header validation
- CORS configuration
- Security headers (X-Frame-Options, CSP)
- CSRF token implementation guide (if needed)

**Files**: `CSRF_PROTECTION.md`

## Input Validation Limits

The following limits are enforced:

- **Name**: 100 characters max
- **Email**: 320 characters max (RFC 5321 limit)
- **Phone**: 20 characters max
- **Message**: 5,000 characters max
- **Date**: 10 characters max (YYYY-MM-DD format)
- **Guest Count**: 1-100,000 range
- **Request Body**: 50KB max

## Security Best Practices

### For Developers

1. **Never commit API keys or secrets** to version control
2. **Always sanitize user input** before using it
3. **Use environment variables** for sensitive configuration
4. **Keep dependencies updated** to patch security vulnerabilities
5. **Review security headers** when deploying to new platforms
6. **Test input validation** with malicious payloads
7. **Monitor error logs** for suspicious activity

### For Deployment

1. **Use HTTPS** in production (enforced by HSTS header)
2. **Set environment variables** securely in your hosting platform
3. **Enable rate limiting** in production
4. **Monitor API usage** for unusual patterns
5. **Keep serverless functions updated**
6. **Review security headers** after deployment

## Dependency Security

Regularly update dependencies to patch security vulnerabilities:

```bash
# Check for vulnerabilities
npm audit

# Fix automatically
npm audit fix

# Update dependencies
npm update
```

## Reporting Security Vulnerabilities

If you discover a security vulnerability, please report it responsibly:

1. **Do NOT** create a public GitHub issue
2. **Email** security concerns to: Pattysdelightsinc@gmail.com
3. **Include**:
   - Description of the vulnerability
   - Steps to reproduce
   - Potential impact
   - Suggested fix (if any)

We will:
- Acknowledge receipt within 48 hours
- Investigate and respond within 7 days
- Fix critical issues as soon as possible
- Credit you for responsible disclosure (if desired)

## Security Checklist

Before deploying to production, verify:

- [ ] All environment variables are set (no placeholders)
- [ ] Security headers are configured correctly
- [ ] Rate limiting is enabled
- [ ] HTTPS is enforced
- [ ] API keys are not exposed in client code
- [ ] Input validation is working
- [ ] Error messages don't leak sensitive information
- [ ] Dependencies are up to date (`npm audit`)
- [ ] `.env` files are in `.gitignore`
- [ ] Security headers are tested (use browser DevTools)

## Security Testing

### Manual Testing

1. **XSS Testing**: Try submitting `<script>alert('XSS')</script>` in form fields
2. **SQL Injection**: Not applicable (no database)
3. **Email Injection**: Try submitting emails with newlines: `test@example.com\nBcc: attacker@evil.com`
4. **Rate Limiting**: Submit form multiple times quickly
5. **Input Length**: Try submitting extremely long strings
6. **Origin Validation**: Try submitting from different origin

### Automated Testing

Consider using security scanning tools:
- OWASP ZAP
- Snyk
- npm audit
- Security Headers scanner (https://securityheaders.com)

## Updates

This security policy is reviewed and updated regularly. Last updated: 2024.

## References

- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [Content Security Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP)
- [Security Headers](https://owasp.org/www-project-secure-headers/)
- [Resend Security](https://resend.com/docs)
