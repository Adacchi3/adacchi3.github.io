import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> }
const defaultOptions = {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  /**
   * A date-time string at UTC, such as 2007-12-03T10:15:30Z,
   *     compliant with the 'date-time' format outlined in section 5.6 of
   *     the RFC 3339 profile of the ISO 8601 standard for representation
   *     of dates and times using the Gregorian calendar.
   */
  DateTime: string
  /** The 'Dimension' type represents dimensions as whole numeric values between `1` and `4000`. */
  Dimension: number
  /** The 'HexColor' type represents color in `rgb:ffffff` string format. */
  HexColor: string
  /** The 'Quality' type represents quality as whole numeric values between `1` and `100`. */
  Quality: number
}

/** [See type definition](https://app.contentful.com/spaces/{spaceId}/content_types/achievement) */
export type Achievement = Entry & {
  __typename?: 'Achievement'
  sys: Sys
  contentfulMetadata: ContentfulMetadata
  linkedFrom?: Maybe<AchievementLinkingCollections>
  title?: Maybe<Scalars['String']>
  link?: Maybe<Scalars['String']>
  category?: Maybe<AchievementCategory>
  proceeding?: Maybe<Scalars['String']>
  startPage?: Maybe<Scalars['Int']>
  endPage?: Maybe<Scalars['Int']>
  publishedDate?: Maybe<Scalars['DateTime']>
  sessionId?: Maybe<Scalars['String']>
  authorsCollection?: Maybe<AchievementAuthorsCollection>
  note?: Maybe<Scalars['String']>
}

/** [See type definition](https://app.contentful.com/spaces/{spaceId}/content_types/achievement) */
export type AchievementLinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>
}

/** [See type definition](https://app.contentful.com/spaces/{spaceId}/content_types/achievement) */
export type AchievementTitleArgs = {
  locale?: Maybe<Scalars['String']>
}

/** [See type definition](https://app.contentful.com/spaces/{spaceId}/content_types/achievement) */
export type AchievementLinkArgs = {
  locale?: Maybe<Scalars['String']>
}

/** [See type definition](https://app.contentful.com/spaces/{spaceId}/content_types/achievement) */
export type AchievementCategoryArgs = {
  preview?: Maybe<Scalars['Boolean']>
  locale?: Maybe<Scalars['String']>
}

/** [See type definition](https://app.contentful.com/spaces/{spaceId}/content_types/achievement) */
export type AchievementProceedingArgs = {
  locale?: Maybe<Scalars['String']>
}

/** [See type definition](https://app.contentful.com/spaces/{spaceId}/content_types/achievement) */
export type AchievementStartPageArgs = {
  locale?: Maybe<Scalars['String']>
}

/** [See type definition](https://app.contentful.com/spaces/{spaceId}/content_types/achievement) */
export type AchievementEndPageArgs = {
  locale?: Maybe<Scalars['String']>
}

/** [See type definition](https://app.contentful.com/spaces/{spaceId}/content_types/achievement) */
export type AchievementPublishedDateArgs = {
  locale?: Maybe<Scalars['String']>
}

/** [See type definition](https://app.contentful.com/spaces/{spaceId}/content_types/achievement) */
export type AchievementSessionIdArgs = {
  locale?: Maybe<Scalars['String']>
}

/** [See type definition](https://app.contentful.com/spaces/{spaceId}/content_types/achievement) */
export type AchievementAuthorsCollectionArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  preview?: Maybe<Scalars['Boolean']>
  locale?: Maybe<Scalars['String']>
}

/** [See type definition](https://app.contentful.com/spaces/{spaceId}/content_types/achievement) */
export type AchievementNoteArgs = {
  locale?: Maybe<Scalars['String']>
}

export type AchievementAuthorsCollection = {
  __typename?: 'AchievementAuthorsCollection'
  total: Scalars['Int']
  skip: Scalars['Int']
  limit: Scalars['Int']
  items: Array<Maybe<Author>>
}

/** [See type definition](https://app.contentful.com/spaces/{spaceId}/content_types/achievementCategory) */
export type AchievementCategory = Entry & {
  __typename?: 'AchievementCategory'
  sys: Sys
  contentfulMetadata: ContentfulMetadata
  linkedFrom?: Maybe<AchievementCategoryLinkingCollections>
  name?: Maybe<Scalars['String']>
}

/** [See type definition](https://app.contentful.com/spaces/{spaceId}/content_types/achievementCategory) */
export type AchievementCategoryLinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>
}

/** [See type definition](https://app.contentful.com/spaces/{spaceId}/content_types/achievementCategory) */
export type AchievementCategoryNameArgs = {
  locale?: Maybe<Scalars['String']>
}

export type AchievementCategoryCollection = {
  __typename?: 'AchievementCategoryCollection'
  total: Scalars['Int']
  skip: Scalars['Int']
  limit: Scalars['Int']
  items: Array<Maybe<AchievementCategory>>
}

export type AchievementCategoryFilter = {
  sys?: Maybe<SysFilter>
  contentfulMetadata?: Maybe<ContentfulMetadataFilter>
  name_exists?: Maybe<Scalars['Boolean']>
  name?: Maybe<Scalars['String']>
  name_not?: Maybe<Scalars['String']>
  name_in?: Maybe<Array<Maybe<Scalars['String']>>>
  name_not_in?: Maybe<Array<Maybe<Scalars['String']>>>
  name_contains?: Maybe<Scalars['String']>
  name_not_contains?: Maybe<Scalars['String']>
  OR?: Maybe<Array<Maybe<AchievementCategoryFilter>>>
  AND?: Maybe<Array<Maybe<AchievementCategoryFilter>>>
}

export type AchievementCategoryLinkingCollections = {
  __typename?: 'AchievementCategoryLinkingCollections'
  entryCollection?: Maybe<EntryCollection>
  achievementCollection?: Maybe<AchievementCollection>
}

export type AchievementCategoryLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  preview?: Maybe<Scalars['Boolean']>
  locale?: Maybe<Scalars['String']>
}

export type AchievementCategoryLinkingCollectionsAchievementCollectionArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  preview?: Maybe<Scalars['Boolean']>
  locale?: Maybe<Scalars['String']>
}

