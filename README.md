# FlipBase Project Documentation

A modern decentralized Play-to-Earn gaming platform built as a Farcaster miniapp on Base mainnet. Built with Next.js 14, TypeScript, Tailwind CSS, and Solidity smart contracts.

![FlipBase](./screenshots/0.png)

The project revolves around `FlipBase.sol`, a Solidity-written smart contract deployed on Base mainnet. It leverages the OpenZeppelin v5 library to ensure secure and standardized development of the contract.

![FlipBase](./screenshots/1.png)

The core of the contract is defined by four primary structures: `GameStruct`, `PlayerStruct`, `InvitationStruct`, and `ScoreStruct`, representing a game, a player, an invitation, and a score, respectively.

## ✨ Key Features

- `createGame`: Allows a user to create a new game with staking.
- `deleteGame`: Allows the game owner to delete a game (before participants join).
- `invitePlayer`: Allows a user to invite another player to a game.
- `acceptInvitation`: Allows a user to accept an invitation to a game.
- `rejectInvitation`: Allows a user to reject an invitation to a game.
- `payout`: Distributes payouts to the winners of a game.
- `saveScore`: Records a player's score in a game.
- **Farcaster Miniapp Integration**: Native support for Farcaster ecosystem with SDK
- **Base Mainnet**: Deployed and optimized for Base network (Chain ID: 8453)
- **Base Account Support**: Automatic wallet connection in Base App context
- **Share Extension**: Share game results via Farcaster casts
- **Embed Support**: Rich embeds in Farcaster feeds
- **SDK Actions**: Native navigation, compose cast, and view cast functionality

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and Yarn or npm
- A Web3 wallet (MetaMask, etc.) configured for Base mainnet
- Hardhat for local blockchain development
- Farcaster account (for miniapp features)

### Environment Setup

1. Copy the `.env.example` file to `.env`:
```bash
cp .env.example .env
```

2. Fill in your environment variables in `.env`:

```sh
# Next.js Environment Variables
NEXT_PUBLIC_RPC_URL=https://mainnet.base.org
NEXT_PUBLIC_ALCHEMY_ID=your_alchemy_project_id
NEXT_PUBLIC_PROJECT_ID=your_walletconnect_project_id

# Base Mainnet Configuration
BASE_RPC_URL=https://mainnet.base.org
BASESCAN_API_KEY=your_basescan_api_key_here

# NextAuth Configuration
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_nextauth_secret_key_here

# Hardhat Configuration (for deployment)
PRIVATE_KEY=your_private_key_here
ETHERSCAN_API_KEY=your_etherscan_api_key_here
```

