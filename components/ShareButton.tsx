'use client'

import { useState } from 'react'
import { useMiniapp } from '@/hooks/useMiniapp'
import { composeCast } from '@/utils/miniapp'

interface ShareButtonProps {
  gameId?: number
  gameTitle?: string
  score?: number
  className?: string
}

export function ShareButton({ gameId, gameTitle, score, className }: ShareButtonProps) {
  const { isInMiniapp } = useMiniapp()
  const [sharing, setSharing] = useState(false)

  const handleShare = () => {
    if (!isInMiniapp) {
      // Fallback: copy share text to clipboard
      const shareText = gameId
        ? `🎮 ${gameTitle || 'Game'} on FlipBase! ${score ? `Score: ${score}` : ''}\n\nPlay: https://flipbase.xyz/gameplay/${gameId}`
        : '🎮 Check out FlipBase - Play-to-Earn gaming on Base!\n\nhttps://flipbase.xyz'
      
      navigator.clipboard.writeText(shareText)
      alert('Share text copied to clipboard!')
      return
    }

    setSharing(true)
    
    const shareText = gameId
      ? `🎮 ${gameTitle || 'Game'} on FlipBase! ${score ? `Score: ${score}` : ''}\n\nPlay: https://flipbase.xyz/gameplay/${gameId}`
      : '🎮 Check out FlipBase - Play-to-Earn gaming on Base!\n\nhttps://flipbase.xyz'

    const embeds = gameId ? [`https://flipbase.xyz/gameplay/${gameId}`] : undefined

    composeCast(shareText, embeds)
    
    setTimeout(() => setSharing(false), 1000)
  }

  return (
    <button
      onClick={handleShare}
      disabled={sharing}
      className={className || 'bg-blue-700 hover:bg-blue-600 py-2 px-4 rounded transition-colors disabled:opacity-50'}
    >
      {sharing ? 'Sharing...' : isInMiniapp ? 'Share to Farcaster' : 'Copy Share Link'}
    </button>
  )
}
