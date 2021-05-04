import React from 'react'
import { GetStaticProps } from 'next'
import { TopDocument } from '@graphql/generated/graphql'
import { addApolloState, initializeApollo } from '@client'
import TopTemplate from '@components/templates/TopTemplate'

export const getStaticProps: GetStaticProps = async () => {
  const apolloClient = initializeApollo()

  await apolloClient.query({
    query: TopDocument,
    variables: {
      preview: process.env.PREVIEW,
      locale: 'ja-JP',
      authorId: process.env.AUTHOR_ID,
    },
  })

  return addApolloState(apolloClient, {
    props: {},
  })
}

const Top: React.FC = () => {
  return <TopTemplate locale="ja-JP"></TopTemplate>
}

export default Top
