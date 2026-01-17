import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    // Get Farcaster user info from request headers
    // Farcaster miniapp context is passed via headers
    const farcasterUser = req.headers['x-farcaster-user']
    const farcasterFid = req.headers['x-farcaster-fid']

    if (!farcasterUser || !farcasterFid) {
      return res.status(200).json({ 
        user: null,
        isFarcaster: false 
      })
    }

    // Parse Farcaster user data
    const userData = typeof farcasterUser === 'string' 
      ? JSON.parse(farcasterUser) 
      : farcasterUser

    return res.status(200).json({
      user: {
        fid: farcasterFid,
        username: userData?.username,
        displayName: userData?.displayName,
        pfp: userData?.pfp,
        bio: userData?.bio,
      },
      isFarcaster: true,
    })
  } catch (error) {
    console.error('Error fetching Farcaster user:', error)
    return res.status(500).json({ error: 'Internal server error' })
  }
}
