'use client'

import { useEffect, ReactNode, useState } from 'react'

/**
 * Farcaster Mini App SDK Provider
 * Handles SDK initialization and ready signal
 * Based on official Farcaster Mini Apps documentation
 */
declare global {
  interface Window {
    farcaster?: {
      miniapp?: {
        actions: {
          ready: () => void
          openUrl: (url: string) => void
          composeCast: (params: { text: string; embeds?: string[] }) => void
          viewCast: (castHash: string) => void
          signIn: () => Promise<void>
        }
        context: {
          user?: {
            fid: string
            username?: string
            displayName?: string
            pfp?: string
          }
          cast?: {
            hash: string
            author: {
              fid: string
              username?: string
            }
          }
        }
      }
    }
  }
}

export function MiniAppSDKProvider({ children }: { children: ReactNode }) {
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    // Check if we're in a Farcaster miniapp context
    if (typeof window === 'undefined') {
      return
    }

    const miniapp = window.farcaster?.miniapp

    if (miniapp) {
      // Signal that the miniapp is ready
      // This hides the splash screen
      try {
        miniapp.actions.ready()
        setIsReady(true)
        console.log('Farcaster Mini App SDK initialized')
      } catch (error) {
        console.error('Error initializing Farcaster Mini App SDK:', error)
      }
    } else {
      // Not in miniapp context, continue normally
      setIsReady(true)
    }
  }, [])

  // Only render children when ready (or not in miniapp context)
  return <>{isReady ? children : null}</>
}
