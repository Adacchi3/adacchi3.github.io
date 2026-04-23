import { prefetchTopData } from '@client'
import ApolloHydrator from '@components/atoms/ApolloHydrator'
import TopTemplate from '@components/templates/TopTemplate'
import { buildPersonJsonLd } from '@lib/jsonLd'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Profile: Adacchi3 | Adacchi3 Portfolio',
}

export default async function Page() {
  const { apolloState, data } = await prefetchTopData('ja-JP')
  const personJsonLd = buildPersonJsonLd(data, 'ja-JP')
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <ApolloHydrator apolloState={apolloState} locale="ja-JP">
        <TopTemplate />
      </ApolloHydrator>
    </>
  )
}
