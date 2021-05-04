import React from 'react'
import { GetStaticProps } from 'next'
import { TopDocument } from '@graphql/generated/graphql'
import { addApolloState, initializeApollo, localeVar } from '@client'
import TopTemplate from '@components/templates/TopTemplate'

export const getStaticProps: GetStaticProps = async () => {
  const apolloClient = initializeApollo()

  await apolloClient.query({
    query: TopDocument,
    variables: {
      preview: process.env.PREVIEW,
      locale: 'en-US',
      authorId: process.env.AUTHOR_ID,
    },
  })

  return addApolloState(apolloClient, {
    props: {},
  })
}

const Top: React.FC = () => {
  localeVar('en-US')
  return <TopTemplate></TopTemplate>
}

export default Top