export enum AchievementCategoryOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export type AchievementCollection = {
  __typename?: 'AchievementCollection'
  total: Scalars['Int']
  skip: Scalars['Int']
  limit: Scalars['Int']
  items: Array<Maybe<Achievement>>
}

export type AchievementFilter = {
  category?: Maybe<CfAchievementCategoryNestedFilter>
  sys?: Maybe<SysFilter>
  contentfulMetadata?: Maybe<ContentfulMetadataFilter>
  title_exists?: Maybe<Scalars['Boolean']>
  title?: Maybe<Scalars['String']>
  title_not?: Maybe<Scalars['String']>
  title_in?: Maybe<Array<Maybe<Scalars['String']>>>
  title_not_in?: Maybe<Array<Maybe<Scalars['String']>>>
  title_contains?: Maybe<Scalars['String']>
  title_not_contains?: Maybe<Scalars['String']>
  link_exists?: Maybe<Scalars['Boolean']>
  link?: Maybe<Scalars['String']>
  link_not?: Maybe<Scalars['String']>
  link_in?: Maybe<Array<Maybe<Scalars['String']>>>
  link_not_in?: Maybe<Array<Maybe<Scalars['String']>>>
  link_contains?: Maybe<Scalars['String']>
  link_not_contains?: Maybe<Scalars['String']>
  category_exists?: Maybe<Scalars['Boolean']>
  proceeding_exists?: Maybe<Scalars['Boolean']>
  proceeding?: Maybe<Scalars['String']>
  proceeding_not?: Maybe<Scalars['String']>
  proceeding_in?: Maybe<Array<Maybe<Scalars['String']>>>
  proceeding_not_in?: Maybe<Array<Maybe<Scalars['String']>>>
  proceeding_contains?: Maybe<Scalars['String']>
  proceeding_not_contains?: Maybe<Scalars['String']>
  startPage_exists?: Maybe<Scalars['Boolean']>
  startPage?: Maybe<Scalars['Int']>
  startPage_not?: Maybe<Scalars['Int']>
  startPage_in?: Maybe<Array<Maybe<Scalars['Int']>>>
  startPage_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>
  startPage_gt?: Maybe<Scalars['Int']>
  startPage_gte?: Maybe<Scalars['Int']>
  startPage_lt?: Maybe<Scalars['Int']>
  startPage_lte?: Maybe<Scalars['Int']>
  endPage_exists?: Maybe<Scalars['Boolean']>
  endPage?: Maybe<Scalars['Int']>
  endPage_not?: Maybe<Scalars['Int']>
  endPage_in?: Maybe<Array<Maybe<Scalars['Int']>>>
  endPage_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>
  endPage_gt?: Maybe<Scalars['Int']>
  endPage_gte?: Maybe<Scalars['Int']>
  endPage_lt?: Maybe<Scalars['Int']>
  endPage_lte?: Maybe<Scalars['Int']>
  publishedDate_exists?: Maybe<Scalars['Boolean']>
  publishedDate?: Maybe<Scalars['DateTime']>
  publishedDate_not?: Maybe<Scalars['DateTime']>
  publishedDate_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>
  publishedDate_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>
  publishedDate_gt?: Maybe<Scalars['DateTime']>
  publishedDate_gte?: Maybe<Scalars['DateTime']>
  publishedDate_lt?: Maybe<Scalars['DateTime']>
  publishedDate_lte?: Maybe<Scalars['DateTime']>
  sessionId_exists?: Maybe<Scalars['Boolean']>
  sessionId?: Maybe<Scalars['String']>
  sessionId_not?: Maybe<Scalars['String']>
  sessionId_in?: Maybe<Array<Maybe<Scalars['String']>>>
  sessionId_not_in?: Maybe<Array<Maybe<Scalars['String']>>>
  sessionId_contains?: Maybe<Scalars['String']>
  sessionId_not_contains?: Maybe<Scalars['String']>
  authorsCollection_exists?: Maybe<Scalars['Boolean']>
  note_exists?: Maybe<Scalars['Boolean']>
  note?: Maybe<Scalars['String']>
  note_not?: Maybe<Scalars['String']>
  note_in?: Maybe<Array<Maybe<Scalars['String']>>>
  note_not_in?: Maybe<Array<Maybe<Scalars['String']>>>
  note_contains?: Maybe<Scalars['String']>
  note_not_contains?: Maybe<Scalars['String']>
  OR?: Maybe<Array<Maybe<AchievementFilter>>>
  AND?: Maybe<Array<Maybe<AchievementFilter>>>
}

export type AchievementLinkingCollections = {
  __typename?: 'AchievementLinkingCollections'
  entryCollection?: Maybe<EntryCollection>
}

export type AchievementLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  preview?: Maybe<Scalars['Boolean']>
  locale?: Maybe<Scalars['String']>
}

export enum AchievementOrder {
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  LinkAsc = 'link_ASC',
  LinkDesc = 'link_DESC',
  StartPageAsc = 'startPage_ASC',
  StartPageDesc = 'startPage_DESC',
  EndPageAsc = 'endPage_ASC',
  EndPageDesc = 'endPage_DESC',
  PublishedDateAsc = 'publishedDate_ASC',
  PublishedDateDesc = 'publishedDate_DESC',
  SessionIdAsc = 'sessionId_ASC',
  SessionIdDesc = 'sessionId_DESC',
  NoteAsc = 'note_ASC',
  NoteDesc = 'note_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

/** Represents a binary file in a space. An asset can be any file type. */
export type Asset = {
  __typename?: 'Asset'
  sys: Sys
  contentfulMetadata: ContentfulMetadata
  title?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  contentType?: Maybe<Scalars['String']>
  fileName?: Maybe<Scalars['String']>
  size?: Maybe<Scalars['Int']>
  url?: Maybe<Scalars['String']>
  width?: Maybe<Scalars['Int']>
  height?: Maybe<Scalars['Int']>
  linkedFrom?: Maybe<AssetLinkingCollections>
}

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetUrlArgs = {
  transform?: Maybe<ImageTransformOptions>
}

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetLinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>
}

export type AssetCollection = {
  __typename?: 'AssetCollection'
  total: Scalars['Int']
  skip: Scalars['Int']
  limit: Scalars['Int']
  items: Array<Maybe<Asset>>
}

