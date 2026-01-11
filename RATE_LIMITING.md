# Rate Limiting Setup Guide

This document explains how to implement rate limiting for the contact form API endpoint to prevent spam and DoS attacks.

## Why Rate Limiting?

Rate limiting protects your contact form from:
- **Spam attacks**: Automated bots submitting multiple requests
- **DoS attacks**: Malicious users overwhelming your server
- **Resource exhaustion**: Excessive API calls consuming server resources
- **Email flooding**: Too many emails sent in a short time period

## Implementation Options

### Option 1: Vercel Rate Limiting

Vercel provides built-in rate limiting through their Edge Middleware or by using their Pro plan features.

#### Using Vercel Edge Middleware

Create `middleware.ts` in your project root:

```typescript
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Simple in-memory rate limiter (for demo - use Redis in production)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

const RATE_LIMIT = {
  maxRequests: 5, // 5 requests
  windowMs: 15 * 60 * 1000, // 15 minutes
};

export function middleware(request: NextRequest) {
  // Only apply to contact API endpoint
  if (request.nextUrl.pathname !== '/api/contact') {
    return NextResponse.next();
  }

  const ip = request.ip || request.headers.get('x-forwarded-for') || 'unknown';
  const now = Date.now();
  
  const record = rateLimitMap.get(ip);
  
  if (!record || now > record.resetTime) {
    // First request or window expired
    rateLimitMap.set(ip, {
      count: 1,
      resetTime: now + RATE_LIMIT.windowMs,
    });
    return NextResponse.next();
  }
  
  if (record.count >= RATE_LIMIT.maxRequests) {
    return new NextResponse(
      JSON.stringify({ 
        success: false, 
        error: 'Too many requests. Please try again later.' 
      }),
      {
        status: 429,
        headers: {
          'Content-Type': 'application/json',
          'Retry-After': Math.ceil((record.resetTime - now) / 1000).toString(),
        },
      }
    );
  }
  
  // Increment count
  record.count++;
  rateLimitMap.set(ip, record);
  
  return NextResponse.next();
}

export const config = {
  matcher: '/api/contact',
};
```

**Note**: For production, use a persistent store like Redis or Vercel KV instead of in-memory Map.

#### Using Vercel KV (Recommended for Production)

1. Install Vercel KV:
   ```bash
   npm install @vercel/kv
   ```

2. Update `middleware.ts` to use Vercel KV:

```typescript
import { kv } from '@vercel/kv';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const RATE_LIMIT = {
  maxRequests: 5,
  windowMs: 15 * 60 * 1000,
};

export async function middleware(request: NextRequest) {
  if (request.nextUrl.pathname !== '/api/contact') {
    return NextResponse.next();
  }

  const ip = request.ip || request.headers.get('x-forwarded-for') || 'unknown';
  const key = `rate_limit:${ip}`;
  
  const current = await kv.get<number>(key) || 0;
  
  if (current >= RATE_LIMIT.maxRequests) {
    return new NextResponse(
      JSON.stringify({ 
        success: false, 
        error: 'Too many requests. Please try again later.' 
      }),
      {
        status: 429,
        headers: {
          'Content-Type': 'application/json',
          'Retry-After': '900', // 15 minutes in seconds
        },
      }
    );
  }
  
  // Increment and set expiry
  await kv.incr(key);
  await kv.expire(key, Math.floor(RATE_LIMIT.windowMs / 1000));
  
  return NextResponse.next();
}

export const config = {
  matcher: '/api/contact',
};
```

### Option 2: Netlify Rate Limiting

Netlify provides rate limiting through Edge Functions or by using their Pro plan features.

#### Using Netlify Edge Functions

Create `netlify/edge-functions/rate-limit.ts`:

