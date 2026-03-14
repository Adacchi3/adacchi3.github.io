import * as Apollo from '@apollo/client'
import { gql } from '@apollo/client'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never }
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never
    }
const defaultOptions = {} as const
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string }
  String: { input: string; output: string }
  Boolean: { input: boolean; output: boolean }
  Int: { input: number; output: number }
  Float: { input: number; output: number }
  /**
   * A date-time string at UTC, such as 2007-12-03T10:15:30Z,
   *     compliant with the 'date-time' format outlined in section 5.6 of
   *     the RFC 3339 profile of the ISO 8601 standard for representation
   *     of dates and times using the Gregorian calendar.
   */
  DateTime: { input: string; output: string }
  /** The 'Dimension' type represents dimensions as whole numeric values between `1` and `4000`. */
  Dimension: { input: number; output: number }
  /** The 'HexColor' type represents color in `rgb:ffffff` string format. */
  HexColor: { input: string; output: string }
  /** The 'Quality' type represents quality as whole numeric values between `1` and `100`. */
  Quality: { input: number; output: number }
}

/** [See type definition](https://app.contentful.com/spaces/{spaceId}/content_types/academicBackground) */
export type AcademicBackground = Entry & {
  __typename?: 'AcademicBackground'
  contentfulMetadata: ContentfulMetadata
  endDate?: Maybe<Scalars['DateTime']['output']>
  linkedFrom?: Maybe<AcademicBackgroundLinkingCollections>
  organization?: Maybe<Scalars['String']['output']>
  startDate?: Maybe<Scalars['DateTime']['output']>
  sys: Sys
  user?: Maybe<Author>
}

/** [See type definition](https://app.contentful.com/spaces/{spaceId}/content_types/academicBackground) */
export type AcademicBackgroundEndDateArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
}

/** [See type definition](https://app.contentful.com/spaces/{spaceId}/content_types/academicBackground) */
export type AcademicBackgroundLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

/** [See type definition](https://app.contentful.com/spaces/{spaceId}/content_types/academicBackground) */
export type AcademicBackgroundOrganizationArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
}

/** [See type definition](https://app.contentful.com/spaces/{spaceId}/content_types/academicBackground) */
export type AcademicBackgroundStartDateArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
}

/** [See type definition](https://app.contentful.com/spaces/{spaceId}/content_types/academicBackground) */
export type AcademicBackgroundUserArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
  preview?: InputMaybe<Scalars['Boolean']['input']>
}

export type AcademicBackgroundCollection = {
  __typename?: 'AcademicBackgroundCollection'
  items: Array<Maybe<AcademicBackground>>
  limit: Scalars['Int']['output']
  skip: Scalars['Int']['output']
  total: Scalars['Int']['output']
}

export type AcademicBackgroundFilter = {
  AND?: InputMaybe<Array<InputMaybe<AcademicBackgroundFilter>>>
  OR?: InputMaybe<Array<InputMaybe<AcademicBackgroundFilter>>>
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>
  endDate?: InputMaybe<Scalars['DateTime']['input']>
  endDate_exists?: InputMaybe<Scalars['Boolean']['input']>
  endDate_gt?: InputMaybe<Scalars['DateTime']['input']>
  endDate_gte?: InputMaybe<Scalars['DateTime']['input']>
  endDate_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  endDate_lt?: InputMaybe<Scalars['DateTime']['input']>
  endDate_lte?: InputMaybe<Scalars['DateTime']['input']>
  endDate_not?: InputMaybe<Scalars['DateTime']['input']>
  endDate_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  organization?: InputMaybe<Scalars['String']['input']>
  organization_contains?: InputMaybe<Scalars['String']['input']>
  organization_exists?: InputMaybe<Scalars['Boolean']['input']>
  organization_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  organization_not?: InputMaybe<Scalars['String']['input']>
  organization_not_contains?: InputMaybe<Scalars['String']['input']>
  organization_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  startDate?: InputMaybe<Scalars['DateTime']['input']>
  startDate_exists?: InputMaybe<Scalars['Boolean']['input']>
  startDate_gt?: InputMaybe<Scalars['DateTime']['input']>
  startDate_gte?: InputMaybe<Scalars['DateTime']['input']>
  startDate_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  startDate_lt?: InputMaybe<Scalars['DateTime']['input']>
  startDate_lte?: InputMaybe<Scalars['DateTime']['input']>
  startDate_not?: InputMaybe<Scalars['DateTime']['input']>
  startDate_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  sys?: InputMaybe<SysFilter>
  user?: InputMaybe<CfAuthorNestedFilter>
  user_exists?: InputMaybe<Scalars['Boolean']['input']>
}

export type AcademicBackgroundLinkingCollections = {
  __typename?: 'AcademicBackgroundLinkingCollections'
  entryCollection?: Maybe<EntryCollection>
}

export type AcademicBackgroundLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>
  locale?: InputMaybe<Scalars['String']['input']>
  preview?: InputMaybe<Scalars['Boolean']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
}

export enum AcademicBackgroundOrder {
  EndDateAsc = 'endDate_ASC',
  EndDateDesc = 'endDate_DESC',
  OrganizationAsc = 'organization_ASC',
  OrganizationDesc = 'organization_DESC',
  StartDateAsc = 'startDate_ASC',
  StartDateDesc = 'startDate_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

/** [See type definition](https://app.contentful.com/spaces/{spaceId}/content_types/achievement) */
export type Achievement = Entry & {
  __typename?: 'Achievement'
  authorsCollection?: Maybe<AchievementAuthorsCollection>
  category?: Maybe<AchievementCategory>
  contentfulMetadata: ContentfulMetadata
  endPage?: Maybe<Scalars['Int']['output']>
  link?: Maybe<Scalars['String']['output']>
  linkedFrom?: Maybe<AchievementLinkingCollections>
  note?: Maybe<Scalars['String']['output']>
  proceeding?: Maybe<Scalars['String']['output']>
  publishedDate?: Maybe<Scalars['DateTime']['output']>
  sessionId?: Maybe<Scalars['String']['output']>
  startPage?: Maybe<Scalars['Int']['output']>
  sys: Sys
  title?: Maybe<Scalars['String']['output']>
}

/** [See type definition](https://app.contentful.com/spaces/{spaceId}/content_types/achievement) */
export type AchievementAuthorsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>
  locale?: InputMaybe<Scalars['String']['input']>
  preview?: InputMaybe<Scalars['Boolean']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
}

/** [See type definition](https://app.contentful.com/spaces/{spaceId}/content_types/achievement) */
export type AchievementCategoryArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
  preview?: InputMaybe<Scalars['Boolean']['input']>
}

/** [See type definition](https://app.contentful.com/spaces/{spaceId}/content_types/achievement) */
export type AchievementEndPageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
}

/** [See type definition](https://app.contentful.com/spaces/{spaceId}/content_types/achievement) */
export type AchievementLinkArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
}

/** [See type definition](https://app.contentful.com/spaces/{spaceId}/content_types/achievement) */
export type AchievementLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

/** [See type definition](https://app.contentful.com/spaces/{spaceId}/content_types/achievement) */
export type AchievementNoteArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
}

/** [See type definition](https://app.contentful.com/spaces/{spaceId}/content_types/achievement) */
export type AchievementProceedingArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
}

/** [See type definition](https://app.contentful.com/spaces/{spaceId}/content_types/achievement) */
export type AchievementPublishedDateArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
}

/** [See type definition](https://app.contentful.com/spaces/{spaceId}/content_types/achievement) */
export type AchievementSessionIdArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
}

