import Container from '@components/atoms/Container'
import { AcademicBackground, useTopQuery } from '@graphql/generated/graphql'
import { useLocale } from '@hooks/Locale'
import moment from 'moment'
import React from 'react'

const AcademicBackgrounds: React.FC = () => {
  const locale = useLocale()
  const { data } = useTopQuery({
    variables: {
      preview: Boolean(process.env.PREVIEW),
      locale: locale,
      authorId: String(process.env.AUTHOR_ID),
    },
  })

  const academicDate = (academicBackground: AcademicBackground) => {
    const startDate = moment(academicBackground.startDate).format('YYYY.MM')
    const endDate = academicBackground.endDate
      ? moment(academicBackground.endDate).format('YYYY.MM')
      : null
    return startDate === endDate
      ? startDate
      : endDate
        ? `${startDate} - ${endDate}`
        : `${startDate} -`
  }

  return (
    <Container>
      <h2 className="my-4 font-medium text-4xl">Academic Backgrounds</h2>
      <hr />
      <ul className="mt-4 mb-1 list-disc">
        {data?.academicBackgroundCollection?.items.map(
          (academicBackgournd: AcademicBackground, index) => {
            return (
              <li key={index} className="mx-10 mb-1">
                {[
                  academicDate(academicBackgournd),
                  academicBackgournd.organization,
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

export default AcademicBackgrounds
