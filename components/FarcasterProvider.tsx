'use client'

import { createContext, useContext, useEffect, useState, ReactNode } from 'react'
import { getMiniappSDK, isInMiniapp } from '@/utils/miniapp'

interface FarcasterUser {
  fid: string
  username?: string
  displayName?: string
  pfp?: string
}

interface FarcasterContextType {
  user: FarcasterUser | null
  isFarcaster: boolean
  loading: boolean
  cast: {
    hash: string
    author: {
      fid: string
      username?: string
    }
  } | null
}

const FarcasterContext = createContext<FarcasterContextType>({
  user: null,
  isFarcaster: false,
  loading: true,
  cast: null,
})

export const useFarcaster = () => useContext(FarcasterContext)

export function FarcasterProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<FarcasterUser | null>(null)
  const [cast, setCast] = useState<FarcasterContextType['cast']>(null)
  const [isFarcaster, setIsFarcaster] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchFarcasterData = async () => {
      try {
        // Check if we're in a Farcaster miniapp context
        const inMiniapp = isInMiniapp()
        
        if (inMiniapp) {
          const { context } = getMiniappSDK()
          
          if (context?.user) {
            setUser({
              fid: context.user.fid,
              username: context.user.username,
              displayName: context.user.displayName,
              pfp: context.user.pfp,
            })
          }
          
          if (context?.cast) {
            setCast({
              hash: context.cast.hash,
              author: {
                fid: context.cast.author.fid,
                username: context.cast.author.username,
              },
            })
          }
          
          setIsFarcaster(true)
        } else {
          // Fallback: Try to get user from API
          const response = await fetch('/api/farcaster/user')
          const data = await response.json()

          if (data.isFarcaster && data.user) {
            setUser(data.user)
            setIsFarcaster(true)
          }
        }
      } catch (error) {
        console.error('Error fetching Farcaster user:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchFarcasterData()
  }, [])

  return (
    <FarcasterContext.Provider value={{ user, isFarcaster, loading, cast }}>
      {children}
    </FarcasterContext.Provider>
  )
}