/** [See type definition](https://app.contentful.com/spaces/{spaceId}/content_types/achievement) */
export type AchievementStartPageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
}

/** [See type definition](https://app.contentful.com/spaces/{spaceId}/content_types/achievement) */
export type AchievementTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
}

export type AchievementAuthorsCollection = {
  __typename?: 'AchievementAuthorsCollection'
  items: Array<Maybe<Author>>
  limit: Scalars['Int']['output']
  skip: Scalars['Int']['output']
  total: Scalars['Int']['output']
}

/** [See type definition](https://app.contentful.com/spaces/{spaceId}/content_types/achievementCategory) */
export type AchievementCategory = Entry & {
  __typename?: 'AchievementCategory'
  contentfulMetadata: ContentfulMetadata
  linkedFrom?: Maybe<AchievementCategoryLinkingCollections>
  name?: Maybe<Scalars['String']['output']>
  orderNumber?: Maybe<Scalars['Int']['output']>
  sys: Sys
}

/** [See type definition](https://app.contentful.com/spaces/{spaceId}/content_types/achievementCategory) */
export type AchievementCategoryLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

/** [See type definition](https://app.contentful.com/spaces/{spaceId}/content_types/achievementCategory) */
export type AchievementCategoryNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
}

/** [See type definition](https://app.contentful.com/spaces/{spaceId}/content_types/achievementCategory) */
export type AchievementCategoryOrderNumberArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
}

export type AchievementCategoryCollection = {
  __typename?: 'AchievementCategoryCollection'
  items: Array<Maybe<AchievementCategory>>
  limit: Scalars['Int']['output']
  skip: Scalars['Int']['output']
  total: Scalars['Int']['output']
}

export type AchievementCategoryFilter = {
  AND?: InputMaybe<Array<InputMaybe<AchievementCategoryFilter>>>
  OR?: InputMaybe<Array<InputMaybe<AchievementCategoryFilter>>>
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>
  name?: InputMaybe<Scalars['String']['input']>
  name_contains?: InputMaybe<Scalars['String']['input']>
  name_exists?: InputMaybe<Scalars['Boolean']['input']>
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  name_not?: InputMaybe<Scalars['String']['input']>
  name_not_contains?: InputMaybe<Scalars['String']['input']>
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  orderNumber?: InputMaybe<Scalars['Int']['input']>
  orderNumber_exists?: InputMaybe<Scalars['Boolean']['input']>
  orderNumber_gt?: InputMaybe<Scalars['Int']['input']>
  orderNumber_gte?: InputMaybe<Scalars['Int']['input']>
  orderNumber_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>
  orderNumber_lt?: InputMaybe<Scalars['Int']['input']>
  orderNumber_lte?: InputMaybe<Scalars['Int']['input']>
  orderNumber_not?: InputMaybe<Scalars['Int']['input']>
  orderNumber_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>
  sys?: InputMaybe<SysFilter>
}

export type AchievementCategoryLinkingCollections = {
  __typename?: 'AchievementCategoryLinkingCollections'
  achievementCollection?: Maybe<AchievementCollection>
  entryCollection?: Maybe<EntryCollection>
}

export type AchievementCategoryLinkingCollectionsAchievementCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>
  locale?: InputMaybe<Scalars['String']['input']>
  preview?: InputMaybe<Scalars['Boolean']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
}

export type AchievementCategoryLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>
  locale?: InputMaybe<Scalars['String']['input']>
  preview?: InputMaybe<Scalars['Boolean']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
}

export enum AchievementCategoryOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  OrderNumberAsc = 'orderNumber_ASC',
  OrderNumberDesc = 'orderNumber_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export type AchievementCollection = {
  __typename?: 'AchievementCollection'
  items: Array<Maybe<Achievement>>
  limit: Scalars['Int']['output']
  skip: Scalars['Int']['output']
  total: Scalars['Int']['output']
}

export type AchievementFilter = {
  AND?: InputMaybe<Array<InputMaybe<AchievementFilter>>>
  OR?: InputMaybe<Array<InputMaybe<AchievementFilter>>>
  authorsCollection_exists?: InputMaybe<Scalars['Boolean']['input']>
  category?: InputMaybe<CfAchievementCategoryNestedFilter>
  category_exists?: InputMaybe<Scalars['Boolean']['input']>
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>
  endPage?: InputMaybe<Scalars['Int']['input']>
  endPage_exists?: InputMaybe<Scalars['Boolean']['input']>
  endPage_gt?: InputMaybe<Scalars['Int']['input']>
  endPage_gte?: InputMaybe<Scalars['Int']['input']>
  endPage_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>
  endPage_lt?: InputMaybe<Scalars['Int']['input']>
  endPage_lte?: InputMaybe<Scalars['Int']['input']>
  endPage_not?: InputMaybe<Scalars['Int']['input']>
  endPage_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>
  link?: InputMaybe<Scalars['String']['input']>
  link_contains?: InputMaybe<Scalars['String']['input']>
  link_exists?: InputMaybe<Scalars['Boolean']['input']>
  link_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  link_not?: InputMaybe<Scalars['String']['input']>
  link_not_contains?: InputMaybe<Scalars['String']['input']>
  link_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  note?: InputMaybe<Scalars['String']['input']>
  note_contains?: InputMaybe<Scalars['String']['input']>
  note_exists?: InputMaybe<Scalars['Boolean']['input']>
  note_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  note_not?: InputMaybe<Scalars['String']['input']>
  note_not_contains?: InputMaybe<Scalars['String']['input']>
  note_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  proceeding?: InputMaybe<Scalars['String']['input']>
  proceeding_contains?: InputMaybe<Scalars['String']['input']>
  proceeding_exists?: InputMaybe<Scalars['Boolean']['input']>
  proceeding_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  proceeding_not?: InputMaybe<Scalars['String']['input']>
  proceeding_not_contains?: InputMaybe<Scalars['String']['input']>
  proceeding_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  publishedDate?: InputMaybe<Scalars['DateTime']['input']>
  publishedDate_exists?: InputMaybe<Scalars['Boolean']['input']>
  publishedDate_gt?: InputMaybe<Scalars['DateTime']['input']>
  publishedDate_gte?: InputMaybe<Scalars['DateTime']['input']>
  publishedDate_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  publishedDate_lt?: InputMaybe<Scalars['DateTime']['input']>
  publishedDate_lte?: InputMaybe<Scalars['DateTime']['input']>
  publishedDate_not?: InputMaybe<Scalars['DateTime']['input']>
  publishedDate_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['DateTime']['input']>>
  >
  sessionId?: InputMaybe<Scalars['String']['input']>
  sessionId_contains?: InputMaybe<Scalars['String']['input']>
  sessionId_exists?: InputMaybe<Scalars['Boolean']['input']>
  sessionId_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  sessionId_not?: InputMaybe<Scalars['String']['input']>
  sessionId_not_contains?: InputMaybe<Scalars['String']['input']>
  sessionId_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  startPage?: InputMaybe<Scalars['Int']['input']>
  startPage_exists?: InputMaybe<Scalars['Boolean']['input']>
  startPage_gt?: InputMaybe<Scalars['Int']['input']>
  startPage_gte?: InputMaybe<Scalars['Int']['input']>
  startPage_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>
  startPage_lt?: InputMaybe<Scalars['Int']['input']>
  startPage_lte?: InputMaybe<Scalars['Int']['input']>
  startPage_not?: InputMaybe<Scalars['Int']['input']>
  startPage_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>
  sys?: InputMaybe<SysFilter>
  title?: InputMaybe<Scalars['String']['input']>
  title_contains?: InputMaybe<Scalars['String']['input']>
  title_exists?: InputMaybe<Scalars['Boolean']['input']>
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  title_not?: InputMaybe<Scalars['String']['input']>
  title_not_contains?: InputMaybe<Scalars['String']['input']>
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type AchievementLinkingCollections = {
  __typename?: 'AchievementLinkingCollections'
  entryCollection?: Maybe<EntryCollection>
}

export type AchievementLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>
  locale?: InputMaybe<Scalars['String']['input']>
  preview?: InputMaybe<Scalars['Boolean']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
}

