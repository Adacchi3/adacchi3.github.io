import React, { useEffect } from 'react'
import { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client'
import { useApollo } from '@client'
import 'tailwindcss/tailwind.css'
import TagManager from 'react-gtm-module'

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
