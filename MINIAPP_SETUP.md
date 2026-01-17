# FlipBase Farcaster Mini App Setup Guide

This guide explains how to set up FlipBase as a Farcaster Mini App following the official documentation.

## 📋 Prerequisites

1. **Domain**: A domain with HTTPS enabled
2. **Base Account**: For manifest signing (optional but recommended)
3. **Farcaster Account**: For testing the miniapp

## 🚀 Setup Steps

### 1. Manifest File

The manifest file is located at `public/.well-known/farcaster.json`. It must be accessible at:
```
https://your-domain.com/.well-known/farcaster.json
```

**Important fields:**
- `version`: Must be `"1"` (not "next")
- `requiredChains`: Must include `"eip155:8453"` for Base mainnet
- `canonicalDomain`: Your production domain
- `castShareUrl`: URL for share extension

### 2. Account Association (Optional but Recommended)

To sign your manifest and associate it with your Base account:

1. Visit [Base Build](https://build.base.org) or use Base's manifest signing tools
2. Follow the signing process to generate `header`, `payload`, and `signature`
3. Update `public/.well-known/farcaster.json` with the signed values

### 3. Asset Files

Create and add these files to `public/`:

- `icon.png` (1024x1024 recommended)
- `splash.png` (1200x630 recommended)
- `og-image.png` (for Open Graph embeds)

Update the URLs in the manifest to point to these files.

### 4. Environment Variables

Update your `.env` file:

```bash
# Your production domain
NEXT_PUBLIC_APP_URL=https://flipbase.xyz

# Base mainnet RPC
NEXT_PUBLIC_RPC_URL=https://mainnet.base.org
BASE_RPC_URL=https://mainnet.base.org
```

### 5. Deploy

Deploy your application to a hosting service that supports:
- HTTPS
- Custom headers (for `/.well-known/farcaster.json`)
- Static file serving

Recommended: Vercel, Netlify, or similar

### 6. Test

1. **Local Testing**: Use a tunneling service (like `cloudflared` or `ngrok`) to expose your local server with HTTPS
2. **Farcaster Client**: Open your miniapp URL in a Farcaster client
3. **Base App**: Test in Base App to verify Base Account integration

## 🔍 Verification Checklist

- [ ] Manifest accessible at `/.well-known/farcaster.json`
- [ ] Manifest has correct `version: "1"`
- [ ] `requiredChains` includes `"eip155:8453"`
- [ ] All asset URLs are accessible
- [ ] `castShareUrl` endpoint works
- [ ] SDK `ready()` is called on app load
- [ ] Embed meta tags (`fc:miniapp`) on all pages
- [ ] Share functionality works

## 📚 Resources

- [Farcaster Mini Apps Docs](https://miniapps.farcaster.xyz/docs)
- [Base Mini Apps Docs](https://docs.base.org/mini-apps)
- [Base Build](https://build.base.org)

## 🐛 Troubleshooting

### Manifest not found
- Ensure `/.well-known/farcaster.json` is accessible
- Check Next.js headers configuration
- Verify file is in `public/.well-known/` directory

### SDK not working
- Check browser console for errors
- Verify `window.farcaster.miniapp` exists
- Ensure `ready()` is called after SDK loads

### Base Account not connecting
- Verify Base App context
- Check `BaseAccountConnector` component
- Ensure Base chain (8453) is configured in wagmi