export enum AchievementOrder {
  EndPageAsc = 'endPage_ASC',
  EndPageDesc = 'endPage_DESC',
  LinkAsc = 'link_ASC',
  LinkDesc = 'link_DESC',
  NoteAsc = 'note_ASC',
  NoteDesc = 'note_DESC',
  PublishedDateAsc = 'publishedDate_ASC',
  PublishedDateDesc = 'publishedDate_DESC',
  SessionIdAsc = 'sessionId_ASC',
  SessionIdDesc = 'sessionId_DESC',
  StartPageAsc = 'startPage_ASC',
  StartPageDesc = 'startPage_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
}

/** Represents a binary file in a space. An asset can be any file type. */
export type Asset = {
  __typename?: 'Asset'
  contentType?: Maybe<Scalars['String']['output']>
  contentfulMetadata: ContentfulMetadata
  description?: Maybe<Scalars['String']['output']>
  fileName?: Maybe<Scalars['String']['output']>
  height?: Maybe<Scalars['Int']['output']>
  linkedFrom?: Maybe<AssetLinkingCollections>
  size?: Maybe<Scalars['Int']['output']>
  sys: Sys
  title?: Maybe<Scalars['String']['output']>
  url?: Maybe<Scalars['String']['output']>
  width?: Maybe<Scalars['Int']['output']>
}

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetUrlArgs = {
  transform?: InputMaybe<ImageTransformOptions>
}

export type AssetCollection = {
  __typename?: 'AssetCollection'
  items: Array<Maybe<Asset>>
  limit: Scalars['Int']['output']
  skip: Scalars['Int']['output']
  total: Scalars['Int']['output']
}

export type AssetFilter = {
  AND?: InputMaybe<Array<InputMaybe<AssetFilter>>>
  OR?: InputMaybe<Array<InputMaybe<AssetFilter>>>
  contentType?: InputMaybe<Scalars['String']['input']>
  contentType_contains?: InputMaybe<Scalars['String']['input']>
  contentType_exists?: InputMaybe<Scalars['Boolean']['input']>
  contentType_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  contentType_not?: InputMaybe<Scalars['String']['input']>
  contentType_not_contains?: InputMaybe<Scalars['String']['input']>
  contentType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>
  description?: InputMaybe<Scalars['String']['input']>
  description_contains?: InputMaybe<Scalars['String']['input']>
  description_exists?: InputMaybe<Scalars['Boolean']['input']>
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  description_not?: InputMaybe<Scalars['String']['input']>
  description_not_contains?: InputMaybe<Scalars['String']['input']>
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  fileName?: InputMaybe<Scalars['String']['input']>
  fileName_contains?: InputMaybe<Scalars['String']['input']>
  fileName_exists?: InputMaybe<Scalars['Boolean']['input']>
  fileName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  fileName_not?: InputMaybe<Scalars['String']['input']>
  fileName_not_contains?: InputMaybe<Scalars['String']['input']>
  fileName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  height?: InputMaybe<Scalars['Int']['input']>
  height_exists?: InputMaybe<Scalars['Boolean']['input']>
  height_gt?: InputMaybe<Scalars['Int']['input']>
  height_gte?: InputMaybe<Scalars['Int']['input']>
  height_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>
  height_lt?: InputMaybe<Scalars['Int']['input']>
  height_lte?: InputMaybe<Scalars['Int']['input']>
  height_not?: InputMaybe<Scalars['Int']['input']>
  height_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>
  size?: InputMaybe<Scalars['Int']['input']>
  size_exists?: InputMaybe<Scalars['Boolean']['input']>
  size_gt?: InputMaybe<Scalars['Int']['input']>
  size_gte?: InputMaybe<Scalars['Int']['input']>
  size_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>
  size_lt?: InputMaybe<Scalars['Int']['input']>
  size_lte?: InputMaybe<Scalars['Int']['input']>
  size_not?: InputMaybe<Scalars['Int']['input']>
  size_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>
  sys?: InputMaybe<SysFilter>
  title?: InputMaybe<Scalars['String']['input']>
  title_contains?: InputMaybe<Scalars['String']['input']>
  title_exists?: InputMaybe<Scalars['Boolean']['input']>
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  title_not?: InputMaybe<Scalars['String']['input']>
  title_not_contains?: InputMaybe<Scalars['String']['input']>
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  url?: InputMaybe<Scalars['String']['input']>
  url_contains?: InputMaybe<Scalars['String']['input']>
  url_exists?: InputMaybe<Scalars['Boolean']['input']>
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  url_not?: InputMaybe<Scalars['String']['input']>
  url_not_contains?: InputMaybe<Scalars['String']['input']>
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  width?: InputMaybe<Scalars['Int']['input']>
  width_exists?: InputMaybe<Scalars['Boolean']['input']>
  width_gt?: InputMaybe<Scalars['Int']['input']>
  width_gte?: InputMaybe<Scalars['Int']['input']>
  width_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>
  width_lt?: InputMaybe<Scalars['Int']['input']>
  width_lte?: InputMaybe<Scalars['Int']['input']>
  width_not?: InputMaybe<Scalars['Int']['input']>
  width_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>
}

export type AssetLinkingCollections = {
  __typename?: 'AssetLinkingCollections'
  authorCollection?: Maybe<AuthorCollection>
  entryCollection?: Maybe<EntryCollection>
}

export type AssetLinkingCollectionsAuthorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>
  locale?: InputMaybe<Scalars['String']['input']>
  preview?: InputMaybe<Scalars['Boolean']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
}

export type AssetLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>
  locale?: InputMaybe<Scalars['String']['input']>
  preview?: InputMaybe<Scalars['Boolean']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
}

export enum AssetOrder {
  ContentTypeAsc = 'contentType_ASC',
  ContentTypeDesc = 'contentType_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC',
}

/** [See type definition](https://app.contentful.com/spaces/{spaceId}/content_types/author) */
export type Author = Entry & {
  __typename?: 'Author'
  contentfulMetadata: ContentfulMetadata
  description?: Maybe<Scalars['String']['output']>
  image?: Maybe<Asset>
  linkedFrom?: Maybe<AuthorLinkingCollections>
  name?: Maybe<Scalars['String']['output']>
  nickname?: Maybe<Scalars['String']['output']>
  sys: Sys
  underline?: Maybe<Scalars['Boolean']['output']>
}

/** [See type definition](https://app.contentful.com/spaces/{spaceId}/content_types/author) */
export type AuthorDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
}

/** [See type definition](https://app.contentful.com/spaces/{spaceId}/content_types/author) */
export type AuthorImageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
  preview?: InputMaybe<Scalars['Boolean']['input']>
}

/** [See type definition](https://app.contentful.com/spaces/{spaceId}/content_types/author) */
export type AuthorLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

/** [See type definition](https://app.contentful.com/spaces/{spaceId}/content_types/author) */
export type AuthorNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
}