export type AssetFilter = {
  sys?: Maybe<SysFilter>
  contentfulMetadata?: Maybe<ContentfulMetadataFilter>
  title_exists?: Maybe<Scalars['Boolean']>
  title?: Maybe<Scalars['String']>
  title_not?: Maybe<Scalars['String']>
  title_in?: Maybe<Array<Maybe<Scalars['String']>>>
  title_not_in?: Maybe<Array<Maybe<Scalars['String']>>>
  title_contains?: Maybe<Scalars['String']>
  title_not_contains?: Maybe<Scalars['String']>
  description_exists?: Maybe<Scalars['Boolean']>
  description?: Maybe<Scalars['String']>
  description_not?: Maybe<Scalars['String']>
  description_in?: Maybe<Array<Maybe<Scalars['String']>>>
  description_not_in?: Maybe<Array<Maybe<Scalars['String']>>>
  description_contains?: Maybe<Scalars['String']>
  description_not_contains?: Maybe<Scalars['String']>
  url_exists?: Maybe<Scalars['Boolean']>
  url?: Maybe<Scalars['String']>
  url_not?: Maybe<Scalars['String']>
  url_in?: Maybe<Array<Maybe<Scalars['String']>>>
  url_not_in?: Maybe<Array<Maybe<Scalars['String']>>>
  url_contains?: Maybe<Scalars['String']>
  url_not_contains?: Maybe<Scalars['String']>
  size_exists?: Maybe<Scalars['Boolean']>
  size?: Maybe<Scalars['Int']>
  size_not?: Maybe<Scalars['Int']>
  size_in?: Maybe<Array<Maybe<Scalars['Int']>>>
  size_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>
  size_gt?: Maybe<Scalars['Int']>
  size_gte?: Maybe<Scalars['Int']>
  size_lt?: Maybe<Scalars['Int']>
  size_lte?: Maybe<Scalars['Int']>
  contentType_exists?: Maybe<Scalars['Boolean']>
  contentType?: Maybe<Scalars['String']>
  contentType_not?: Maybe<Scalars['String']>
  contentType_in?: Maybe<Array<Maybe<Scalars['String']>>>
  contentType_not_in?: Maybe<Array<Maybe<Scalars['String']>>>
  contentType_contains?: Maybe<Scalars['String']>
  contentType_not_contains?: Maybe<Scalars['String']>
  fileName_exists?: Maybe<Scalars['Boolean']>
  fileName?: Maybe<Scalars['String']>
  fileName_not?: Maybe<Scalars['String']>
  fileName_in?: Maybe<Array<Maybe<Scalars['String']>>>
  fileName_not_in?: Maybe<Array<Maybe<Scalars['String']>>>
  fileName_contains?: Maybe<Scalars['String']>
  fileName_not_contains?: Maybe<Scalars['String']>
  width_exists?: Maybe<Scalars['Boolean']>
  width?: Maybe<Scalars['Int']>
  width_not?: Maybe<Scalars['Int']>
  width_in?: Maybe<Array<Maybe<Scalars['Int']>>>
  width_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>
  width_gt?: Maybe<Scalars['Int']>
  width_gte?: Maybe<Scalars['Int']>
  width_lt?: Maybe<Scalars['Int']>
  width_lte?: Maybe<Scalars['Int']>
  height_exists?: Maybe<Scalars['Boolean']>
  height?: Maybe<Scalars['Int']>
  height_not?: Maybe<Scalars['Int']>
  height_in?: Maybe<Array<Maybe<Scalars['Int']>>>
  height_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>
  height_gt?: Maybe<Scalars['Int']>
  height_gte?: Maybe<Scalars['Int']>
  height_lt?: Maybe<Scalars['Int']>
  height_lte?: Maybe<Scalars['Int']>
  OR?: Maybe<Array<Maybe<AssetFilter>>>
  AND?: Maybe<Array<Maybe<AssetFilter>>>
}

export type AssetLinkingCollections = {
  __typename?: 'AssetLinkingCollections'
  entryCollection?: Maybe<EntryCollection>
  authorCollection?: Maybe<AuthorCollection>
}

export type AssetLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  preview?: Maybe<Scalars['Boolean']>
  locale?: Maybe<Scalars['String']>
}

export type AssetLinkingCollectionsAuthorCollectionArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  preview?: Maybe<Scalars['Boolean']>
  locale?: Maybe<Scalars['String']>
}

export enum AssetOrder {
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  ContentTypeAsc = 'contentType_ASC',
  ContentTypeDesc = 'contentType_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

/** [See type definition](https://app.contentful.com/spaces/{spaceId}/content_types/author) */
export type Author = Entry & {
  __typename?: 'Author'
  sys: Sys
  contentfulMetadata: ContentfulMetadata
  linkedFrom?: Maybe<AuthorLinkingCollections>
  name?: Maybe<Scalars['String']>
  nickname?: Maybe<Scalars['String']>
  image?: Maybe<Asset>
  underline?: Maybe<Scalars['Boolean']>
  description?: Maybe<Scalars['String']>
}

/** [See type definition](https://app.contentful.com/spaces/{spaceId}/content_types/author) */
export type AuthorLinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>
}

/** [See type definition](https://app.contentful.com/spaces/{spaceId}/content_types/author) */
export type AuthorNameArgs = {
  locale?: Maybe<Scalars['String']>
}

/** [See type definition](https://app.contentful.com/spaces/{spaceId}/content_types/author) */
export type AuthorNicknameArgs = {
  locale?: Maybe<Scalars['String']>
}

/** [See type definition](https://app.contentful.com/spaces/{spaceId}/content_types/author) */
export type AuthorImageArgs = {
  preview?: Maybe<Scalars['Boolean']>
  locale?: Maybe<Scalars['String']>
}

/** [See type definition](https://app.contentful.com/spaces/{spaceId}/content_types/author) */
export type AuthorUnderlineArgs = {
  locale?: Maybe<Scalars['String']>
}

/** [See type definition](https://app.contentful.com/spaces/{spaceId}/content_types/author) */
export type AuthorDescriptionArgs = {
  locale?: Maybe<Scalars['String']>
}

export type AuthorCollection = {
  __typename?: 'AuthorCollection'
  total: Scalars['Int']
  skip: Scalars['Int']
  limit: Scalars['Int']
  items: Array<Maybe<Author>>
}

