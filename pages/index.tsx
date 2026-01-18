import CreateGame from '@/components/CreateGame'
import GameDetails from '@/components/GameDetails'
import GameList from '@/components/GameList'
import Hero from '@/components/Hero'
import { getGames } from '@/services/blockchain'
import { globalActions } from '@/store/globalSlices'
import { GameStruct, RootState } from '@/utils/type.dt'
import { NextPage } from 'next'
import Head from 'next/head'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Page: NextPage = () => {
  const dispatch = useDispatch()
  const { setGames } = globalActions
  const { games } = useSelector((states: RootState) => states.globalStates)

  // Load games on client-side to avoid server-side errors
  useEffect(() => {
    const loadGames = async () => {
      try {
        const { getGames } = await import('@/services/blockchain')
        const gamesData = await getGames()
        dispatch(setGames(gamesData))
      } catch (error) {
        console.error('Error loading games:', error)
        // Continue with empty games array
        dispatch(setGames([]))
      }
    }

    // Only load if games are empty
    if (games.length === 0) {
      loadGames()
    }
  }, [dispatch, setGames, games])

  return (
    <div>
      <Head>
        <title>FlipBase</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="fc:miniapp"
          content={JSON.stringify({
            version: '1',
            url: 'https://flipbase.xyz',
            iconUrl: 'https://flipbase.xyz/icon.png',
            buttonTitle: 'Open FlipBase',
            imageUrl: 'https://flipbase.xyz/og-image.png',
          })}
        />
      </Head>
      <Hero />

      {games.length > 0 && (
        <>
          <GameList games={games} />
          <GameDetails />
        </>
      )}
      <CreateGame />
    </div>
  )
}

export default Page