/** [See type definition](https://app.contentful.com/spaces/{spaceId}/content_types/author) */
export type AuthorNicknameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
}

/** [See type definition](https://app.contentful.com/spaces/{spaceId}/content_types/author) */
export type AuthorUnderlineArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
}

export type AuthorCollection = {
  __typename?: 'AuthorCollection'
  items: Array<Maybe<Author>>
  limit: Scalars['Int']['output']
  skip: Scalars['Int']['output']
  total: Scalars['Int']['output']
}

export type AuthorFilter = {
  AND?: InputMaybe<Array<InputMaybe<AuthorFilter>>>
  OR?: InputMaybe<Array<InputMaybe<AuthorFilter>>>
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>
  description?: InputMaybe<Scalars['String']['input']>
  description_contains?: InputMaybe<Scalars['String']['input']>
  description_exists?: InputMaybe<Scalars['Boolean']['input']>
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  description_not?: InputMaybe<Scalars['String']['input']>
  description_not_contains?: InputMaybe<Scalars['String']['input']>
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  image_exists?: InputMaybe<Scalars['Boolean']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  name_contains?: InputMaybe<Scalars['String']['input']>
  name_exists?: InputMaybe<Scalars['Boolean']['input']>
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  name_not?: InputMaybe<Scalars['String']['input']>
  name_not_contains?: InputMaybe<Scalars['String']['input']>
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  nickname?: InputMaybe<Scalars['String']['input']>
  nickname_contains?: InputMaybe<Scalars['String']['input']>
  nickname_exists?: InputMaybe<Scalars['Boolean']['input']>
  nickname_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  nickname_not?: InputMaybe<Scalars['String']['input']>
  nickname_not_contains?: InputMaybe<Scalars['String']['input']>
  nickname_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  sys?: InputMaybe<SysFilter>
  underline?: InputMaybe<Scalars['Boolean']['input']>
  underline_exists?: InputMaybe<Scalars['Boolean']['input']>
  underline_not?: InputMaybe<Scalars['Boolean']['input']>
}

export type AuthorLinkingCollections = {
  __typename?: 'AuthorLinkingCollections'
  academicBackgroundCollection?: Maybe<AcademicBackgroundCollection>
  achievementCollection?: Maybe<AchievementCollection>
  awardCollection?: Maybe<AwardCollection>
  contactCollection?: Maybe<ContactCollection>
  entryCollection?: Maybe<EntryCollection>
  workExperienceCollection?: Maybe<WorkExperienceCollection>
}

export type AuthorLinkingCollectionsAcademicBackgroundCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>
  locale?: InputMaybe<Scalars['String']['input']>
  preview?: InputMaybe<Scalars['Boolean']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
}

export type AuthorLinkingCollectionsAchievementCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>
  locale?: InputMaybe<Scalars['String']['input']>
  preview?: InputMaybe<Scalars['Boolean']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
}

export type AuthorLinkingCollectionsAwardCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>
  locale?: InputMaybe<Scalars['String']['input']>
  preview?: InputMaybe<Scalars['Boolean']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
}

export type AuthorLinkingCollectionsContactCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>
  locale?: InputMaybe<Scalars['String']['input']>
  preview?: InputMaybe<Scalars['Boolean']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
}

export type AuthorLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>
  locale?: InputMaybe<Scalars['String']['input']>
  preview?: InputMaybe<Scalars['Boolean']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
}

export type AuthorLinkingCollectionsWorkExperienceCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>
  locale?: InputMaybe<Scalars['String']['input']>
  preview?: InputMaybe<Scalars['Boolean']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
}

export enum AuthorOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  NicknameAsc = 'nickname_ASC',
  NicknameDesc = 'nickname_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  UnderlineAsc = 'underline_ASC',
  UnderlineDesc = 'underline_DESC',
}

/** [See type definition](https://app.contentful.com/spaces/{spaceId}/content_types/award) */
export type Award = Entry & {
  __typename?: 'Award'
  awardDate?: Maybe<Scalars['DateTime']['output']>
  contentfulMetadata: ContentfulMetadata
  linkedFrom?: Maybe<AwardLinkingCollections>
  name?: Maybe<Scalars['String']['output']>
  publication?: Maybe<Scalars['String']['output']>
  sys: Sys
  user?: Maybe<Author>
}

/** [See type definition](https://app.contentful.com/spaces/{spaceId}/content_types/award) */
export type AwardAwardDateArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
}

/** [See type definition](https://app.contentful.com/spaces/{spaceId}/content_types/award) */
export type AwardLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

/** [See type definition](https://app.contentful.com/spaces/{spaceId}/content_types/award) */
export type AwardNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
}

/** [See type definition](https://app.contentful.com/spaces/{spaceId}/content_types/award) */
export type AwardPublicationArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
}

/** [See type definition](https://app.contentful.com/spaces/{spaceId}/content_types/award) */
export type AwardUserArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
  preview?: InputMaybe<Scalars['Boolean']['input']>
}

export type AwardCollection = {
  __typename?: 'AwardCollection'
  items: Array<Maybe<Award>>
  limit: Scalars['Int']['output']
  skip: Scalars['Int']['output']
  total: Scalars['Int']['output']
}

export type AwardFilter = {
  AND?: InputMaybe<Array<InputMaybe<AwardFilter>>>
  OR?: InputMaybe<Array<InputMaybe<AwardFilter>>>
  awardDate?: InputMaybe<Scalars['DateTime']['input']>
  awardDate_exists?: InputMaybe<Scalars['Boolean']['input']>
  awardDate_gt?: InputMaybe<Scalars['DateTime']['input']>
  awardDate_gte?: InputMaybe<Scalars['DateTime']['input']>
  awardDate_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  awardDate_lt?: InputMaybe<Scalars['DateTime']['input']>
  awardDate_lte?: InputMaybe<Scalars['DateTime']['input']>
  awardDate_not?: InputMaybe<Scalars['DateTime']['input']>
  awardDate_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>
  name?: InputMaybe<Scalars['String']['input']>
  name_contains?: InputMaybe<Scalars['String']['input']>
  name_exists?: InputMaybe<Scalars['Boolean']['input']>
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  name_not?: InputMaybe<Scalars['String']['input']>
  name_not_contains?: InputMaybe<Scalars['String']['input']>
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  publication?: InputMaybe<Scalars['String']['input']>
  publication_contains?: InputMaybe<Scalars['String']['input']>
  publication_exists?: InputMaybe<Scalars['Boolean']['input']>
  publication_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  publication_not?: InputMaybe<Scalars['String']['input']>
  publication_not_contains?: InputMaybe<Scalars['String']['input']>
  publication_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  sys?: InputMaybe<SysFilter>
  user?: InputMaybe<CfAuthorNestedFilter>
  user_exists?: InputMaybe<Scalars['Boolean']['input']>
}

export type AwardLinkingCollections = {
  __typename?: 'AwardLinkingCollections'
  entryCollection?: Maybe<EntryCollection>
}

export type AwardLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>
  locale?: InputMaybe<Scalars['String']['input']>
  preview?: InputMaybe<Scalars['Boolean']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
}

export enum AwardOrder {
  AwardDateAsc = 'awardDate_ASC',
  AwardDateDesc = 'awardDate_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PublicationAsc = 'publication_ASC',
  PublicationDesc = 'publication_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

/** [See type definition](https://app.contentful.com/spaces/{spaceId}/content_types/contact) */
export type Contact = Entry & {
  __typename?: 'Contact'
  account?: Maybe<Scalars['String']['output']>
  contentfulMetadata: ContentfulMetadata
  link?: Maybe<Scalars['String']['output']>
  linkedFrom?: Maybe<ContactLinkingCollections>
  media?: Maybe<Scalars['String']['output']>
  sys: Sys
  user?: Maybe<Author>
}

/** [See type definition](https://app.contentful.com/spaces/{spaceId}/content_types/contact) */
export type ContactAccountArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
}