export type AuthorFilter = {
  sys?: Maybe<SysFilter>
  contentfulMetadata?: Maybe<ContentfulMetadataFilter>
  name_exists?: Maybe<Scalars['Boolean']>
  name?: Maybe<Scalars['String']>
  name_not?: Maybe<Scalars['String']>
  name_in?: Maybe<Array<Maybe<Scalars['String']>>>
  name_not_in?: Maybe<Array<Maybe<Scalars['String']>>>
  name_contains?: Maybe<Scalars['String']>
  name_not_contains?: Maybe<Scalars['String']>
  nickname_exists?: Maybe<Scalars['Boolean']>
  nickname?: Maybe<Scalars['String']>
  nickname_not?: Maybe<Scalars['String']>
  nickname_in?: Maybe<Array<Maybe<Scalars['String']>>>
  nickname_not_in?: Maybe<Array<Maybe<Scalars['String']>>>
  nickname_contains?: Maybe<Scalars['String']>
  nickname_not_contains?: Maybe<Scalars['String']>
  image_exists?: Maybe<Scalars['Boolean']>
  underline_exists?: Maybe<Scalars['Boolean']>
  underline?: Maybe<Scalars['Boolean']>
  underline_not?: Maybe<Scalars['Boolean']>
  description_exists?: Maybe<Scalars['Boolean']>
  description?: Maybe<Scalars['String']>
  description_not?: Maybe<Scalars['String']>
  description_in?: Maybe<Array<Maybe<Scalars['String']>>>
  description_not_in?: Maybe<Array<Maybe<Scalars['String']>>>
  description_contains?: Maybe<Scalars['String']>
  description_not_contains?: Maybe<Scalars['String']>
  OR?: Maybe<Array<Maybe<AuthorFilter>>>
  AND?: Maybe<Array<Maybe<AuthorFilter>>>
}

export type AuthorLinkingCollections = {
  __typename?: 'AuthorLinkingCollections'
  entryCollection?: Maybe<EntryCollection>
  contactCollection?: Maybe<ContactCollection>
  achievementCollection?: Maybe<AchievementCollection>
}

export type AuthorLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  preview?: Maybe<Scalars['Boolean']>
  locale?: Maybe<Scalars['String']>
}

export type AuthorLinkingCollectionsContactCollectionArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  preview?: Maybe<Scalars['Boolean']>
  locale?: Maybe<Scalars['String']>
}

export type AuthorLinkingCollectionsAchievementCollectionArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  preview?: Maybe<Scalars['Boolean']>
  locale?: Maybe<Scalars['String']>
}

export enum AuthorOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  NicknameAsc = 'nickname_ASC',
  NicknameDesc = 'nickname_DESC',
  UnderlineAsc = 'underline_ASC',
  UnderlineDesc = 'underline_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

/** [See type definition](https://app.contentful.com/spaces/{spaceId}/content_types/award) */
export type Award = Entry & {
  __typename?: 'Award'
  sys: Sys
  contentfulMetadata: ContentfulMetadata
  linkedFrom?: Maybe<AwardLinkingCollections>
  name?: Maybe<Scalars['String']>
  publication?: Maybe<Scalars['String']>
  awardDate?: Maybe<Scalars['DateTime']>
}

/** [See type definition](https://app.contentful.com/spaces/{spaceId}/content_types/award) */
export type AwardLinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>
}

/** [See type definition](https://app.contentful.com/spaces/{spaceId}/content_types/award) */
export type AwardNameArgs = {
  locale?: Maybe<Scalars['String']>
}

/** [See type definition](https://app.contentful.com/spaces/{spaceId}/content_types/award) */
export type AwardPublicationArgs = {
  locale?: Maybe<Scalars['String']>
}

/** [See type definition](https://app.contentful.com/spaces/{spaceId}/content_types/award) */
export type AwardAwardDateArgs = {
  locale?: Maybe<Scalars['String']>
}

export type AwardCollection = {
  __typename?: 'AwardCollection'
  total: Scalars['Int']
  skip: Scalars['Int']
  limit: Scalars['Int']
  items: Array<Maybe<Award>>
}

export type AwardFilter = {
  sys?: Maybe<SysFilter>
  contentfulMetadata?: Maybe<ContentfulMetadataFilter>
  name_exists?: Maybe<Scalars['Boolean']>
  name?: Maybe<Scalars['String']>
  name_not?: Maybe<Scalars['String']>
  name_in?: Maybe<Array<Maybe<Scalars['String']>>>
  name_not_in?: Maybe<Array<Maybe<Scalars['String']>>>
  name_contains?: Maybe<Scalars['String']>
  name_not_contains?: Maybe<Scalars['String']>
  publication_exists?: Maybe<Scalars['Boolean']>
  publication?: Maybe<Scalars['String']>
  publication_not?: Maybe<Scalars['String']>
  publication_in?: Maybe<Array<Maybe<Scalars['String']>>>
  publication_not_in?: Maybe<Array<Maybe<Scalars['String']>>>
  publication_contains?: Maybe<Scalars['String']>
  publication_not_contains?: Maybe<Scalars['String']>
  awardDate_exists?: Maybe<Scalars['Boolean']>
  awardDate?: Maybe<Scalars['DateTime']>
  awardDate_not?: Maybe<Scalars['DateTime']>
  awardDate_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>
  awardDate_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>
  awardDate_gt?: Maybe<Scalars['DateTime']>
  awardDate_gte?: Maybe<Scalars['DateTime']>
  awardDate_lt?: Maybe<Scalars['DateTime']>
  awardDate_lte?: Maybe<Scalars['DateTime']>
  OR?: Maybe<Array<Maybe<AwardFilter>>>
  AND?: Maybe<Array<Maybe<AwardFilter>>>
}

export type AwardLinkingCollections = {
  __typename?: 'AwardLinkingCollections'
  entryCollection?: Maybe<EntryCollection>
}

export type AwardLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  preview?: Maybe<Scalars['Boolean']>
  locale?: Maybe<Scalars['String']>
}

export enum AwardOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PublicationAsc = 'publication_ASC',
  PublicationDesc = 'publication_DESC',
  AwardDateAsc = 'awardDate_ASC',
  AwardDateDesc = 'awardDate_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

