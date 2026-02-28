import { makeClient } from '@client'
import ApolloHydrator from '@components/atoms/ApolloHydrator'
import TopTemplate from '@components/templates/TopTemplate'
import { TopDocument } from '@graphql/generated/graphql'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Profile: Adacchi3 | Adacchi3 Portfolio',
}

export default async function Page() {
  const client = makeClient()
  await client.query({
    query: TopDocument,
    variables: {
      preview: process.env.PREVIEW === 'true',
      locale: 'en-US',
      authorId: String(process.env.AUTHOR_ID),
    },
  })
  const apolloState = JSON.parse(JSON.stringify(client.cache.extract()))
  return (
    <ApolloHydrator apolloState={apolloState} locale="en-US">
      <TopTemplate />
    </ApolloHydrator>
  )
}
