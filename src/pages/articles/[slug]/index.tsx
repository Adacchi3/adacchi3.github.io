import PostTemplate from '@components/templates/PostTemplate'
import { GetStaticPaths, GetStaticProps } from 'next'
import React from 'react'

type StaticProps = {
  params: {
    slug: string
  }
}

export const getStaticProps: GetStaticProps = async ({
  params,
}: StaticProps) => {
  const slug = params.slug
  return {
    props: {
      slug,
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: ['/articles/hoge', '/articles/fuga'],
    fallback: false,
  }
}

const Post: React.FC = () => {
  return <PostTemplate />
}

export default Post