/** [See type definition](https://app.contentful.com/spaces/{spaceId}/content_types/contact) */
export type ContactLinkArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
}

/** [See type definition](https://app.contentful.com/spaces/{spaceId}/content_types/contact) */
export type ContactLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

/** [See type definition](https://app.contentful.com/spaces/{spaceId}/content_types/contact) */
export type ContactMediaArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
}

/** [See type definition](https://app.contentful.com/spaces/{spaceId}/content_types/contact) */
export type ContactUserArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
  preview?: InputMaybe<Scalars['Boolean']['input']>
}

export type ContactCollection = {
  __typename?: 'ContactCollection'
  items: Array<Maybe<Contact>>
  limit: Scalars['Int']['output']
  skip: Scalars['Int']['output']
  total: Scalars['Int']['output']
}

export type ContactFilter = {
  AND?: InputMaybe<Array<InputMaybe<ContactFilter>>>
  OR?: InputMaybe<Array<InputMaybe<ContactFilter>>>
  account?: InputMaybe<Scalars['String']['input']>
  account_contains?: InputMaybe<Scalars['String']['input']>
  account_exists?: InputMaybe<Scalars['Boolean']['input']>
  account_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  account_not?: InputMaybe<Scalars['String']['input']>
  account_not_contains?: InputMaybe<Scalars['String']['input']>
  account_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>
  link?: InputMaybe<Scalars['String']['input']>
  link_contains?: InputMaybe<Scalars['String']['input']>
  link_exists?: InputMaybe<Scalars['Boolean']['input']>
  link_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  link_not?: InputMaybe<Scalars['String']['input']>
  link_not_contains?: InputMaybe<Scalars['String']['input']>
  link_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  media?: InputMaybe<Scalars['String']['input']>
  media_contains?: InputMaybe<Scalars['String']['input']>
  media_exists?: InputMaybe<Scalars['Boolean']['input']>
  media_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  media_not?: InputMaybe<Scalars['String']['input']>
  media_not_contains?: InputMaybe<Scalars['String']['input']>
  media_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  sys?: InputMaybe<SysFilter>
  user?: InputMaybe<CfAuthorNestedFilter>
  user_exists?: InputMaybe<Scalars['Boolean']['input']>
}

export type ContactLinkingCollections = {
  __typename?: 'ContactLinkingCollections'
  entryCollection?: Maybe<EntryCollection>
}

export type ContactLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>
  locale?: InputMaybe<Scalars['String']['input']>
  preview?: InputMaybe<Scalars['Boolean']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
}

export enum ContactOrder {
  AccountAsc = 'account_ASC',
  AccountDesc = 'account_DESC',
  LinkAsc = 'link_ASC',
  LinkDesc = 'link_DESC',
  MediaAsc = 'media_ASC',
  MediaDesc = 'media_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export type ContentfulMetadata = {
  __typename?: 'ContentfulMetadata'
  tags: Array<Maybe<ContentfulTag>>
}

export type ContentfulMetadataFilter = {
  tags?: InputMaybe<ContentfulMetadataTagsFilter>
  tags_exists?: InputMaybe<Scalars['Boolean']['input']>
}

export type ContentfulMetadataTagsFilter = {
  id_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  id_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  id_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

/**
 * Represents a tag entity for finding and organizing content easily.
 *     Find out more here: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/content-tags
 */
export type ContentfulTag = {
  __typename?: 'ContentfulTag'
  id?: Maybe<Scalars['String']['output']>
  name?: Maybe<Scalars['String']['output']>
}

export type Entry = {
  contentfulMetadata: ContentfulMetadata
  sys: Sys
}

export type EntryCollection = {
  __typename?: 'EntryCollection'
  items: Array<Maybe<Entry>>
  limit: Scalars['Int']['output']
  skip: Scalars['Int']['output']
  total: Scalars['Int']['output']
}

export type EntryFilter = {
  AND?: InputMaybe<Array<InputMaybe<EntryFilter>>>
  OR?: InputMaybe<Array<InputMaybe<EntryFilter>>>
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>
  sys?: InputMaybe<SysFilter>
}

export enum EntryOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export enum ImageFormat {
  /** JPG image format. */
  Jpg = 'JPG',
  /**
   * Progressive JPG format stores multiple passes of an image in progressively higher detail.
   *         When a progressive image is loading, the viewer will first see a lower quality pixelated version which
   *         will gradually improve in detail, until the image is fully downloaded. This is to display an image as
   *         early as possible to make the layout look as designed.
   */
  JpgProgressive = 'JPG_PROGRESSIVE',
  /** PNG image format */
  Png = 'PNG',
  /**
   * 8-bit PNG images support up to 256 colors and weigh less than the standard 24-bit PNG equivalent.
   *         The 8-bit PNG format is mostly used for simple images, such as icons or logos.
   */
  Png8 = 'PNG8',
  /** WebP image format. */
  Webp = 'WEBP',
}

export enum ImageResizeFocus {
  /** Focus the resizing on the bottom. */
  Bottom = 'BOTTOM',
  /** Focus the resizing on the bottom left. */
  BottomLeft = 'BOTTOM_LEFT',
  /** Focus the resizing on the bottom right. */
  BottomRight = 'BOTTOM_RIGHT',
  /** Focus the resizing on the center. */
  Center = 'CENTER',
  /** Focus the resizing on the largest face. */
  Face = 'FACE',
  /** Focus the resizing on the area containing all the faces. */
  Faces = 'FACES',
  /** Focus the resizing on the left. */
  Left = 'LEFT',
  /** Focus the resizing on the right. */
  Right = 'RIGHT',
  /** Focus the resizing on the top. */
  Top = 'TOP',
  /** Focus the resizing on the top left. */
  TopLeft = 'TOP_LEFT',
  /** Focus the resizing on the top right. */
  TopRight = 'TOP_RIGHT',
}

export enum ImageResizeStrategy {
  /** Crops a part of the original image to fit into the specified dimensions. */
  Crop = 'CROP',
  /** Resizes the image to the specified dimensions, cropping the image if needed. */
  Fill = 'FILL',
  /** Resizes the image to fit into the specified dimensions. */
  Fit = 'FIT',
  /**
   * Resizes the image to the specified dimensions, padding the image if needed.
   *         Uses desired background color as padding color.
   */
  Pad = 'PAD',
  /** Resizes the image to the specified dimensions, changing the original aspect ratio if needed. */
  Scale = 'SCALE',
  /** Creates a thumbnail from the image. */
  Thumb = 'THUMB',
}

export type ImageTransformOptions = {
  /**
   * Desired background color, used with corner radius or `PAD` resize strategy.
   *         Defaults to transparent (for `PNG`, `PNG8` and `WEBP`) or white (for `JPG` and `JPG_PROGRESSIVE`).
   */
  backgroundColor?: InputMaybe<Scalars['HexColor']['input']>
  /**
   * Desired corner radius in pixels.
   *         Results in an image with rounded corners (pass `-1` for a full circle/ellipse).
   *         Defaults to `0`. Uses desired background color as padding color,
   *         unless the format is `JPG` or `JPG_PROGRESSIVE` and resize strategy is `PAD`, then defaults to white.
   */
  cornerRadius?: InputMaybe<Scalars['Int']['input']>
  /** Desired image format. Defaults to the original image format. */
  format?: InputMaybe<ImageFormat>
  /** Desired height in pixels. Defaults to the original image height. */
  height?: InputMaybe<Scalars['Dimension']['input']>
  /**
   * Desired quality of the image in percents.
   *         Used for `PNG8`, `JPG`, `JPG_PROGRESSIVE` and `WEBP` formats.
   */
  quality?: InputMaybe<Scalars['Quality']['input']>
  /** Desired resize focus area. Defaults to `CENTER`. */
  resizeFocus?: InputMaybe<ImageResizeFocus>
  /** Desired resize strategy. Defaults to `FIT`. */
  resizeStrategy?: InputMaybe<ImageResizeStrategy>
  /** Desired width in pixels. Defaults to the original image width. */
  width?: InputMaybe<Scalars['Dimension']['input']>
}

export type Query = {
  __typename?: 'Query'
  academicBackground?: Maybe<AcademicBackground>
  academicBackgroundCollection?: Maybe<AcademicBackgroundCollection>
  achievement?: Maybe<Achievement>
  achievementCategory?: Maybe<AchievementCategory>
  achievementCategoryCollection?: Maybe<AchievementCategoryCollection>
  achievementCollection?: Maybe<AchievementCollection>
  asset?: Maybe<Asset>
  assetCollection?: Maybe<AssetCollection>
  author?: Maybe<Author>
  authorCollection?: Maybe<AuthorCollection>
  award?: Maybe<Award>
  awardCollection?: Maybe<AwardCollection>
  contact?: Maybe<Contact>
  contactCollection?: Maybe<ContactCollection>
  entryCollection?: Maybe<EntryCollection>
  locale: Scalars['String']['output']
  workExperience?: Maybe<WorkExperience>
  workExperienceCollection?: Maybe<WorkExperienceCollection>
}

export type QueryAcademicBackgroundArgs = {
  id: Scalars['String']['input']
  locale?: InputMaybe<Scalars['String']['input']>
  preview?: InputMaybe<Scalars['Boolean']['input']>
}

export type QueryAcademicBackgroundCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>
  locale?: InputMaybe<Scalars['String']['input']>
  order?: InputMaybe<Array<InputMaybe<AcademicBackgroundOrder>>>
  preview?: InputMaybe<Scalars['Boolean']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<AcademicBackgroundFilter>
}

