import type { TopQuery } from '@graphql/generated/graphql'

type Item<T extends { items: Array<unknown> } | null> = NonNullable<
  NonNullable<T>['items'][number]
>

export type Achievement = Item<TopQuery['achievements']>
export type Award = Item<TopQuery['awards']>
export type WorkExperience = Item<TopQuery['workExperiences']>
export type AcademicBackground = Item<TopQuery['academicBackgroundCollection']>