/** [See type definition](https://app.contentful.com/spaces/{spaceId}/content_types/contact) */
export type Contact = Entry & {
  __typename?: 'Contact'
  sys: Sys
  contentfulMetadata: ContentfulMetadata
  linkedFrom?: Maybe<ContactLinkingCollections>
  media?: Maybe<Scalars['String']>
  account?: Maybe<Scalars['String']>
  link?: Maybe<Scalars['String']>
  user?: Maybe<Author>
}

/** [See type definition](https://app.contentful.com/spaces/{spaceId}/content_types/contact) */
export type ContactLinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>
}

/** [See type definition](https://app.contentful.com/spaces/{spaceId}/content_types/contact) */
export type ContactMediaArgs = {
  locale?: Maybe<Scalars['String']>
}

/** [See type definition](https://app.contentful.com/spaces/{spaceId}/content_types/contact) */
export type ContactAccountArgs = {
  locale?: Maybe<Scalars['String']>
}

/** [See type definition](https://app.contentful.com/spaces/{spaceId}/content_types/contact) */
export type ContactLinkArgs = {
  locale?: Maybe<Scalars['String']>
}

/** [See type definition](https://app.contentful.com/spaces/{spaceId}/content_types/contact) */
export type ContactUserArgs = {
  preview?: Maybe<Scalars['Boolean']>
  locale?: Maybe<Scalars['String']>
}

export type ContactCollection = {
  __typename?: 'ContactCollection'
  total: Scalars['Int']
  skip: Scalars['Int']
  limit: Scalars['Int']
  items: Array<Maybe<Contact>>
}

export type ContactFilter = {
  user?: Maybe<CfAuthorNestedFilter>
  sys?: Maybe<SysFilter>
  contentfulMetadata?: Maybe<ContentfulMetadataFilter>
  media_exists?: Maybe<Scalars['Boolean']>
  media?: Maybe<Scalars['String']>
  media_not?: Maybe<Scalars['String']>
  media_in?: Maybe<Array<Maybe<Scalars['String']>>>
  media_not_in?: Maybe<Array<Maybe<Scalars['String']>>>
  media_contains?: Maybe<Scalars['String']>
  media_not_contains?: Maybe<Scalars['String']>
  account_exists?: Maybe<Scalars['Boolean']>
  account?: Maybe<Scalars['String']>
  account_not?: Maybe<Scalars['String']>
  account_in?: Maybe<Array<Maybe<Scalars['String']>>>
  account_not_in?: Maybe<Array<Maybe<Scalars['String']>>>
  account_contains?: Maybe<Scalars['String']>
  account_not_contains?: Maybe<Scalars['String']>
  link_exists?: Maybe<Scalars['Boolean']>
  link?: Maybe<Scalars['String']>
  link_not?: Maybe<Scalars['String']>
  link_in?: Maybe<Array<Maybe<Scalars['String']>>>
  link_not_in?: Maybe<Array<Maybe<Scalars['String']>>>
  link_contains?: Maybe<Scalars['String']>
  link_not_contains?: Maybe<Scalars['String']>
  user_exists?: Maybe<Scalars['Boolean']>
  OR?: Maybe<Array<Maybe<ContactFilter>>>
  AND?: Maybe<Array<Maybe<ContactFilter>>>
}

export type ContactLinkingCollections = {
  __typename?: 'ContactLinkingCollections'
  entryCollection?: Maybe<EntryCollection>
}

export type ContactLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  preview?: Maybe<Scalars['Boolean']>
  locale?: Maybe<Scalars['String']>
}

export enum ContactOrder {
  MediaAsc = 'media_ASC',
  MediaDesc = 'media_DESC',
  AccountAsc = 'account_ASC',
  AccountDesc = 'account_DESC',
  LinkAsc = 'link_ASC',
  LinkDesc = 'link_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export type ContentfulMetadata = {
  __typename?: 'ContentfulMetadata'
  tags: Array<Maybe<ContentfulTag>>
}

export type ContentfulMetadataFilter = {
  tags_exists?: Maybe<Scalars['Boolean']>
  tags?: Maybe<ContentfulMetadataTagsFilter>
}

export type ContentfulMetadataTagsFilter = {
  id_contains_all?: Maybe<Array<Maybe<Scalars['String']>>>
  id_contains_some?: Maybe<Array<Maybe<Scalars['String']>>>
  id_contains_none?: Maybe<Array<Maybe<Scalars['String']>>>
}

/**
 * Represents a tag entity for finding and organizing content easily.
 *     Find out more here: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/content-tags
 */
export type ContentfulTag = {
  __typename?: 'ContentfulTag'
  id?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
}

export type Entry = {
  sys: Sys
  contentfulMetadata: ContentfulMetadata
}

export type EntryCollection = {
  __typename?: 'EntryCollection'
  total: Scalars['Int']
  skip: Scalars['Int']
  limit: Scalars['Int']
  items: Array<Maybe<Entry>>
}

export type EntryFilter = {
  sys?: Maybe<SysFilter>
  contentfulMetadata?: Maybe<ContentfulMetadataFilter>
  OR?: Maybe<Array<Maybe<EntryFilter>>>
  AND?: Maybe<Array<Maybe<EntryFilter>>>
}

export enum EntryOrder {
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
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
  /** Focus the resizing on the center. */
  Center = 'CENTER',
  /** Focus the resizing on the top. */
  Top = 'TOP',
  /** Focus the resizing on the top right. */
  TopRight = 'TOP_RIGHT',
  /** Focus the resizing on the right. */
  Right = 'RIGHT',
  /** Focus the resizing on the bottom right. */
  BottomRight = 'BOTTOM_RIGHT',
  /** Focus the resizing on the bottom. */
  Bottom = 'BOTTOM',
  /** Focus the resizing on the bottom left. */
  BottomLeft = 'BOTTOM_LEFT',
  /** Focus the resizing on the left. */
  Left = 'LEFT',
  /** Focus the resizing on the top left. */
  TopLeft = 'TOP_LEFT',
  /** Focus the resizing on the largest face. */
  Face = 'FACE',
  /** Focus the resizing on the area containing all the faces. */
  Faces = 'FACES',
}

