import { Achievement } from '@graphql/generated/graphql'
import { format } from 'date-fns'
import React from 'react'

type Props = {
  achievements: Array<Achievement>
  categoryName: string
  locale: string
}

const AchievementList: React.FC<Props> = ({
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
      <React.Fragment key={achievement.title}>
        “
        <a
          className="text-blue-600 hover:underline"
          href={achievement.link}
          rel="noopener noreferrer"
          target="_blank"
        >
          {achievement.title}
        </a>
        ”
      </React.Fragment>
    ) : (
      <React.Fragment key={achievement.title}>
        “{achievement.title}”
      </React.Fragment>
    )
  }

  const pages = (achievement: Achievement) => {
    return achievement.startPage ? (
      <React.Fragment key={`pp-${achievement.title}`}>
        pp.{achievement.startPage}--
        {achievement.endPage}
      </React.Fragment>
    ) : null
  }

  const publishedDate = (achievement: Achievement) => {
    return achievement.publishedDate
      ? format(new Date(achievement.publishedDate), 'yyyy.MM')
      : null
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
        },
      )}
    </ul>
  )
}

export default AchievementList