```typescript
import type { Context } from "https://edge.netlify.com";

// Simple rate limiting using Netlify's KV store
export default async (request: Request, context: Context) => {
  // Only apply to contact API
  if (!request.url.includes('/api/contact')) {
    return;
  }

  const ip = context.ip || 'unknown';
  const key = `rate_limit:${ip}`;
  
  // Get current count from Netlify KV (requires Netlify KV setup)
  // For now, this is a placeholder - implement with your KV store
  const current = await context.cookies.get(key) || '0';
  const count = parseInt(current, 10);
  
  const RATE_LIMIT = 5; // 5 requests per 15 minutes
  
  if (count >= RATE_LIMIT) {
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: 'Too many requests. Please try again later.' 
      }),
      {
        status: 429,
        headers: {
          'Content-Type': 'application/json',
          'Retry-After': '900',
        },
      }
    );
  }
  
  // Increment count (set cookie with expiry)
  context.cookies.set(key, (count + 1).toString(), {
    maxAge: 15 * 60, // 15 minutes
    httpOnly: true,
  });
};
```

### Option 3: Serverless Function-Level Rate Limiting

Add rate limiting directly in your API handler:

#### For `api/contact.ts`:

```typescript
import { Resend } from "resend";

// Simple in-memory store (use Redis/KV in production)
const rateLimitStore = new Map<string, { count: number; resetTime: number }>();

const RATE_LIMIT = {
  maxRequests: 5,
  windowMs: 15 * 60 * 1000, // 15 minutes
};

function checkRateLimit(ip: string): { allowed: boolean; retryAfter?: number } {
  const now = Date.now();
  const record = rateLimitStore.get(ip);
  
  if (!record || now > record.resetTime) {
    rateLimitStore.set(ip, {
      count: 1,
      resetTime: now + RATE_LIMIT.windowMs,
    });
    return { allowed: true };
  }
  
  if (record.count >= RATE_LIMIT.maxRequests) {
    return {
      allowed: false,
      retryAfter: Math.ceil((record.resetTime - now) / 1000),
    };
  }
  
  record.count++;
  rateLimitStore.set(ip, record);
  return { allowed: true };
}

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  // Get client IP
  const ip = req.headers['x-forwarded-for']?.split(',')[0] || 
             req.headers['x-real-ip'] || 
             req.connection?.remoteAddress || 
             'unknown';

  // Check rate limit
  const rateLimit = checkRateLimit(ip);
  if (!rateLimit.allowed) {
    return res.status(429).json({
      success: false,
      error: 'Too many requests. Please try again later.',
    });
  }

  // ... rest of your handler code
}
```

## Recommended Rate Limits

For a contact form, we recommend:
- **5 requests per 15 minutes** per IP address
- **10 requests per hour** per IP address
- **20 requests per day** per IP address

Adjust based on your needs and traffic patterns.

## Testing Rate Limiting

1. Submit the contact form 5 times quickly
2. The 6th submission should return a 429 status with "Too many requests"
3. Wait 15 minutes and try again - it should work

## Production Considerations

1. **Use Persistent Storage**: Don't use in-memory Maps in production. Use:
   - Redis
   - Vercel KV
   - Upstash Redis
   - DynamoDB
   - Other persistent key-value stores

2. **Distributed Systems**: If you have multiple server instances, use a shared rate limit store

3. **IP Spoofing**: Be aware that IP addresses can be spoofed. Consider additional measures:
   - CAPTCHA after rate limit exceeded
   - Email verification
   - Honeypot fields

4. **User Experience**: Provide clear error messages and retry-after headers

## Additional Protection

Consider combining rate limiting with:
- **CAPTCHA**: Google reCAPTCHA or hCaptcha
- **Honeypot fields**: Hidden fields that bots fill but humans don't
- **Email verification**: Require email confirmation before processing
- **IP reputation**: Block known malicious IPs

## Monitoring

Monitor rate limit hits to identify:
- Legitimate users hitting limits (may need to increase limits)
- Attack patterns
- Bot traffic

Set up alerts for excessive rate limit violations.