export type QueryAchievementArgs = {
  id: Scalars['String']['input']
  locale?: InputMaybe<Scalars['String']['input']>
  preview?: InputMaybe<Scalars['Boolean']['input']>
}

export type QueryAchievementCategoryArgs = {
  id: Scalars['String']['input']
  locale?: InputMaybe<Scalars['String']['input']>
  preview?: InputMaybe<Scalars['Boolean']['input']>
}

export type QueryAchievementCategoryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>
  locale?: InputMaybe<Scalars['String']['input']>
  order?: InputMaybe<Array<InputMaybe<AchievementCategoryOrder>>>
  preview?: InputMaybe<Scalars['Boolean']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<AchievementCategoryFilter>
}

export type QueryAchievementCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>
  locale?: InputMaybe<Scalars['String']['input']>
  order?: InputMaybe<Array<InputMaybe<AchievementOrder>>>
  preview?: InputMaybe<Scalars['Boolean']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<AchievementFilter>
}

export type QueryAssetArgs = {
  id: Scalars['String']['input']
  locale?: InputMaybe<Scalars['String']['input']>
  preview?: InputMaybe<Scalars['Boolean']['input']>
}

export type QueryAssetCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>
  locale?: InputMaybe<Scalars['String']['input']>
  order?: InputMaybe<Array<InputMaybe<AssetOrder>>>
  preview?: InputMaybe<Scalars['Boolean']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<AssetFilter>
}

export type QueryAuthorArgs = {
  id: Scalars['String']['input']
  locale?: InputMaybe<Scalars['String']['input']>
  preview?: InputMaybe<Scalars['Boolean']['input']>
}

export type QueryAuthorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>
  locale?: InputMaybe<Scalars['String']['input']>
  order?: InputMaybe<Array<InputMaybe<AuthorOrder>>>
  preview?: InputMaybe<Scalars['Boolean']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<AuthorFilter>
}

export type QueryAwardArgs = {
  id: Scalars['String']['input']
  locale?: InputMaybe<Scalars['String']['input']>
  preview?: InputMaybe<Scalars['Boolean']['input']>
}

export type QueryAwardCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>
  locale?: InputMaybe<Scalars['String']['input']>
  order?: InputMaybe<Array<InputMaybe<AwardOrder>>>
  preview?: InputMaybe<Scalars['Boolean']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<AwardFilter>
}

export type QueryContactArgs = {
  id: Scalars['String']['input']
  locale?: InputMaybe<Scalars['String']['input']>
  preview?: InputMaybe<Scalars['Boolean']['input']>
}

export type QueryContactCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>
  locale?: InputMaybe<Scalars['String']['input']>
  order?: InputMaybe<Array<InputMaybe<ContactOrder>>>
  preview?: InputMaybe<Scalars['Boolean']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ContactFilter>
}

export type QueryEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>
  locale?: InputMaybe<Scalars['String']['input']>
  order?: InputMaybe<Array<InputMaybe<EntryOrder>>>
  preview?: InputMaybe<Scalars['Boolean']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<EntryFilter>
}

export type QueryWorkExperienceArgs = {
  id: Scalars['String']['input']
  locale?: InputMaybe<Scalars['String']['input']>
  preview?: InputMaybe<Scalars['Boolean']['input']>
}

export type QueryWorkExperienceCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>
  locale?: InputMaybe<Scalars['String']['input']>
  order?: InputMaybe<Array<InputMaybe<WorkExperienceOrder>>>
  preview?: InputMaybe<Scalars['Boolean']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<WorkExperienceFilter>
}

export type Sys = {
  __typename?: 'Sys'
  environmentId: Scalars['String']['output']
  firstPublishedAt?: Maybe<Scalars['DateTime']['output']>
  id: Scalars['String']['output']
  publishedAt?: Maybe<Scalars['DateTime']['output']>
  publishedVersion?: Maybe<Scalars['Int']['output']>
  spaceId: Scalars['String']['output']
}

export type SysFilter = {
  firstPublishedAt?: InputMaybe<Scalars['DateTime']['input']>
  firstPublishedAt_exists?: InputMaybe<Scalars['Boolean']['input']>
  firstPublishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  firstPublishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  firstPublishedAt_in?: InputMaybe<
    Array<InputMaybe<Scalars['DateTime']['input']>>
  >
  firstPublishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  firstPublishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  firstPublishedAt_not?: InputMaybe<Scalars['DateTime']['input']>
  firstPublishedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['DateTime']['input']>>
  >
  id?: InputMaybe<Scalars['String']['input']>
  id_contains?: InputMaybe<Scalars['String']['input']>
  id_exists?: InputMaybe<Scalars['Boolean']['input']>
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  id_not?: InputMaybe<Scalars['String']['input']>
  id_not_contains?: InputMaybe<Scalars['String']['input']>
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>
  publishedAt_exists?: InputMaybe<Scalars['Boolean']['input']>
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>
  publishedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['DateTime']['input']>>
  >
  publishedVersion?: InputMaybe<Scalars['Float']['input']>
  publishedVersion_exists?: InputMaybe<Scalars['Boolean']['input']>
  publishedVersion_gt?: InputMaybe<Scalars['Float']['input']>
  publishedVersion_gte?: InputMaybe<Scalars['Float']['input']>
  publishedVersion_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>
  publishedVersion_lt?: InputMaybe<Scalars['Float']['input']>
  publishedVersion_lte?: InputMaybe<Scalars['Float']['input']>
  publishedVersion_not?: InputMaybe<Scalars['Float']['input']>
  publishedVersion_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['Float']['input']>>
  >
}

