# Resend Email Integration Setup

This project uses [Resend](https://resend.com) for sending emails from the contact form.

## Setup Instructions

### 1. Create a Resend Account

1. Go to [https://resend.com](https://resend.com)
2. Sign up for a free account
3. Verify your email address

### 2. Get Your API Key

1. Navigate to [API Keys](https://resend.com/api-keys) in your Resend dashboard
2. Click "Create API Key"
3. Give it a name (e.g., "Patty's Delights Website")
4. Copy the API key (starts with `re_`)

### 3. Configure Environment Variables

#### For Local Development

1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```

2. Add your Resend API key to `.env`:
   ```
   RESEND_API_KEY=re_your_api_key_here
   ```

#### For Production Deployment

Add the `RESEND_API_KEY` environment variable in your hosting platform:

- **Vercel**: Project Settings → Environment Variables
- **Netlify**: Site Settings → Environment Variables
- **Cloudflare Workers**: Workers → Settings → Variables
- **Other platforms**: Follow their environment variable documentation

### 4. Verify Your Domain (Recommended for Production)

1. In Resend dashboard, go to [Domains](https://resend.com/domains)
2. Add your domain (e.g., `pattysdelights.com`)
3. Add the DNS records provided by Resend to your domain
4. Wait for verification (usually takes a few minutes)
5. Update the `from` email in:
   - `src/lib/resend.ts` (line with `from: "Patty's Delights <onboarding@resend.dev>"`)
   - `api/contact.ts` (line with `from: "Patty's Delights <onboarding@resend.dev>"`)
   
   Change to: `from: "Patty's Delights <noreply@yourdomain.com>"`

### 5. Deploy Serverless Function (Production)

The contact form requires a serverless function to securely send emails. Choose your platform:

#### Option A: Vercel

1. Place `api/contact.ts` in your project root (Vercel auto-detects it)
2. Deploy to Vercel
3. Set `RESEND_API_KEY` in Vercel environment variables

#### Option B: Netlify

1. Create `netlify/functions/contact.ts` directory
2. Copy the content from `api/contact.ts` and adapt for Netlify format
3. Deploy to Netlify
4. Set `RESEND_API_KEY` in Netlify environment variables

#### Option C: Other Platforms

Adapt `api/contact.ts` to your platform's serverless function format.

### 6. Update API Endpoint (If Needed)

If your serverless function is at a different URL, update `VITE_API_ENDPOINT` in your `.env` file:

```
VITE_API_ENDPOINT=https://your-domain.com/api/contact
```

## Testing

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Fill out the contact form on the Contact page
3. Submit the form
4. Check your email inbox (Pattysdelightsinc@gmail.com) for the new quote request

## Troubleshooting

### Emails Not Sending

1. **Check API Key**: Verify `RESEND_API_KEY` is set correctly
2. **Check Console**: Look for error messages in browser console and server logs
3. **Resend Dashboard**: Check the [Logs](https://resend.com/emails) section for delivery status
4. **Domain Verification**: If using a custom domain, ensure it's verified

### Development Mode

In development, if the API endpoint isn't available, the form will attempt to send directly from the client (requires `VITE_RESEND_API_KEY`). This is not recommended for production due to security concerns.

### Rate Limits

Resend free tier includes:
- 3,000 emails/month
- 100 emails/day

For higher limits, upgrade your Resend plan.

## Security Notes

- **Never commit `.env` files** to version control
- **Never expose API keys** in client-side code (use serverless functions)
- The `RESEND_API_KEY` should only be used server-side
- `VITE_RESEND_API_KEY` is only for development/testing

## Support

- [Resend Documentation](https://resend.com/docs)
- [Resend Support](https://resend.com/support)
