'use client'

import Container from '@components/atoms/Container'
import { WorkExperience, useTopQuery } from '@graphql/generated/graphql'
import { useLocale } from '@hooks/Locale'
import { formatYearMonth } from '@utils/date'
import React from 'react'

const WorkExperiences: React.FC = () => {
  const locale = useLocale()
  const { data } = useTopQuery({
    variables: {
      preview: process.env.PREVIEW === 'true',
      locale: locale,
      authorId: String(process.env.AUTHOR_ID),
    },
  })

  const workDate = (workExperience: WorkExperience) => {
    const startDate = workExperience.startDate
      ? formatYearMonth(workExperience.startDate)
      : null
    const endDate = workExperience.endDate
      ? formatYearMonth(workExperience.endDate)
      : null
    return startDate
      ? startDate === endDate
        ? startDate
        : endDate
          ? `${startDate} - ${endDate}`
          : `${startDate} -`
      : null
  }

  return (
    <Container>
      <h2 className="my-4 font-medium text-4xl">Work Experiences</h2>
      <hr />
      <ul className="mt-4 mb-1 list-disc">
        {data?.workExperiences?.items.map(
          (workExperience: WorkExperience, index) => {
            return (
              <li key={index} className="mx-10 mb-1">
                {[
                  workExperience.role,
                  workExperience.organization,
                  workDate(workExperience),
                ]
                  .filter((value) => value)
                  .join(', ')}
              </li>
            )
          },
        )}
      </ul>
    </Container>
  )
}

export default WorkExperiences
