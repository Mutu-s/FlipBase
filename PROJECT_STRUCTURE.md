# FlipBase Project Structure

## 📁 Directory Overview

```
FlipBase/
├── components/          # React UI components
│   ├── BaseAccountConnector.tsx    # Base Account auto-connect
│   ├── ConnectBtn.tsx              # Wallet connection button
│   ├── CreateGame.tsx              # Game creation modal
│   ├── FarcasterProvider.tsx      # Farcaster context provider
│   ├── GameActions.tsx            # Game action menu
│   ├── GameCard.tsx               # Memory game card component
│   ├── GameDetails.tsx            # Game details modal
│   ├── GameInvitations.tsx       # Invitation list component
│   ├── GameList.tsx               # Game list display
│   ├── GameResult.tsx             # Game results display
│   ├── Header.tsx                 # App header/navigation
│   ├── Hero.tsx                   # Landing page hero section
│   ├── InviteModal.tsx            # Invitation modal
│   ├── MiniAppSDK.tsx            # Farcaster SDK provider
│   └── ShareButton.tsx            # Share to Farcaster button
│
├── contracts/          # Smart contracts
│   ├── FlipBase.sol              # Main game contract
│   └── contractAddress.json      # Deployed contract addresses
│
├── hooks/              # Custom React hooks
│   └── useMiniapp.ts             # Farcaster miniapp hook
│
├── pages/              # Next.js pages
│   ├── _app.tsx                  # App wrapper with providers
│   ├── index.tsx                 # Home page
│   ├── games.tsx                 # My games page
│   ├── invitations.tsx           # My invitations page
│   ├── share.tsx                 # Share extension page
│   ├── api/                      # API routes
│   │   ├── auth/[...nextauth].js # NextAuth configuration
│   │   └── farcaster/user.ts    # Farcaster user API
│   ├── gameplay/[id].tsx        # Game play page
│   ├── invitations/[id].tsx     # Game invitation page
│   └── results/[id].tsx         # Game results page
│
├── public/             # Static assets
│   ├── .well-known/
│   │   └── farcaster.json      # Farcaster manifest
│   ├── icon.svg                 # App icon (source)
│   ├── splash.svg               # Splash screen (source)
│   ├── og-image.svg             # Open Graph image (source)
│   └── generate-pngs.html       # PNG generator tool
│
├── scripts/            # Utility scripts
│   ├── deploy.js                # Contract deployment
│   ├── seed.js                  # Contract seeding
│   └── generate-assets.js       # Asset generation
│
├── services/           # Business logic
│   ├── blockchain.tsx           # Blockchain interactions
│   └── provider.tsx             # Web3 providers setup
│
├── store/              # Redux store
│   ├── actions/globalActions.ts  # Action creators
│   ├── globalSlices.ts          # Redux slices
│   ├── index.ts                 # Store configuration
│   └── states/globalStates.ts    # State types
│
├── styles/             # Global styles
│   └── global.css               # Tailwind & custom styles
│
├── test/               # Tests
│   └── FlipBase.test.js         # Contract tests
│
└── utils/              # Utility functions
    ├── helper.ts                # Helper functions
    ├── miniapp.ts               # Miniapp utilities
    └── type.dt.ts               # TypeScript type definitions
```

## 🔑 Key Files

### Configuration
- `hardhat.config.js` - Hardhat configuration (Base mainnet)
- `next.config.js` - Next.js configuration
- `package.json` - Dependencies and scripts
- `tsconfig.json` - TypeScript configuration
- `.gitignore` - Git ignore rules

### Documentation
- `README.md` - Main project documentation
- `MINIAPP_SETUP.md` - Farcaster miniapp setup guide
- `ASSETS_README.md` - Asset files guide
- `PROJECT_STRUCTURE.md` - This file

## 🎯 Core Components

### Smart Contract
- **FlipBase.sol**: Main game contract with game creation, invitations, scoring, and payout logic

### Frontend Architecture
- **Provider Layer**: Wagmi + RainbowKit + NextAuth + Farcaster SDK
- **State Management**: Redux Toolkit
- **UI Framework**: Next.js 14 + TypeScript + Tailwind CSS
- **Blockchain**: Ethers.js v6 + Wagmi v2

### Key Features
- Farcaster miniapp integration
- Base mainnet deployment
- Wallet connection (RainbowKit)
- Game creation and management
- Invitation system
- Score tracking and payouts
