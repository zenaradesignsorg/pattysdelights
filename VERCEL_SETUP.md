# Vercel Environment Variables Setup

This guide shows you how to set up your Resend API key in Vercel.

## Steps to Add Environment Variable in Vercel

1. **Go to your Vercel Dashboard**
   - Visit [vercel.com](https://vercel.com) and log in
   - Select your project (pattysdelights)

2. **Navigate to Environment Variables**
   - Click on **Settings** in the top navigation
   - Click on **Environment Variables** in the left sidebar

3. **Add the Resend API Key**
   - Click **Add New** button
   - **Key**: `RESEND_API_KEY`
   - **Value**: Your Resend API key (starts with `re_`)
   - **Environments**: Select all that apply:
     - ✅ Production
     - ✅ Preview  
     - ✅ Development (optional, for testing)
   - Click **Save**

4. **Redeploy Your Application**
   - After adding the environment variable, you need to redeploy
   - Go to **Deployments** tab
   - Click the **⋯** (three dots) on your latest deployment
   - Click **Redeploy**
   - Or push a new commit to trigger a new deployment

## How It Works

- The `api/contact.ts` file reads the API key from `process.env.RESEND_API_KEY`
- Vercel automatically injects environment variables into your serverless functions
- The API key is **never exposed** to the client-side code (it's server-side only)

## Verification

After deployment, test the contact form:
1. Go to your website's Contact page
2. Fill out and submit the form
3. Check your email inbox (Pattysdelightsinc@gmail.com)
4. You should receive the quote request email

## Troubleshooting

**If emails aren't sending:**
1. Verify the environment variable is set correctly in Vercel
2. Check that you redeployed after adding the variable
3. Check Vercel function logs: **Deployments** → Click on deployment → **Functions** tab → Check logs
4. Verify your Resend API key is valid in the [Resend Dashboard](https://resend.com/api-keys)

## Security Notes

- ✅ The API key is stored securely in Vercel (encrypted at rest)
- ✅ The API key is only accessible server-side (in `api/contact.ts`)
- ✅ The API key is never exposed to the browser/client
- ❌ Never commit the API key to your git repository
- ❌ Never use `VITE_` prefix for API keys (those are exposed to the client)
