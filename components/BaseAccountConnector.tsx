'use client'

import { useEffect } from 'react'
import { useAccount, useConnect } from 'wagmi'
import { base } from 'wagmi/chains'

/**
 * Base Account connector for Farcaster miniapp
 * Handles automatic connection when in Base App context
 */
export function BaseAccountConnector() {
  const { isConnected } = useAccount()
  const { connect, connectors } = useConnect()

  useEffect(() => {
    // Check if we're in a Farcaster miniapp context
    if (typeof window !== 'undefined' && (window as any).farcaster?.miniapp) {
      // Try to connect with Base Account if available
      const baseConnector = connectors.find(
        (connector) => connector.id === 'base' || connector.name.toLowerCase().includes('base')
      )

      if (baseConnector && !isConnected) {
        connect({ connector: baseConnector, chainId: base.id })
      }
    }
  }, [connectors, isConnected, connect])

  return null
}
