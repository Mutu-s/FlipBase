require('@nomicfoundation/hardhat-toolbox')
require('dotenv').config()

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: 'base',
  networks: {
    hardhat: {
      chainId: 8453,
      forking: {
        url: process.env.BASE_RPC_URL || 'https://mainnet.base.org',
      },
    },
    localhost: {
      url: 'http://127.0.0.1:8545',
      chainId: 8453,
    },
    base: {
      url: process.env.BASE_RPC_URL || 'https://mainnet.base.org',
      accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [],
      chainId: 8453,
      timeout: 120000,
    },
  },
  solidity: {
    version: '0.8.20',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
      viaIR: true,
    },
  },
  mocha: {
    timeout: 40000,
  },
  etherscan: {
    apiKey: {
      base: process.env.BASESCAN_API_KEY || process.env.ETHERSCAN_API_KEY || '',
    },
    customChains: [
      {
        network: 'base',
        chainId: 8453,
        urls: {
          apiURL: 'https://api.basescan.org/api',
          browserURL: 'https://basescan.org',
        },
      },
    ],
  },
}
