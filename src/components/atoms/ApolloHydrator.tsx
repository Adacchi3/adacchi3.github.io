'use client'

import { ApolloProvider } from '@apollo/client/react'
import { initializeApollo } from '@client'
import { LocaleContext } from '@hooks/Locale'
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
  const client = useMemo(() => initializeApollo(apolloState), [apolloState])
  return (
    <LocaleContext.Provider value={locale}>
      <ApolloProvider client={client}>{children}</ApolloProvider>
    </LocaleContext.Provider>
  )
}
