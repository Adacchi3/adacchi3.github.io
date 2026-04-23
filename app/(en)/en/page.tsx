import { prefetchTopData } from '@client'
import ApolloHydrator from '@components/atoms/ApolloHydrator'
import TopTemplate from '@components/templates/TopTemplate'
import { buildPersonJsonLd, serializeJsonLd } from '@lib/jsonLd'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Profile: Adacchi3 | Adacchi3 Portfolio',
}

export default async function Page() {
  const { apolloState, data } = await prefetchTopData('en-US')
  const personJsonLd = buildPersonJsonLd(data, 'en-US')
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(personJsonLd) }}
      />
      <ApolloHydrator apolloState={apolloState} locale="en-US">
        <TopTemplate />
      </ApolloHydrator>
    </>
  )
}
