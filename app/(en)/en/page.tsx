import { prefetchTopData } from '@client'
import ApolloHydrator from '@components/atoms/ApolloHydrator'
import TopTemplate from '@components/templates/TopTemplate'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Profile: Adacchi3 | Adacchi3 Portfolio',
}

export default async function Page() {
  const apolloState = await prefetchTopData('en-US')
  return (
    <ApolloHydrator apolloState={apolloState} locale="en-US">
      <TopTemplate />
    </ApolloHydrator>
  )
}
