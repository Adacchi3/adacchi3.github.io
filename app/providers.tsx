'use client'

import { ApolloProvider } from '@apollo/client'
import { useApollo } from '@client'
import { useEffect } from 'react'
import TagManager from 'react-gtm-module'

export function Providers({ children }: { children: React.ReactNode }) {
  const apolloClient = useApollo({})

  useEffect(() => {
    const gtmId = process.env.GTM_ID
    if (!gtmId) return

    const initGTM = () => {
      TagManager.initialize({ gtmId })
    }

    if ('requestIdleCallback' in window) {
      window.requestIdleCallback(initGTM)
    } else {
      setTimeout(initGTM, 3000)
    }
  }, [])

  return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>
}