export enum ImageResizeStrategy {
  /** Resizes the image to fit into the specified dimensions. */
  Fit = 'FIT',
  /**
   * Resizes the image to the specified dimensions, padding the image if needed.
   *         Uses desired background color as padding color.
   */
  Pad = 'PAD',
  /** Resizes the image to the specified dimensions, cropping the image if needed. */
  Fill = 'FILL',
  /** Resizes the image to the specified dimensions, changing the original aspect ratio if needed. */
  Scale = 'SCALE',
  /** Crops a part of the original image to fit into the specified dimensions. */
  Crop = 'CROP',
  /** Creates a thumbnail from the image. */
  Thumb = 'THUMB',
}

export type ImageTransformOptions = {
  /** Desired width in pixels. Defaults to the original image width. */
  width?: Maybe<Scalars['Dimension']>
  /** Desired height in pixels. Defaults to the original image height. */
  height?: Maybe<Scalars['Dimension']>
  /**
   * Desired quality of the image in percents.
   *         Used for `PNG8`, `JPG`, `JPG_PROGRESSIVE` and `WEBP` formats.
   */
  quality?: Maybe<Scalars['Quality']>
  /**
   * Desired corner radius in pixels.
   *         Results in an image with rounded corners (pass `-1` for a full circle/ellipse).
   *         Defaults to `0`. Uses desired background color as padding color,
   *         unless the format is `JPG` or `JPG_PROGRESSIVE` and resize strategy is `PAD`, then defaults to white.
   */
  cornerRadius?: Maybe<Scalars['Int']>
  /** Desired resize strategy. Defaults to `FIT`. */
  resizeStrategy?: Maybe<ImageResizeStrategy>
  /** Desired resize focus area. Defaults to `CENTER`. */
  resizeFocus?: Maybe<ImageResizeFocus>
  /**
   * Desired background color, used with corner radius or `PAD` resize strategy.
   *         Defaults to transparent (for `PNG`, `PNG8` and `WEBP`) or white (for `JPG` and `JPG_PROGRESSIVE`).
   */
  backgroundColor?: Maybe<Scalars['HexColor']>
  /** Desired image format. Defaults to the original image format. */
  format?: Maybe<ImageFormat>
}

export type Query = {
  __typename?: 'Query'
  asset?: Maybe<Asset>
  assetCollection?: Maybe<AssetCollection>
  contact?: Maybe<Contact>
  contactCollection?: Maybe<ContactCollection>
  award?: Maybe<Award>
  awardCollection?: Maybe<AwardCollection>
  workExperience?: Maybe<WorkExperience>
  workExperienceCollection?: Maybe<WorkExperienceCollection>
  author?: Maybe<Author>
  authorCollection?: Maybe<AuthorCollection>
  achievement?: Maybe<Achievement>
  achievementCollection?: Maybe<AchievementCollection>
  achievementCategory?: Maybe<AchievementCategory>
  achievementCategoryCollection?: Maybe<AchievementCategoryCollection>
  entryCollection?: Maybe<EntryCollection>
}

export type QueryAssetArgs = {
  id: Scalars['String']
  preview?: Maybe<Scalars['Boolean']>
  locale?: Maybe<Scalars['String']>
}

export type QueryAssetCollectionArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  preview?: Maybe<Scalars['Boolean']>
  locale?: Maybe<Scalars['String']>
  where?: Maybe<AssetFilter>
  order?: Maybe<Array<Maybe<AssetOrder>>>
}

export type QueryContactArgs = {
  id: Scalars['String']
  preview?: Maybe<Scalars['Boolean']>
  locale?: Maybe<Scalars['String']>
}

export type QueryContactCollectionArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  preview?: Maybe<Scalars['Boolean']>
  locale?: Maybe<Scalars['String']>
  where?: Maybe<ContactFilter>
  order?: Maybe<Array<Maybe<ContactOrder>>>
}

export type QueryAwardArgs = {
  id: Scalars['String']
  preview?: Maybe<Scalars['Boolean']>
  locale?: Maybe<Scalars['String']>
}

export type QueryAwardCollectionArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  preview?: Maybe<Scalars['Boolean']>
  locale?: Maybe<Scalars['String']>
  where?: Maybe<AwardFilter>
  order?: Maybe<Array<Maybe<AwardOrder>>>
}

export type QueryWorkExperienceArgs = {
  id: Scalars['String']
  preview?: Maybe<Scalars['Boolean']>
  locale?: Maybe<Scalars['String']>
}

export type QueryWorkExperienceCollectionArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  preview?: Maybe<Scalars['Boolean']>
  locale?: Maybe<Scalars['String']>
  where?: Maybe<WorkExperienceFilter>
  order?: Maybe<Array<Maybe<WorkExperienceOrder>>>
}

export type QueryAuthorArgs = {
  id: Scalars['String']
  preview?: Maybe<Scalars['Boolean']>
  locale?: Maybe<Scalars['String']>
}

export type QueryAuthorCollectionArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  preview?: Maybe<Scalars['Boolean']>
  locale?: Maybe<Scalars['String']>
  where?: Maybe<AuthorFilter>
  order?: Maybe<Array<Maybe<AuthorOrder>>>
}

export type QueryAchievementArgs = {
  id: Scalars['String']
  preview?: Maybe<Scalars['Boolean']>
  locale?: Maybe<Scalars['String']>
}

export type QueryAchievementCollectionArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  preview?: Maybe<Scalars['Boolean']>
  locale?: Maybe<Scalars['String']>
  where?: Maybe<AchievementFilter>
  order?: Maybe<Array<Maybe<AchievementOrder>>>
}

export type QueryAchievementCategoryArgs = {
  id: Scalars['String']
  preview?: Maybe<Scalars['Boolean']>
  locale?: Maybe<Scalars['String']>
}

export type QueryAchievementCategoryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  preview?: Maybe<Scalars['Boolean']>
  locale?: Maybe<Scalars['String']>
  where?: Maybe<AchievementCategoryFilter>
  order?: Maybe<Array<Maybe<AchievementCategoryOrder>>>
}

export type QueryEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  preview?: Maybe<Scalars['Boolean']>
  locale?: Maybe<Scalars['String']>
  where?: Maybe<EntryFilter>
  order?: Maybe<Array<Maybe<EntryOrder>>>
}

export type Sys = {
  __typename?: 'Sys'
  id: Scalars['String']
  spaceId: Scalars['String']
  environmentId: Scalars['String']
  publishedAt?: Maybe<Scalars['DateTime']>
  firstPublishedAt?: Maybe<Scalars['DateTime']>
  publishedVersion?: Maybe<Scalars['Int']>
}

