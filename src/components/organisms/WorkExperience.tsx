import Container from '@components/atoms/Container'
import { WorkExperience, useTopQuery } from '@graphql/generated/graphql'
import { useLocale } from '@hooks/Locale'
import moment from 'moment'
import React from 'react'

const WorkExperiences: React.FC = () => {
  const locale = useLocale()
  const { data } = useTopQuery({
    variables: {
      preview: Boolean(process.env.PREVIEW),
      locale: locale,
      authorId: String(process.env.AUTHOR_ID),
    },
  })

  const workDate = (workExperience: WorkExperience) => {
    const startDate = moment(workExperience.startDate).format('YYYY.MM')
    const endDate = workExperience.endDate
      ? moment(workExperience.endDate).format('YYYY.MM')
      : null
    return startDate === endDate
      ? startDate
      : endDate
        ? `${startDate} - ${endDate}`
        : `${startDate} -`
  }

  return (
    <Container>
      <h2 className="my-4 text-4xl font-medium">Work Experiences</h2>
      <hr />
      <ul className="mb-1 mt-4 list-disc">
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