**Where to get keys:**
- `NEXT_PUBLIC_ALCHEMY_ID`: [Get Key Here](https://dashboard.alchemy.com/) (Create a Base mainnet app)
- `NEXT_PUBLIC_PROJECT_ID`: [Get Key Here](https://cloud.walletconnect.com/sign-in)
- `BASESCAN_API_KEY`: [Get Key Here](https://basescan.org/apis)
- `NEXTAUTH_SECRET`: Generate a random string (e.g., `openssl rand -base64 32`)

### Installation & Running

1. Install dependencies:
```bash
yarn install
```

2. For local development, start the local Hardhat blockchain (forking Base):
```bash
yarn blockchain
```

3. In a new terminal, deploy the contract to Base mainnet:
```bash
yarn deploy --network base
```

4. (Optional) Seed the contract with sample data:
```bash
yarn seed
```

5. Start the Next.js development server:
```bash
yarn dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📚 Tech Stack

### Frontend
- **Next.js 14**: React framework with App Router support
- **TypeScript 5.5**: Type-safe development
- **Tailwind CSS 3.4**: Utility-first CSS framework with dark mode support
- **Wagmi v2**: React Hooks for Ethereum
- **RainbowKit v2**: Beautiful wallet connection UI
- **Redux Toolkit**: State management
- **Ethers.js v6**: Ethereum library
- **@farcaster/miniapp-sdk**: Official Farcaster miniapp SDK

### Smart Contracts
- **Solidity 0.8.20**: Smart contract language
- **Hardhat**: Development environment
- **OpenZeppelin Contracts v5**: Secure, audited smart contract library
- **Base Mainnet**: Production deployment network

### Authentication
- **NextAuth.js v4**: Authentication with SIWE (Sign-In with Ethereum)
- **Farcaster**: Native Farcaster miniapp support

## 🔒 Security Features

- ✅ Private keys stored in environment variables (not in code)
- ✅ ReentrancyGuard protection in smart contracts
- ✅ OpenZeppelin audited contracts
- ✅ Input validation and error handling
- ✅ Modern Solidity practices (no deprecated SafeMath)
- ✅ Base mainnet optimized gas costs

## 🛠️ Development

### Available Scripts

- `yarn dev` - Start development server
- `yarn build` - Build for production
- `yarn start` - Start production server
- `yarn lint` - Run ESLint
- `yarn format` - Format code with Prettier
- `yarn blockchain` - Start local Hardhat node (forks Base mainnet)
- `yarn deploy` - Deploy contracts to Base mainnet
- `yarn seed` - Seed contract with sample data
- `yarn test` - Run Hardhat tests

## 📖 Project Structure

```
├── components/          # React components
├── contracts/          # Solidity smart contracts
├── pages/              # Next.js pages
├── services/           # Blockchain and provider services
├── store/              # Redux store and slices
├── styles/             # Global styles
├── utils/              # Utility functions
└── scripts/            # Deployment and seeding scripts
```

## 🌐 Network Configuration

### Base Mainnet
- **Chain ID**: 8453
- **RPC URL**: https://mainnet.base.org
- **Block Explorer**: https://basescan.org
- **Native Currency**: ETH

## 🔗 Useful Links

- 🏠 [Base Network](https://base.org/)
- 📊 [BaseScan Explorer](https://basescan.org/)
- 🌐 [Farcaster](https://farcaster.xyz/)
- ⚽ [MetaMask](https://metamask.io/)
- 💡 [Hardhat](https://hardhat.org/)
- 📈 [Alchemy](https://dashboard.alchemy.com/)
- 🔥 [Next.js](https://nextjs.org/)
- 🎅 [TypeScript](https://www.typescriptlang.org/)
- 🐻 [Solidity](https://soliditylang.org/)
- 👀 [Ethers.js](https://docs.ethers.org/v6/)
- 🌈 [RainbowKit](https://www.rainbowkit.com/)
- 🔐 [Wagmi](https://wagmi.sh/)

## 📝 Recent Updates

- ✅ Rebranded to FlipBase
- ✅ Migrated to Base mainnet (Chain ID: 8453)
- ✅ Added Farcaster miniapp SDK integration (`@farcaster/miniapp-sdk`)
- ✅ Implemented manifest file following official Base/Farcaster standards
- ✅ Added Base Account connector support
- ✅ Implemented share extension with `castShareUrl`
- ✅ Added embed meta tags (`fc:miniapp`) to all pages
- ✅ SDK navigation actions (openUrl, composeCast, viewCast)
- ✅ Frame lifecycle management with `ready()` signal
- ✅ Updated network configuration for Base mainnet
- ✅ Optimized for Base mainnet deployment
- ✅ Enhanced error handling with user-friendly messages
- ✅ Improved TypeScript configuration
- ✅ Added dark mode support
- ✅ Security improvements (environment variables for secrets)

## 🎮 Farcaster Miniapp

FlipBase is designed as a Farcaster miniapp following official Base and Farcaster documentation standards:

### Features
- **Manifest File**: `/.well-known/farcaster.json` with proper accountAssociation
- **Base Account Integration**: Automatic wallet connection when in Base App
- **SDK Integration**: Uses `@farcaster/miniapp-sdk` for native actions
- **Share Extension**: Share game results via `castShareUrl`
- **Embed Support**: Rich embeds with `fc:miniapp` meta tags on all pages
- **Navigation**: Uses SDK actions instead of standard HTML links
- **Frame Lifecycle**: Proper `ready()` signal to hide splash screen

### Manifest Configuration
The manifest file includes:
- `requiredChains`: `["eip155:8453"]` for Base mainnet
- `castShareUrl`: Share endpoint for game results
- `splashImageUrl` and `splashBackgroundColor`: Custom splash screen
- `requiredCapabilities`: `["actions.signIn", "actions.ready"]`

### SDK Actions
- `sdk.actions.ready()`: Signals miniapp is ready (hides splash screen)
- `sdk.actions.openUrl()`: Native URL navigation
- `sdk.actions.composeCast()`: Share content to Farcaster
- `sdk.actions.viewCast()`: View casts from miniapp
- `sdk.actions.signIn()`: Sign in to Farcaster

### React Hooks
- `useMiniapp()`: Hook to access SDK actions and context
- `useFarcaster()`: Hook to access Farcaster user data

### Components
- `MiniAppSDKProvider`: Initializes SDK and calls `ready()`
- `FarcasterProvider`: Provides Farcaster user context
- `ShareButton`: Reusable component for sharing to Farcaster
- `BaseAccountConnector`: Auto-connects Base Account in Base App

### Deployment Requirements
- HTTPS enabled domain
- Manifest accessible at `https://your-domain.com/.well-known/farcaster.json`
- Domain verification and accountAssociation signing via Base Build tools

## 📄 License

MIT
