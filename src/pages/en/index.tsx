import { addApolloState, initializeApollo, localeVar } from '@client'
import Metadata from '@components/atoms/Metadata'
import TopTemplate from '@components/templates/TopTemplate'
import { TopDocument, useTopQuery } from '@graphql/generated/graphql'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import React from 'react'

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
  const { data } = useTopQuery({
    variables: {
      locale: 'en-US',
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