export type SysFilter = {
  id_exists?: Maybe<Scalars['Boolean']>
  id?: Maybe<Scalars['String']>
  id_not?: Maybe<Scalars['String']>
  id_in?: Maybe<Array<Maybe<Scalars['String']>>>
  id_not_in?: Maybe<Array<Maybe<Scalars['String']>>>
  id_contains?: Maybe<Scalars['String']>
  id_not_contains?: Maybe<Scalars['String']>
  publishedAt_exists?: Maybe<Scalars['Boolean']>
  publishedAt?: Maybe<Scalars['DateTime']>
  publishedAt_not?: Maybe<Scalars['DateTime']>
  publishedAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>
  publishedAt_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>
  publishedAt_gt?: Maybe<Scalars['DateTime']>
  publishedAt_gte?: Maybe<Scalars['DateTime']>
  publishedAt_lt?: Maybe<Scalars['DateTime']>
  publishedAt_lte?: Maybe<Scalars['DateTime']>
  firstPublishedAt_exists?: Maybe<Scalars['Boolean']>
  firstPublishedAt?: Maybe<Scalars['DateTime']>
  firstPublishedAt_not?: Maybe<Scalars['DateTime']>
  firstPublishedAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>
  firstPublishedAt_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>
  firstPublishedAt_gt?: Maybe<Scalars['DateTime']>
  firstPublishedAt_gte?: Maybe<Scalars['DateTime']>
  firstPublishedAt_lt?: Maybe<Scalars['DateTime']>
  firstPublishedAt_lte?: Maybe<Scalars['DateTime']>
  publishedVersion_exists?: Maybe<Scalars['Boolean']>
  publishedVersion?: Maybe<Scalars['Float']>
  publishedVersion_not?: Maybe<Scalars['Float']>
  publishedVersion_in?: Maybe<Array<Maybe<Scalars['Float']>>>
  publishedVersion_not_in?: Maybe<Array<Maybe<Scalars['Float']>>>
  publishedVersion_gt?: Maybe<Scalars['Float']>
  publishedVersion_gte?: Maybe<Scalars['Float']>
  publishedVersion_lt?: Maybe<Scalars['Float']>
  publishedVersion_lte?: Maybe<Scalars['Float']>
}

/** [See type definition](https://app.contentful.com/spaces/{spaceId}/content_types/workExperience) */
export type WorkExperience = Entry & {
  __typename?: 'WorkExperience'
  sys: Sys
  contentfulMetadata: ContentfulMetadata
  linkedFrom?: Maybe<WorkExperienceLinkingCollections>
  organization?: Maybe<Scalars['String']>
  role?: Maybe<Scalars['String']>
  startDate?: Maybe<Scalars['DateTime']>
  endDate?: Maybe<Scalars['DateTime']>
}

/** [See type definition](https://app.contentful.com/spaces/{spaceId}/content_types/workExperience) */
export type WorkExperienceLinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>
}

/** [See type definition](https://app.contentful.com/spaces/{spaceId}/content_types/workExperience) */
export type WorkExperienceOrganizationArgs = {
  locale?: Maybe<Scalars['String']>
}

/** [See type definition](https://app.contentful.com/spaces/{spaceId}/content_types/workExperience) */
export type WorkExperienceRoleArgs = {
  locale?: Maybe<Scalars['String']>
}

/** [See type definition](https://app.contentful.com/spaces/{spaceId}/content_types/workExperience) */
export type WorkExperienceStartDateArgs = {
  locale?: Maybe<Scalars['String']>
}

/** [See type definition](https://app.contentful.com/spaces/{spaceId}/content_types/workExperience) */
export type WorkExperienceEndDateArgs = {
  locale?: Maybe<Scalars['String']>
}

export type WorkExperienceCollection = {
  __typename?: 'WorkExperienceCollection'
  total: Scalars['Int']
  skip: Scalars['Int']
  limit: Scalars['Int']
  items: Array<Maybe<WorkExperience>>
}

export type WorkExperienceFilter = {
  sys?: Maybe<SysFilter>
  contentfulMetadata?: Maybe<ContentfulMetadataFilter>
  organization_exists?: Maybe<Scalars['Boolean']>
  organization?: Maybe<Scalars['String']>
  organization_not?: Maybe<Scalars['String']>
  organization_in?: Maybe<Array<Maybe<Scalars['String']>>>
  organization_not_in?: Maybe<Array<Maybe<Scalars['String']>>>
  organization_contains?: Maybe<Scalars['String']>
  organization_not_contains?: Maybe<Scalars['String']>
  role_exists?: Maybe<Scalars['Boolean']>
  role?: Maybe<Scalars['String']>
  role_not?: Maybe<Scalars['String']>
  role_in?: Maybe<Array<Maybe<Scalars['String']>>>
  role_not_in?: Maybe<Array<Maybe<Scalars['String']>>>
  role_contains?: Maybe<Scalars['String']>
  role_not_contains?: Maybe<Scalars['String']>
  startDate_exists?: Maybe<Scalars['Boolean']>
  startDate?: Maybe<Scalars['DateTime']>
  startDate_not?: Maybe<Scalars['DateTime']>
  startDate_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>
  startDate_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>
  startDate_gt?: Maybe<Scalars['DateTime']>
  startDate_gte?: Maybe<Scalars['DateTime']>
  startDate_lt?: Maybe<Scalars['DateTime']>
  startDate_lte?: Maybe<Scalars['DateTime']>
  endDate_exists?: Maybe<Scalars['Boolean']>
  endDate?: Maybe<Scalars['DateTime']>
  endDate_not?: Maybe<Scalars['DateTime']>
  endDate_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>
  endDate_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>
  endDate_gt?: Maybe<Scalars['DateTime']>
  endDate_gte?: Maybe<Scalars['DateTime']>
  endDate_lt?: Maybe<Scalars['DateTime']>
  endDate_lte?: Maybe<Scalars['DateTime']>
  OR?: Maybe<Array<Maybe<WorkExperienceFilter>>>
  AND?: Maybe<Array<Maybe<WorkExperienceFilter>>>
}

export type WorkExperienceLinkingCollections = {
  __typename?: 'WorkExperienceLinkingCollections'
  entryCollection?: Maybe<EntryCollection>
}

