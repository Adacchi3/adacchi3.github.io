import React from 'react'
import moment from 'moment'
import { Achievement } from '@graphql/generated/graphql'

type Props = {
  achievements: Array<Achievement>
  categoryName: string
  locale: string
}

const AchievementList: React.VFC<Props> = ({
  achievements,
  categoryName,
  locale,
}) => {
  const authors = (achievement) => {
    return achievement.authorsCollection.items
      .map((author, index) => {
        const localeName =
          locale === 'en-US' || !!achievement.category.nameUS
            ? 'nameUS'
            : 'nameJP'
        return author.underline ? (
          <React.Fragment key={index}>
            <u>{author[localeName]}</u>
          </React.Fragment>
        ) : (
          <React.Fragment key={index}>{author[localeName]}</React.Fragment>
        )
      })
      .reduce((previous, current) => [previous, ', ', current])
  }

  const title = (achievement: Achievement) => {
    return achievement.link ? (
      <>
        “
        <a
          className="hover:underline text-blue-600"
          href={achievement.link}
          rel="noopener noreferrer"
          target="_blank"
        >
          {achievement.title}
        </a>
        ”
      </>
    ) : (
      <>“{achievement.title}”</>
    )
  }

  const pages = (achievement: Achievement) => {
    return achievement.startPage ? (
      <>
        pp.{achievement.startPage}--
        {achievement.endPage}
      </>
    ) : null
  }

  const publishedDate = (achievement: Achievement) => {
    return moment(achievement.publishedDate).format('YYYY.MM')
  }

  return (
    <ul className="list-disc">
      {achievements[categoryName].map(
        (achievement: Achievement, index: number) => {
          return (
            <li key={`${achievement.title}-${index}`} className="mx-10 mb-1">
              {[
                authors(achievement),
                title(achievement),
                achievement.proceeding,
                achievement.sessionId,
                pages(achievement),
                publishedDate(achievement),
                achievement.note,
              ]
                .filter((value) => value)
                .reduce((previous, current) => [previous, ', ', current])}
            </li>
          )
        }
      )}
    </ul>
  )
}

export default AchievementList