/** [See type definition](https://app.contentful.com/spaces/{spaceId}/content_types/workExperience) */
export type WorkExperience = Entry & {
  __typename?: 'WorkExperience'
  contentfulMetadata: ContentfulMetadata
  endDate?: Maybe<Scalars['DateTime']['output']>
  linkedFrom?: Maybe<WorkExperienceLinkingCollections>
  organization?: Maybe<Scalars['String']['output']>
  role?: Maybe<Scalars['String']['output']>
  startDate?: Maybe<Scalars['DateTime']['output']>
  sys: Sys
  user?: Maybe<Author>
}

/** [See type definition](https://app.contentful.com/spaces/{spaceId}/content_types/workExperience) */
export type WorkExperienceEndDateArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
}

/** [See type definition](https://app.contentful.com/spaces/{spaceId}/content_types/workExperience) */
export type WorkExperienceLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

/** [See type definition](https://app.contentful.com/spaces/{spaceId}/content_types/workExperience) */
export type WorkExperienceOrganizationArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
}

/** [See type definition](https://app.contentful.com/spaces/{spaceId}/content_types/workExperience) */
export type WorkExperienceRoleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
}

/** [See type definition](https://app.contentful.com/spaces/{spaceId}/content_types/workExperience) */
export type WorkExperienceStartDateArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
}

/** [See type definition](https://app.contentful.com/spaces/{spaceId}/content_types/workExperience) */
export type WorkExperienceUserArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
  preview?: InputMaybe<Scalars['Boolean']['input']>
}

export type WorkExperienceCollection = {
  __typename?: 'WorkExperienceCollection'
  items: Array<Maybe<WorkExperience>>
  limit: Scalars['Int']['output']
  skip: Scalars['Int']['output']
  total: Scalars['Int']['output']
}

export type WorkExperienceFilter = {
  AND?: InputMaybe<Array<InputMaybe<WorkExperienceFilter>>>
  OR?: InputMaybe<Array<InputMaybe<WorkExperienceFilter>>>
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>
  endDate?: InputMaybe<Scalars['DateTime']['input']>
  endDate_exists?: InputMaybe<Scalars['Boolean']['input']>
  endDate_gt?: InputMaybe<Scalars['DateTime']['input']>
  endDate_gte?: InputMaybe<Scalars['DateTime']['input']>
  endDate_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  endDate_lt?: InputMaybe<Scalars['DateTime']['input']>
  endDate_lte?: InputMaybe<Scalars['DateTime']['input']>
  endDate_not?: InputMaybe<Scalars['DateTime']['input']>
  endDate_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  organization?: InputMaybe<Scalars['String']['input']>
  organization_contains?: InputMaybe<Scalars['String']['input']>
  organization_exists?: InputMaybe<Scalars['Boolean']['input']>
  organization_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  organization_not?: InputMaybe<Scalars['String']['input']>
  organization_not_contains?: InputMaybe<Scalars['String']['input']>
  organization_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  role?: InputMaybe<Scalars['String']['input']>
  role_contains?: InputMaybe<Scalars['String']['input']>
  role_exists?: InputMaybe<Scalars['Boolean']['input']>
  role_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  role_not?: InputMaybe<Scalars['String']['input']>
  role_not_contains?: InputMaybe<Scalars['String']['input']>
  role_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  startDate?: InputMaybe<Scalars['DateTime']['input']>
  startDate_exists?: InputMaybe<Scalars['Boolean']['input']>
  startDate_gt?: InputMaybe<Scalars['DateTime']['input']>
  startDate_gte?: InputMaybe<Scalars['DateTime']['input']>
  startDate_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  startDate_lt?: InputMaybe<Scalars['DateTime']['input']>
  startDate_lte?: InputMaybe<Scalars['DateTime']['input']>
  startDate_not?: InputMaybe<Scalars['DateTime']['input']>
  startDate_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  sys?: InputMaybe<SysFilter>
  user?: InputMaybe<CfAuthorNestedFilter>
  user_exists?: InputMaybe<Scalars['Boolean']['input']>
}

export type WorkExperienceLinkingCollections = {
  __typename?: 'WorkExperienceLinkingCollections'
  entryCollection?: Maybe<EntryCollection>
}

export type WorkExperienceLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>
  locale?: InputMaybe<Scalars['String']['input']>
  preview?: InputMaybe<Scalars['Boolean']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
}

export enum WorkExperienceOrder {
  EndDateAsc = 'endDate_ASC',
  EndDateDesc = 'endDate_DESC',
  OrganizationAsc = 'organization_ASC',
  OrganizationDesc = 'organization_DESC',
  RoleAsc = 'role_ASC',
  RoleDesc = 'role_DESC',
  StartDateAsc = 'startDate_ASC',
  StartDateDesc = 'startDate_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export type CfAchievementCategoryNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfAchievementCategoryNestedFilter>>>
  OR?: InputMaybe<Array<InputMaybe<CfAchievementCategoryNestedFilter>>>
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>
  name?: InputMaybe<Scalars['String']['input']>
  name_contains?: InputMaybe<Scalars['String']['input']>
  name_exists?: InputMaybe<Scalars['Boolean']['input']>
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  name_not?: InputMaybe<Scalars['String']['input']>
  name_not_contains?: InputMaybe<Scalars['String']['input']>
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  orderNumber?: InputMaybe<Scalars['Int']['input']>
  orderNumber_exists?: InputMaybe<Scalars['Boolean']['input']>
  orderNumber_gt?: InputMaybe<Scalars['Int']['input']>
  orderNumber_gte?: InputMaybe<Scalars['Int']['input']>
  orderNumber_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>
  orderNumber_lt?: InputMaybe<Scalars['Int']['input']>
  orderNumber_lte?: InputMaybe<Scalars['Int']['input']>
  orderNumber_not?: InputMaybe<Scalars['Int']['input']>
  orderNumber_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>
  sys?: InputMaybe<SysFilter>
}

export type CfAuthorNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfAuthorNestedFilter>>>
  OR?: InputMaybe<Array<InputMaybe<CfAuthorNestedFilter>>>
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>
  description?: InputMaybe<Scalars['String']['input']>
  description_contains?: InputMaybe<Scalars['String']['input']>
  description_exists?: InputMaybe<Scalars['Boolean']['input']>
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  description_not?: InputMaybe<Scalars['String']['input']>
  description_not_contains?: InputMaybe<Scalars['String']['input']>
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  image_exists?: InputMaybe<Scalars['Boolean']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  name_contains?: InputMaybe<Scalars['String']['input']>
  name_exists?: InputMaybe<Scalars['Boolean']['input']>
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  name_not?: InputMaybe<Scalars['String']['input']>
  name_not_contains?: InputMaybe<Scalars['String']['input']>
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  nickname?: InputMaybe<Scalars['String']['input']>
  nickname_contains?: InputMaybe<Scalars['String']['input']>
  nickname_exists?: InputMaybe<Scalars['Boolean']['input']>
  nickname_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  nickname_not?: InputMaybe<Scalars['String']['input']>
  nickname_not_contains?: InputMaybe<Scalars['String']['input']>
  nickname_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  sys?: InputMaybe<SysFilter>
  underline?: InputMaybe<Scalars['Boolean']['input']>
  underline_exists?: InputMaybe<Scalars['Boolean']['input']>
  underline_not?: InputMaybe<Scalars['Boolean']['input']>
}

