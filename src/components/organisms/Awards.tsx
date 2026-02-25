import Container from '@components/atoms/Container'
import { Award, useTopQuery } from '@graphql/generated/graphql'
import { useLocale } from '@hooks/Locale'
import { format } from 'date-fns'
import React from 'react'

const Awards: React.FC = () => {
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
      <h2 className="my-4 font-medium text-4xl">Awards</h2>
      <hr />
      <ul className="mt-4 mb-1 list-disc">
        {data?.awards?.items.map((award: Award, index) => {
          return (
            <li key={index} className="mx-10 mb-1">
              {[
                award.name,
                award.publication,
                award.awardDate
                  ? format(new Date(award.awardDate), 'yyyy.MM')
                  : null,
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
