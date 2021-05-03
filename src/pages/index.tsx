import React from 'react'
import { GetStaticProps } from 'next'
import { TopDocument, useTopQuery } from '@graphql/generated/graphql'
import { addApolloState, initializeApollo } from '@client'

export const getStaticProps: GetStaticProps = async () => {
  const apolloClient = initializeApollo()

  await apolloClient.query({
    query: TopDocument,
    variables: {
      preview: true,
      locale: 'ja-JP',
    },
  })

  return addApolloState(apolloClient, {
    props: {},
  })
}

const Top: React.FC = () => {
  const { data } = useTopQuery({
    variables: {
      preview: true,
      locale: 'ja-JP',
    },
  })

  const contents = data?.fetchedConetnts?.items.map((content) => {
    return content?.title
  })

  return <p>{contents}</p>
}

export default Top
