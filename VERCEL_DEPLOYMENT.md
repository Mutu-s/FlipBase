# Vercel Deployment Troubleshooting

## Common Issues

### 500 Internal Server Error

If you're seeing a 500 error, check the following:

1. **Contract ABI Missing**
   - The build script should compile the contract: `yarn compile && next build`
   - Check Vercel build logs to ensure `yarn compile` runs successfully
   - The ABI file should be at: `artifacts/contracts/FlipBase.sol/FlipBase.json`

2. **Environment Variables**
   - Ensure these are set in Vercel:
     - `NEXT_PUBLIC_RPC_URL` (or `BASE_RPC_URL`)
     - `NEXT_PUBLIC_PROJECT_ID` (for WalletConnect)
   - Go to: Vercel Dashboard → Your Project → Settings → Environment Variables

3. **Contract Address**
   - Verify `contracts/contractAddress.json` contains the deployed contract address
   - The address should be: `0xBdC44fB3f4D9dD2089A9f301a38613149dF65A0F`

4. **Build Logs**
   - Check Vercel build logs for errors
   - Look for "Contract ABI not found" warnings
   - Check if `yarn compile` completes successfully

## Quick Fixes

### If ABI is missing:
1. Locally run: `yarn compile`
2. Commit the `artifacts/contracts/FlipBase.sol/FlipBase.json` file
3. Push to GitHub
4. Redeploy on Vercel

### If RPC URL is wrong:
1. Add `NEXT_PUBLIC_RPC_URL` in Vercel environment variables
2. Set value to: `https://mainnet.base.org` (or your preferred Base RPC)
3. Redeploy

### If build fails:
1. Check Vercel build logs
2. Ensure all dependencies are in `package.json`
3. Try `build:skip-compile` script if compile fails (not recommended)

## Testing Locally

Before deploying to Vercel, test locally:

```bash
# 1. Compile contract
yarn compile

# 2. Build Next.js
yarn build

# 3. Start production server
yarn start

# 4. Test the page
# Open http://localhost:3000
```

If local build works but Vercel doesn't, check:
- Environment variables
- Build script differences
- Node.js version (should be 18+)