export type WorkExperienceLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  preview?: Maybe<Scalars['Boolean']>
  locale?: Maybe<Scalars['String']>
}

export enum WorkExperienceOrder {
  OrganizationAsc = 'organization_ASC',
  OrganizationDesc = 'organization_DESC',
  RoleAsc = 'role_ASC',
  RoleDesc = 'role_DESC',
  StartDateAsc = 'startDate_ASC',
  StartDateDesc = 'startDate_DESC',
  EndDateAsc = 'endDate_ASC',
  EndDateDesc = 'endDate_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export type CfAchievementCategoryNestedFilter = {
  sys?: Maybe<SysFilter>
  contentfulMetadata?: Maybe<ContentfulMetadataFilter>
  name_exists?: Maybe<Scalars['Boolean']>
  name?: Maybe<Scalars['String']>
  name_not?: Maybe<Scalars['String']>
  name_in?: Maybe<Array<Maybe<Scalars['String']>>>
  name_not_in?: Maybe<Array<Maybe<Scalars['String']>>>
  name_contains?: Maybe<Scalars['String']>
  name_not_contains?: Maybe<Scalars['String']>
  OR?: Maybe<Array<Maybe<CfAchievementCategoryNestedFilter>>>
  AND?: Maybe<Array<Maybe<CfAchievementCategoryNestedFilter>>>
}

export type CfAuthorNestedFilter = {
  sys?: Maybe<SysFilter>
  contentfulMetadata?: Maybe<ContentfulMetadataFilter>
  name_exists?: Maybe<Scalars['Boolean']>
  name?: Maybe<Scalars['String']>
  name_not?: Maybe<Scalars['String']>
  name_in?: Maybe<Array<Maybe<Scalars['String']>>>
  name_not_in?: Maybe<Array<Maybe<Scalars['String']>>>
  name_contains?: Maybe<Scalars['String']>
  name_not_contains?: Maybe<Scalars['String']>
  nickname_exists?: Maybe<Scalars['Boolean']>
  nickname?: Maybe<Scalars['String']>
  nickname_not?: Maybe<Scalars['String']>
  nickname_in?: Maybe<Array<Maybe<Scalars['String']>>>
  nickname_not_in?: Maybe<Array<Maybe<Scalars['String']>>>
  nickname_contains?: Maybe<Scalars['String']>
  nickname_not_contains?: Maybe<Scalars['String']>
  image_exists?: Maybe<Scalars['Boolean']>
  underline_exists?: Maybe<Scalars['Boolean']>
  underline?: Maybe<Scalars['Boolean']>
  underline_not?: Maybe<Scalars['Boolean']>
  description_exists?: Maybe<Scalars['Boolean']>
  description?: Maybe<Scalars['String']>
  description_not?: Maybe<Scalars['String']>
  description_in?: Maybe<Array<Maybe<Scalars['String']>>>
  description_not_in?: Maybe<Array<Maybe<Scalars['String']>>>
  description_contains?: Maybe<Scalars['String']>
  description_not_contains?: Maybe<Scalars['String']>
  OR?: Maybe<Array<Maybe<CfAuthorNestedFilter>>>
  AND?: Maybe<Array<Maybe<CfAuthorNestedFilter>>>
}

export type TopQueryVariables = Exact<{
  preview?: Maybe<Scalars['Boolean']>
  locale: Scalars['String']
  authorId: Scalars['String']
}>

export type TopQuery = { __typename?: 'Query' } & {
  me?: Maybe<
    { __typename?: 'Author' } & Pick<
      Author,
      'name' | 'nickname' | 'description'
    > & { image?: Maybe<{ __typename?: 'Asset' } & Pick<Asset, 'url'>> }
  >
  contacts?: Maybe<
    { __typename?: 'ContactCollection' } & {
      items: Array<
        Maybe<
          { __typename?: 'Contact' } & Pick<
            Contact,
            'media' | 'account' | 'link'
          >
        >
      >
    }
  >
  workExperiences?: Maybe<
    { __typename?: 'WorkExperienceCollection' } & {
      items: Array<
        Maybe<
          { __typename?: 'WorkExperience' } & Pick<
            WorkExperience,
            'organization' | 'role' | 'startDate' | 'endDate'
          >
        >
      >
    }
  >
  achievements?: Maybe<
    { __typename?: 'AchievementCollection' } & {
      items: Array<
        Maybe<
          { __typename?: 'Achievement' } & Pick<
            Achievement,
            | 'title'
            | 'link'
            | 'proceeding'
            | 'publishedDate'
            | 'startPage'
            | 'endPage'
            | 'note'
          > & {
              category?: Maybe<
                { __typename?: 'AchievementCategory' } & Pick<
                  AchievementCategory,
                  'name'
                >
              >
              authorsCollection?: Maybe<
                { __typename?: 'AchievementAuthorsCollection' } & {
                  items: Array<
                    Maybe<
                      { __typename?: 'Author' } & Pick<
                        Author,
                        'name' | 'underline'
                      >
                    >
                  >
                }
              >
            }
        >
      >
    }
  >
  awards?: Maybe<
    { __typename?: 'AwardCollection' } & {
      items: Array<
        Maybe<
          { __typename?: 'Award' } & Pick<
            Award,
            'name' | 'publication' | 'awardDate'
          >
        >
      >
    }
  >
}

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
      where: { user: { sys: { id: $authorId } } }
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
      where: { category: { name_exists: true } }
    ) {
      items {
        title
        link
        category {
          name
        }
        authorsCollection {
          items {
            name
            underline
          }
        }
        proceeding
        publishedDate
        startPage
        endPage
        note
      }
    }
    awards: awardCollection(
      preview: $preview
      locale: $locale
      order: awardDate_DESC
    ) {
      items {
        name
        publication
        awardDate
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
  baseOptions: Apollo.QueryHookOptions<TopQuery, TopQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<TopQuery, TopQueryVariables>(TopDocument, options)
}
export function useTopLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<TopQuery, TopQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<TopQuery, TopQueryVariables>(TopDocument, options)
}
export type TopQueryHookResult = ReturnType<typeof useTopQuery>
export type TopLazyQueryHookResult = ReturnType<typeof useTopLazyQuery>
export type TopQueryResult = Apollo.QueryResult<TopQuery, TopQueryVariables>
