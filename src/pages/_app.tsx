import { ApolloProvider } from '@apollo/client'
import { useApollo } from '@client'
import { AppProps } from 'next/app'
import React, { useEffect } from 'react'
import TagManager from 'react-gtm-module'

import '@styles/globals.css'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  const apolloClient = useApollo(pageProps)

  useEffect(() => {
    TagManager.initialize({ gtmId: String(process.env.GTM_ID) })
  }, [])

  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default MyApp
