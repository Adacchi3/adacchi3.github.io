import { useLocaleQuery } from '@graphql/generated/graphql'
import React from 'react'

const Achievements: React.VFC = () => {
  const { data } = useLocaleQuery()

  return <p>{data?.locale}</p>
}

export default Achievements
