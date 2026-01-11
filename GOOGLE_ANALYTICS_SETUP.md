# Google Analytics 4 (GA4) Setup Guide

This document explains how to set up Google Analytics 4 for the Patty's Delights website.

## ✅ What's Already Implemented

### 1. **Analytics Library** (`/src/lib/analytics.ts`)
- ✅ GA4 initialization
- ✅ Page view tracking (automatic on route changes)
- ✅ Custom event tracking functions:
  - Form submissions
  - Button clicks
  - Phone number clicks
  - Email clicks
  - External link clicks

### 2. **GoogleAnalytics Component** (`/src/components/GoogleAnalytics.tsx`)
- ✅ Automatically initializes GA4 on app load
- ✅ Tracks page views on route changes
- ✅ Integrated into the app

### 3. **Event Tracking**
- ✅ Contact form submissions
- ✅ Phone number clicks (Header, Footer, Home page, Gallery)
- ✅ Email clicks (Header, Footer)
- ✅ Instagram link clicks

## 📋 Setup Instructions

### Step 1: Create a Google Analytics 4 Property

1. Go to [Google Analytics](https://analytics.google.com/)
2. Sign in with your Google account
3. Click "Admin" (gear icon) in the bottom left
4. In the "Property" column, click "Create Property"
5. Enter property name: "Patty's Delights Website"
6. Select your time zone and currency
7. Click "Next" and fill in business information
8. Click "Create"

### Step 2: Get Your Measurement ID

1. After creating the property, you'll see a "Data Streams" option
2. Click "Add stream" → "Web"
3. Enter your website URL: `https://www.pattysdelights.com` (or your actual domain)
4. Enter a stream name: "Patty's Delights Website"
5. Click "Create stream"
6. Copy your **Measurement ID** (starts with `G-`, e.g., `G-XXXXXXXXXX`)

### Step 3: Configure Environment Variable

#### For Local Development

1. Create or update `.env` file in the project root:
   ```bash
   VITE_GA4_MEASUREMENT_ID=G-XXXXXXXXXX
   ```
   Replace `G-XXXXXXXXXX` with your actual Measurement ID.

2. Restart your development server:
   ```bash
   npm run dev
   ```

#### For Production Deployment

Add the environment variable in your hosting platform:

- **Vercel**: Project Settings → Environment Variables → Add `VITE_GA4_MEASUREMENT_ID`
- **Netlify**: Site Settings → Environment Variables → Add `VITE_GA4_MEASUREMENT_ID`
- **Other platforms**: Follow their environment variable documentation

**Important**: The variable name must be `VITE_GA4_MEASUREMENT_ID` (with `VITE_` prefix for Vite to expose it to the client).

### Step 4: Verify It's Working

1. Deploy your site with the environment variable set
2. Visit your website
3. Open Google Analytics dashboard
4. Go to "Reports" → "Realtime"
5. You should see your visit appear within a few seconds

## 🎯 What's Being Tracked

### Automatic Tracking

- **Page Views**: Every route change is automatically tracked
- **Page Titles**: Automatically captured

### Custom Events

- **Form Submissions**: Contact form submissions with service interest and budget info
- **Phone Clicks**: All phone number clicks across the site
- **Email Clicks**: All email link clicks
- **External Links**: Instagram and other external links
- **Button Clicks**: Can be added to any button using `trackButtonClick()`

## 🔧 Using Custom Events

You can track custom events anywhere in your code:

```typescript
import { trackEvent, trackButtonClick } from "@/lib/analytics";

// Track a custom event
trackEvent('custom_event_name', {
  category: 'engagement',
  label: 'specific_action',
});

// Track a button click
trackButtonClick('Request Quote Button', '/home');
```

## 📊 Viewing Analytics Data

### Realtime Reports
- Go to Reports → Realtime
- See active users, page views, and events in real-time

### Standard Reports
- **Engagement**: See which pages users visit most
- **Events**: View custom events like form submissions and phone clicks
- **Acquisition**: See where your traffic comes from
- **Demographics**: User location, device, browser info

## 🔍 Testing

### Development Mode
- In development, if the Measurement ID is not set or is the placeholder (`G-XXXXXXXXXX`), events will be logged to the console but not sent to GA4
- This allows you to test the tracking code without affecting analytics

### Production Testing
1. Set up GA4 with your Measurement ID
2. Visit your site
3. Click around (phone numbers, forms, etc.)
4. Check GA4 Realtime reports to verify events are being tracked

## ⚠️ Important Notes

- **Privacy**: GA4 respects user privacy and complies with GDPR when configured properly
- **Placeholder ID**: The current placeholder `G-XXXXXXXXXX` means analytics won't track until you add your real ID
- **Environment Variables**: Never commit `.env` files with real API keys to version control
- **Client-Side**: GA4 runs client-side, so the Measurement ID will be visible in the browser (this is normal and expected)

## 📚 Additional Resources

- [Google Analytics 4 Documentation](https://developers.google.com/analytics/devguides/collection/ga4)
- [GA4 Events Reference](https://developers.google.com/analytics/devguides/collection/ga4/events)
- [GA4 Setup Assistant](https://support.google.com/analytics/answer/9304153)

## ✅ Verification Checklist

- [ ] Created GA4 property
- [ ] Created web data stream
- [ ] Copied Measurement ID (starts with `G-`)
- [ ] Added `VITE_GA4_MEASUREMENT_ID` to `.env` (development)
- [ ] Added `VITE_GA4_MEASUREMENT_ID` to hosting platform (production)
- [ ] Restarted development server (if testing locally)
- [ ] Deployed to production
- [ ] Verified in GA4 Realtime reports that visits are being tracked
- [ ] Tested form submission tracking
- [ ] Tested phone/email click tracking

---

**Note**: Analytics will not be active until you replace the placeholder Measurement ID with your actual GA4 Measurement ID.
