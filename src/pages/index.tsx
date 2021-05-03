import React from 'react'
import { useTopQuery } from '@graphql/generated/graphql'

const Top: React.FC = () => {
  const { data, loading } = useTopQuery({
    variables: {
      preview: true,
      locale: 'ja-JP',
    },
  })

  if (loading) {
    return <p>loading...</p>
  }

  const contents = data?.fetchedConetnts?.items.map((content) => {
    return content?.title
  })

  return <p>{contents}</p>
}

export default Top