export type LocaleQueryVariables = Exact<{ [key: string]: never }>

export type LocaleQuery = { __typename?: 'Query'; locale: string }

export type TopQueryVariables = Exact<{
  preview?: InputMaybe<Scalars['Boolean']['input']>
  locale: Scalars['String']['input']
  authorId: Scalars['String']['input']
}>

export type TopQuery = {
  __typename?: 'Query'
  me?: {
    __typename?: 'Author'
    name?: string | null
    nickname?: string | null
    description?: string | null
    image?: { __typename?: 'Asset'; url?: string | null } | null
  } | null
  contacts?: {
    __typename?: 'ContactCollection'
    items: Array<{
      __typename?: 'Contact'
      media?: string | null
      account?: string | null
      link?: string | null
    } | null>
  } | null
  workExperiences?: {
    __typename?: 'WorkExperienceCollection'
    items: Array<{
      __typename?: 'WorkExperience'
      organization?: string | null
      role?: string | null
      startDate?: string | null
      endDate?: string | null
    } | null>
  } | null
  achievements?: {
    __typename?: 'AchievementCollection'
    items: Array<{
      __typename?: 'Achievement'
      title?: string | null
      link?: string | null
      proceeding?: string | null
      publishedDate?: string | null
      startPage?: number | null
      endPage?: number | null
      sessionId?: string | null
      note?: string | null
      category?: {
        __typename?: 'AchievementCategory'
        orderNumber?: number | null
        nameJP?: string | null
        nameUS?: string | null
      } | null
      authorsCollection?: {
        __typename?: 'AchievementAuthorsCollection'
        items: Array<{
          __typename?: 'Author'
          underline?: boolean | null
          nameJP?: string | null
          nameUS?: string | null
        } | null>
      } | null
    } | null>
  } | null
  awards?: {
    __typename?: 'AwardCollection'
    items: Array<{
      __typename?: 'Award'
      name?: string | null
      publication?: string | null
      awardDate?: string | null
    } | null>
  } | null
  academicBackgroundCollection?: {
    __typename?: 'AcademicBackgroundCollection'
    items: Array<{
      __typename?: 'AcademicBackground'
      organization?: string | null
      startDate?: string | null
      endDate?: string | null
    } | null>
  } | null
}

export const LocaleDocument = gql`
    query Locale {
  locale @client
}
    `

/**
 * __useLocaleQuery__
 *
 * To run a query within a React component, call `useLocaleQuery` and pass it any options that fit your needs.
 * When your component renders, `useLocaleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLocaleQuery({
 *   variables: {
 *   },
 * });
 */
export function useLocaleQuery(
  baseOptions?: Apollo.QueryHookOptions<LocaleQuery, LocaleQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<LocaleQuery, LocaleQueryVariables>(
    LocaleDocument,
    options,
  )
}
export function useLocaleLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<LocaleQuery, LocaleQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<LocaleQuery, LocaleQueryVariables>(
    LocaleDocument,
    options,
  )
}
// @ts-ignore
export function useLocaleSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    LocaleQuery,
    LocaleQueryVariables
  >,
): Apollo.UseSuspenseQueryResult<LocaleQuery, LocaleQueryVariables>
export function useLocaleSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<LocaleQuery, LocaleQueryVariables>,
): Apollo.UseSuspenseQueryResult<LocaleQuery | undefined, LocaleQueryVariables>
export function useLocaleSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<LocaleQuery, LocaleQueryVariables>,
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions }
  return Apollo.useSuspenseQuery<LocaleQuery, LocaleQueryVariables>(
    LocaleDocument,
    options,
  )
}
export type LocaleQueryHookResult = ReturnType<typeof useLocaleQuery>
export type LocaleLazyQueryHookResult = ReturnType<typeof useLocaleLazyQuery>
export type LocaleSuspenseQueryHookResult = ReturnType<
  typeof useLocaleSuspenseQuery
>
export type LocaleQueryResult = Apollo.QueryResult<
  LocaleQuery,
  LocaleQueryVariables
>
export const TopDocument = gql`
    query Top($preview: Boolean, $locale: String!, $authorId: String!) {
  me: author(id: $authorId, preview: $preview, locale: $locale) {
    name
    nickname
    description
    image(preview: $preview, locale: $locale) {
      url
    }
  }
  contacts: contactCollection(
    preview: $preview
    where: {user: {sys: {id: $authorId}}}
    order: media_DESC
  ) {
    items {
      media
      account
      link
    }
  }
  workExperiences: workExperienceCollection(
    preview: $preview
    locale: $locale
    order: startDate_DESC
    where: {user: {sys: {id: $authorId}}}
  ) {
    items {
      organization
      role
      startDate
      endDate
    }
  }
  achievements: achievementCollection(
    preview: $preview
    locale: $locale
    order: publishedDate_DESC
    where: {category: {name_exists: true}}
  ) {
    items {
      title
      link
      category {
        nameJP: name(locale: "ja-JP")
        nameUS: name(locale: "en-US")
        orderNumber
      }
      authorsCollection {
        items {
          nameJP: name(locale: "ja-JP")
          nameUS: name(locale: "en-US")
          underline
        }
      }
      proceeding
      publishedDate
      startPage
      endPage
      sessionId
      note
    }
  }
  awards: awardCollection(
    preview: $preview
    locale: $locale
    order: awardDate_DESC
    where: {user: {sys: {id: $authorId}}}
  ) {
    items {
      name
      publication
      awardDate
    }
  }
  academicBackgroundCollection(
    preview: $preview
    locale: $locale
    where: {user: {sys: {id: $authorId}}}
    order: startDate_DESC
  ) {
    items {
      organization
      startDate
      endDate
    }
  }
}
    `

/**
 * __useTopQuery__
 *
 * To run a query within a React component, call `useTopQuery` and pass it any options that fit your needs.
 * When your component renders, `useTopQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTopQuery({
 *   variables: {
 *      preview: // value for 'preview'
 *      locale: // value for 'locale'
 *      authorId: // value for 'authorId'
 *   },
 * });
 */
export function useTopQuery(
  baseOptions: Apollo.QueryHookOptions<TopQuery, TopQueryVariables> &
    ({ variables: TopQueryVariables; skip?: boolean } | { skip: boolean }),
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<TopQuery, TopQueryVariables>(TopDocument, options)
}
export function useTopLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<TopQuery, TopQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<TopQuery, TopQueryVariables>(TopDocument, options)
}
// @ts-ignore
export function useTopSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<TopQuery, TopQueryVariables>,
): Apollo.UseSuspenseQueryResult<TopQuery, TopQueryVariables>
export function useTopSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<TopQuery, TopQueryVariables>,
): Apollo.UseSuspenseQueryResult<TopQuery | undefined, TopQueryVariables>
export function useTopSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<TopQuery, TopQueryVariables>,
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions }
  return Apollo.useSuspenseQuery<TopQuery, TopQueryVariables>(
    TopDocument,
    options,
  )
}
export type TopQueryHookResult = ReturnType<typeof useTopQuery>
export type TopLazyQueryHookResult = ReturnType<typeof useTopLazyQuery>
export type TopSuspenseQueryHookResult = ReturnType<typeof useTopSuspenseQuery>
export type TopQueryResult = Apollo.QueryResult<TopQuery, TopQueryVariables>
