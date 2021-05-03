import React from 'react'
import { GetStaticProps } from 'next'
import { TopDocument, useTopQuery, TopQuery } from '@graphql/generated/graphql'
import { addApolloState, initializeApollo } from '@client'

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
  const { data } = useTopQuery({
    variables: {
      preview: Boolean(process.env.PREVIEW),
      locale: 'en-US',
      authorId: String(process.env.AUTHOR_ID),
    },
  })

  const { me } = data as TopQuery

  return <p>{me?.description}</p>
}

export default Top
