'use client'

import AchievementList from '@components/atoms/AchievementList'
import Container from '@components/atoms/Container'
import { Achievement, useTopQuery } from '@graphql/generated/graphql'
import { useLocale } from '@hooks/Locale'
import React from 'react'

const convertCategoryKeyObject = (items, locale) => {
  const localeName = locale === 'en-US' ? 'nameUS' : 'nameJP'
  const achievements = {}
  const categoryOrder = [] as { name: string; orderNum: number }[]
  items?.forEach((item) => {
    const cat = item.category[localeName]
    if (typeof achievements[cat] == 'undefined') achievements[cat] = []
    achievements[cat].push(item)
    if (!categoryOrder.some((v) => v.name === cat))
      categoryOrder.push({ name: cat, orderNum: item.category.orderNumber })
  })
  categoryOrder.sort((prev, current) => {
    return prev.orderNum - current.orderNum
  })
  return { achievements, categoryOrder }
}

const Achievements: React.FC = () => {
  const locale = useLocale()
  const { data } = useTopQuery({
    variables: {
      preview: Boolean(process.env.PREVIEW),
      locale: locale,
      authorId: String(process.env.AUTHOR_ID),
    },
  })

  const { achievements, categoryOrder } = convertCategoryKeyObject(
    data?.achievements?.items,
    locale,
  )
  const achievementsData = achievements as Array<Achievement>

  return (
    <Container>
      <h2 className="my-4 font-medium text-4xl">Achievements</h2>
      <hr />
      {categoryOrder.map((category, index) => {
        return (
          <React.Fragment key={index}>
            <h3 className="mt-4 mb-1">{category.name}</h3>
            <AchievementList
              achievements={achievementsData}
              categoryName={category.name}
              locale={locale}
            />
          </React.Fragment>
        )
      })}
    </Container>
  )
}

export default Achievements
