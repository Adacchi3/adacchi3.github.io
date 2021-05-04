import React from 'react'
import { GetStaticProps } from 'next'
import { TopDocument, useTopQuery } from '@graphql/generated/graphql'
import { addApolloState, initializeApollo, localeVar } from '@client'
import TopTemplate from '@components/templates/TopTemplate'
import Head from 'next/head'
import Metadata from '@components/atoms/Metadata'

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
  localeVar('ja-JP')
  const { data } = useTopQuery({
    variables: {
      locale: 'ja-JP',
      preview: Boolean(process.env.PREVIEW),
      authorId: String(process.env.AUTHOR_ID),
    },
  })

  return (
    <>
      <Head>
        <title>Profile: Adacchi3 | Adacchi3 Portfolio</title>
        <Metadata
          title={'Profile: Adacchi3'}
          description={String(data?.me?.description)}
        />
      </Head>
      <TopTemplate />
    </>
  )
}

export default Top
