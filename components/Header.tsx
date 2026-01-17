import Link from 'next/link'
import React from 'react'
import ConnectBtn from './ConnectBtn'
import { useFarcaster } from './FarcasterProvider'

const Header: React.FC = () => {
  const { user, isFarcaster } = useFarcaster()

  return (
    <header className="shadow-sm shadow-blue-900 py-4 text-blue-700">
      <main className="lg:w-2/3 w-full mx-auto flex justify-between items-center flex-wrap">
        <Link href={'/'} className="text-2xl mb-2">
          <span className="text-gray-300">Flip</span>
          <span>Base</span>
        </Link>

        <div className="flex justify-end items-center space-x-2 md:space-x-4 mt-2 md:mt-0">
          {isFarcaster && user && (
            <div className="flex items-center space-x-2 text-sm">
              {user.pfp && (
                <img 
                  src={user.pfp} 
                  alt={user.displayName || user.username || 'User'} 
                  className="w-8 h-8 rounded-full"
                />
              )}
              <span className="text-gray-300">
                {user.displayName || user.username || `@${user.fid}`}
              </span>
            </div>
          )}
          <Link href={'/games'} className="text-md">
            My Games
          </Link>
          <Link href={'/invitations'} className="text-md">
            Invitations
          </Link>

          <ConnectBtn />
        </div>
      </main>
    </header>
  )
}

export default Header
