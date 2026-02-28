'use client'

import { ApolloProvider } from '@apollo/client'
import { initializeApollo, localeVar } from '@client'
import { useMemo } from 'react'

type Props = {
  children: React.ReactNode
  apolloState: object
  locale: string
}

export default function ApolloHydrator({
  children,
  apolloState,
  locale,
}: Props) {
  const client = useMemo(() => {
    localeVar(locale)
    return initializeApollo(apolloState)
  }, [apolloState, locale])
  return <ApolloProvider client={client}>{children}</ApolloProvider>
}
