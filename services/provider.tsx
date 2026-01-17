'use client'

import * as React from 'react'
import {
  GetSiweMessageOptions,
  RainbowKitSiweNextAuthProvider,
} from '@rainbow-me/rainbowkit-siwe-next-auth'
import { WagmiProvider } from 'wagmi'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { RainbowKitProvider, getDefaultConfig, darkTheme } from '@rainbow-me/rainbowkit'
import { base } from 'wagmi/chains'
import { Session } from 'next-auth'
import { SessionProvider } from 'next-auth/react'
import '@rainbow-me/rainbowkit/styles.css'
import { BaseAccountConnector } from '@/components/BaseAccountConnector'

const projectId = process.env.NEXT_PUBLIC_PROJECT_ID || ''

const config = getDefaultConfig({
  appName: 'FlipBase',
  projectId,
  chains: [base],
  ssr: true,
})

const queryClient = new QueryClient()

const demoAppInfo = {
  appName: 'FlipBase',
}

const getSiweMessageOptions: GetSiweMessageOptions = () => ({
  statement: `
  Once you're signed in, you'll be able to access all of FlipBase's features.
  Thank you for partnering with FlipBase on Base!`,
})

export function Providers({
  children,
  pageProps,
}: {
  children: React.ReactNode
  pageProps: {
    session: Session
  }
}) {
  const [mounted, setMounted] = React.useState(false)
  React.useEffect(() => setMounted(true), [])

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <SessionProvider refetchInterval={0} session={pageProps.session}>
          <RainbowKitSiweNextAuthProvider getSiweMessageOptions={getSiweMessageOptions}>
            <RainbowKitProvider theme={darkTheme()} appInfo={demoAppInfo}>
              <BaseAccountConnector />
              {mounted && children}
            </RainbowKitProvider>
          </RainbowKitSiweNextAuthProvider>
        </SessionProvider>
      </QueryClientProvider>
    </WagmiProvider>
  )
}
