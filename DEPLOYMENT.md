# Contract Deployment Guide

## Base Mainnet Deployment

To deploy the FlipBase contract to Base mainnet, follow these steps:

### Prerequisites

1. **Environment Variables**: Ensure your `.env` file contains:
   ```env
   BASE_RPC_URL=https://mainnet.base.org
   PRIVATE_KEY=your_private_key_here
   BASESCAN_API_KEY=your_basescan_api_key_here (optional, for verification)
   ```

2. **Account Balance**: Make sure your deployment account has enough ETH on Base mainnet to pay for gas fees.

### Deploy Command

```bash
yarn deploy
```

This command will:
1. Compile the FlipBase contract
2. Deploy it to Base mainnet
3. Save the contract address to `contracts/contractAddress.json`

### After Deployment

1. The contract address will be saved in `contracts/contractAddress.json`
2. Verify the contract on BaseScan (optional):
   ```bash
   npx hardhat verify --network base <CONTRACT_ADDRESS> 5
   ```
   (Where `5` is the tax percentage parameter)

3. Update the frontend by committing the `contractAddress.json` file

### Contract Details

- **Contract Name**: FlipBase
- **Network**: Base Mainnet (Chain ID: 8453)
- **Constructor Parameter**: `taxPct` (default: 5%)
- **Token Symbol**: FLIP
- **Token Name**: FlipBase

### Important Notes

⚠️ **Security**: Never commit your `.env` file or private keys to Git.

🔐 **Private Key**: Use a dedicated deployment wallet with minimal funds.

💰 **Gas Fees**: Deployment costs will be paid in ETH on Base mainnet.

📝 **Verification**: Contract verification on BaseScan helps with transparency and allows users to interact with the contract directly.
