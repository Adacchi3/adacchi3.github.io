import { ApolloProvider } from '@apollo/client'
import { useApollo } from '@client'
import { AppProps } from 'next/app'
import React, { useEffect } from 'react'
import TagManager from 'react-gtm-module'

import '@styles/globals.css'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  const apolloClient = useApollo(pageProps)

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

  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default MyApp
