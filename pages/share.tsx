import { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useMiniapp } from '@/hooks/useMiniapp'
import { composeCast } from '@/utils/miniapp'

const SharePage: NextPage = () => {
  const router = useRouter()
  const { isInMiniapp, user } = useMiniapp()
  const [castHash, setCastHash] = useState<string | null>(null)
  const [castUrl, setCastUrl] = useState<string | null>(null)
  const [gameId, setGameId] = useState<string | null>(null)
  const [shareText, setShareText] = useState('')

  useEffect(() => {
    // Get cast information from query parameters
    const { castHash: hash, castUrl: url, gameId: gid } = router.query
    if (hash && typeof hash === 'string') {
      setCastHash(hash)
    }
    if (url && typeof url === 'string') {
      setCastUrl(url)
    }
    if (gid && typeof gid === 'string') {
      setGameId(gid)
      setShareText(`🎮 Just played a game on FlipBase! Game ID: ${gid}\n\nCheck it out: https://flipbase.xyz/gameplay/${gid}`)
    }
  }, [router.query])

  const handleShare = () => {
    if (isInMiniapp && shareText) {
      composeCast(shareText, gameId ? [`https://flipbase.xyz/gameplay/${gameId}`] : undefined)
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(shareText)
      alert('Share text copied to clipboard!')
    }
  }

  return (
    <div>
      <Head>
        <title>FlipBase | Share</title>
        <meta name="description" content="Share your FlipBase game results" />
        <meta
          name="fc:miniapp"
          content={JSON.stringify({
            version: '1',
            url: 'https://flipbase.xyz/share',
            iconUrl: 'https://flipbase.xyz/icon.png',
            buttonTitle: 'Share Game',
            imageUrl: 'https://flipbase.xyz/og-image.png',
          })}
        />
      </Head>

      <div className="min-h-screen flex flex-col justify-center items-center bg-[#010922] text-gray-300 p-8">
        <h1 className="text-3xl font-bold mb-4">Share Your Game</h1>
        
        {castHash && (
          <div className="bg-gray-800 p-6 rounded-lg max-w-md mb-4">
            <p className="mb-2 text-sm text-gray-400">Cast Hash:</p>
            <p className="mb-4 break-all">{castHash}</p>
            {castUrl && (
              <>
                <p className="mb-2 text-sm text-gray-400">Cast URL:</p>
                <p className="break-all">{castUrl}</p>
              </>
            )}
          </div>
        )}

        {gameId && (
          <div className="bg-gray-800 p-6 rounded-lg max-w-md mb-4">
            <p className="mb-2 text-sm text-gray-400">Game ID: {gameId}</p>
            <textarea
              value={shareText}
              onChange={(e) => setShareText(e.target.value)}
              className="w-full bg-gray-700 text-white p-3 rounded mb-4"
              rows={4}
            />
            <button
              onClick={handleShare}
              className="w-full bg-blue-700 hover:bg-blue-600 py-2 px-4 rounded transition-colors"
            >
              {isInMiniapp ? 'Share to Farcaster' : 'Copy Share Text'}
            </button>
          </div>
        )}

        {!castHash && !gameId && (
          <div className="bg-gray-800 p-6 rounded-lg max-w-md">
            <p className="text-center">No cast or game information found.</p>
            <p className="text-center text-sm text-gray-400 mt-2">
              Share a game result to see it here!
            </p>
          </div>
        )}

        {user && (
          <div className="mt-4 text-sm text-gray-400">
            Logged in as: {user.displayName || user.username || `@${user.fid}`}
          </div>
        )}
      </div>
    </div>
  )
}

export default SharePage
