# CSRF Protection Guide

This document explains the CSRF (Cross-Site Request Forgery) protection strategy for the Patty's Delights website.

## What is CSRF?

CSRF is an attack where a malicious website tricks a user's browser into making unauthorized requests to your website. For example, if a user is logged into your site and visits a malicious site, that site could submit forms on your behalf.

## Current Protection Status

### ✅ Already Protected

1. **Same-Origin Policy**: Modern browsers enforce same-origin policy, which provides basic protection
2. **No Authentication Cookies**: Since this is a public contact form without user authentication, CSRF risk is lower
3. **CORS Configuration**: The API endpoint should only accept requests from your domain

### ⚠️ Additional Protection Options

Since the contact form doesn't require authentication, CSRF protection is less critical but still recommended for defense in depth.

## Implementation Options

### Option 1: SameSite Cookies (If Using Cookies)

If you add cookies in the future, ensure they use SameSite attributes:

```typescript
// Example: Setting a cookie with SameSite protection
res.cookie('session', token, {
  httpOnly: true,
  secure: true, // HTTPS only
  sameSite: 'strict', // or 'lax'
  maxAge: 3600000,
});
```

### Option 2: CSRF Tokens (Recommended for Forms)

Add CSRF token generation and validation:

#### 1. Generate CSRF Token on Page Load

Add to your Contact page component:

```typescript
// src/pages/Contact.tsx
import { useState, useEffect } from 'react';

const Contact = () => {
  const [csrfToken, setCsrfToken] = useState<string>('');

  useEffect(() => {
    // Fetch CSRF token from server
    fetch('/api/csrf-token')
      .then(res => res.json())
      .then(data => setCsrfToken(data.token))
      .catch(err => console.error('Failed to get CSRF token:', err));
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Include CSRF token in submission
    const result = await submitContactForm({
      ...formData,
      csrfToken, // Include token
    });
    // ... rest of handler
  };
};
```

#### 2. Create CSRF Token Endpoint

Create `api/csrf-token.ts`:

```typescript
import { randomBytes } from 'crypto';

// In-memory store (use Redis in production)
const tokenStore = new Map<string, { token: string; expires: number }>();

export default function handler(req: any, res: any) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Generate token
  const token = randomBytes(32).toString('hex');
  const expires = Date.now() + 3600000; // 1 hour

  // Store token (keyed by session/IP)
  const key = req.headers['x-forwarded-for'] || req.connection.remoteAddress || 'unknown';
  tokenStore.set(key, { token, expires });

  // Clean up expired tokens
  for (const [k, v] of tokenStore.entries()) {
    if (v.expires < Date.now()) {
      tokenStore.delete(k);
    }
  }

  res.status(200).json({ token });
}
```

#### 3. Validate CSRF Token in Contact Handler

Update `api/contact.ts`:

```typescript
import { randomBytes } from 'crypto';

// ... existing code ...

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  // Validate CSRF token
  const { csrfToken, ...formData } = req.body;
  const key = req.headers['x-forwarded-for'] || req.connection.remoteAddress || 'unknown';
  const stored = tokenStore.get(key);
  
  if (!stored || stored.token !== csrfToken || stored.expires < Date.now()) {
    return res.status(403).json({ 
      success: false, 
      error: "Invalid or expired security token" 
    });
  }

  // Remove used token
  tokenStore.delete(key);

  // ... rest of handler
}
```

### Option 3: Origin Header Validation

Validate the Origin header in your API handler:

```typescript
export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  // Validate Origin header
  const origin = req.headers.origin || req.headers.referer;
  const allowedOrigins = [
    'https://www.pattysdelights.com',
    'https://pattysdelights.com',
    // Add your development origins
    ...(process.env.NODE_ENV === 'development' ? ['http://localhost:8080'] : []),
  ];

  if (origin && !allowedOrigins.some(allowed => origin.startsWith(allowed))) {
    return res.status(403).json({ 
      success: false, 
      error: "Invalid origin" 
    });
  }

  // ... rest of handler
}
```

### Option 4: Double Submit Cookie Pattern

1. Set a random cookie when the page loads
2. Include the same value in the form submission
3. Verify they match on the server

```typescript
// In Contact.tsx
useEffect(() => {
  // Get cookie value
  const cookieValue = document.cookie
    .split('; ')
    .find(row => row.startsWith('csrf-token='))
    ?.split('=')[1];
  
  if (cookieValue) {
    setCsrfToken(cookieValue);
  }
}, []);

// In form submission
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  const result = await submitContactForm({
    ...formData,
    csrfToken, // Cookie value
  });
};
```

## Recommended Approach

For this contact form, we recommend:

1. **Origin Header Validation** (Simplest, already implemented in security headers)
2. **CORS Configuration** (Ensure API only accepts requests from your domain)
3. **Security Headers** (Already implemented - X-Frame-Options, CSP)

If you add user authentication in the future, implement CSRF tokens.

## Testing CSRF Protection

1. Try submitting the form from a different origin (should fail)
2. Try submitting without proper headers (should fail)
3. Verify legitimate submissions work

## Additional Notes

- CSRF protection is less critical for public forms without authentication
- The security headers (CSP, X-Frame-Options) provide some protection
- Origin validation is the simplest effective measure
- If you add user accounts, implement full CSRF token protection
