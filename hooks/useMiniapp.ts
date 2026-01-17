import { useEffect, useState } from 'react'
import { getMiniappSDK, isInMiniapp, type MiniappContext, type MiniappActions } from '@/utils/miniapp'

/**
 * React hook for Farcaster Mini App SDK
 * Provides easy access to SDK actions and context
 */
export function useMiniapp() {
  const [sdk, setSdk] = useState<{
    actions: MiniappActions | null
    context: MiniappContext | null
  }>({ actions: null, context: null })
  const [inMiniapp, setInMiniapp] = useState(false)

  useEffect(() => {
    const checkSDK = () => {
      const miniappSDK = getMiniappSDK()
      setSdk(miniappSDK)
      setInMiniapp(isInMiniapp())
    }

    checkSDK()

    // Check periodically in case SDK loads asynchronously
    const interval = setInterval(checkSDK, 1000)
    
    return () => clearInterval(interval)
  }, [])

  return {
    ...sdk,
    isInMiniapp: inMiniapp,
    user: sdk.context?.user || null,
    cast: sdk.context?.cast || null,
  }
}
