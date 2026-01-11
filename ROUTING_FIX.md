# SPA Routing Fix - 404 on Refresh

This document explains the fix for the 404 error when refreshing pages in the React SPA.

## Problem
When you refresh a page like `/about` or `/contact`, the server tries to find a file at that path. Since this is a single-page application (SPA), all routes are handled client-side by React Router, so the server returns a 404.

## Solution
The server needs to be configured to serve `index.html` for all routes, allowing React Router to handle the routing client-side.

## Files Created

### 1. **Netlify** (`/public/_redirects` and `/netlify.toml`)
For Netlify hosting:
- `_redirects` file in the public folder (automatically deployed)
- `netlify.toml` for additional configuration

### 2. **Vercel** (`/vercel.json`)
For Vercel hosting:
- Rewrites all routes to `/index.html`

### 3. **Apache** (`/public/.htaccess`)
For Apache servers:
- Uses mod_rewrite to redirect all requests to `index.html`

### 4. **Vite Config** (`/vite.config.ts`)
- Added `historyApiFallback: true` for dev server
- This ensures the dev server handles SPA routing correctly

## Testing

### Development
The Vite dev server should now handle refreshes correctly. Test by:
1. Navigate to `/about`
2. Refresh the page (F5 or Cmd+R)
3. Should stay on `/about` without 404

### Production
The appropriate configuration file will be used based on your hosting platform:

- **Netlify**: Uses `_redirects` or `netlify.toml`
- **Vercel**: Uses `vercel.json`
- **Apache**: Uses `.htaccess` (make sure mod_rewrite is enabled)
- **Nginx**: Requires server configuration (see below)

## Additional Setup (If Needed)

### Nginx Configuration
If using Nginx, add this to your server block:

```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

### Other Hosting Platforms
For other platforms, ensure they:
1. Serve `index.html` for all routes
2. Return 200 status (not 404) for SPA routes
3. Allow client-side routing

## Verification

After deployment, test:
- [ ] Home page loads: `/`
- [ ] About page loads: `/about`
- [ ] Services page loads: `/services`
- [ ] Gallery page loads: `/gallery`
- [ ] Contact page loads: `/contact`
- [ ] Refresh on any page works (no 404)
- [ ] Direct URL access works (typing URL in browser)

## Notes

- The `_redirects` file in `/public` will be copied to the build output
- The `.htaccess` file in `/public` will be copied to the build output
- `vercel.json` and `netlify.toml` should be in the root directory
- All configurations use 200 status to preserve the URL (not redirect)
