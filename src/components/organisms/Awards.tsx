import React from 'react'
import { Award, useTopQuery } from '@graphql/generated/graphql'
import { useLocale } from '@hooks/Locale'
import moment from 'moment'
import Container from '@components/atoms/Container'

const Awards: React.VFC = () => {
  const locale = useLocale()
  const { data } = useTopQuery({
    variables: {
      preview: Boolean(process.env.PREVIEW),
      locale: locale,
      authorId: String(process.env.AUTHOR_ID),
    },
  })

  return (
    <Container>
      <h2 className="my-4 text-4xl font-medium">Awards</h2>
      <hr />
      <ul className="mb-1 mt-4 list-disc">
        {data?.awards?.items.map((award: Award, index) => {
          return (
            <li key={index} className="mx-10 mb-1">
              {[
                award.name,
                award.publication,
                moment(award.awardDate).format('YYYY.MM'),
              ]
                .filter((value) => value)
                .join(', ')}
            </li>
          )
        })}
      </ul>
    </Container>
  )
}

export default Awards
