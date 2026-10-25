/** Internal type. DO NOT USE DIRECTLY. */
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
/** Internal type. DO NOT USE DIRECTLY. */
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never
    }

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'
export type LocaleQueryVariables = Exact<{ [key: string]: never }>

export type LocaleQuery = { locale: string }

export type TopQueryVariables = Exact<{
  preview?: boolean | null | undefined
  locale: string
  authorId: string
}>

export type TopQuery = {
  me: {
    __typename: 'Author'
    name: string | null
    nickname: string | null
    description: string | null
    image: { __typename: 'Asset'; url: string | null } | null
  } | null
  contacts: {
    __typename: 'ContactCollection'
    items: Array<{
      __typename: 'Contact'
      media: string | null
      account: string | null
      link: string | null
    } | null>
  } | null
  workExperiences: {
    __typename: 'WorkExperienceCollection'
    items: Array<{
      __typename: 'WorkExperience'
      organization: string | null
      role: string | null
      startDate: string | null
      endDate: string | null
    } | null>
  } | null
  achievements: {
    __typename: 'AchievementCollection'
    items: Array<{
      __typename: 'Achievement'
      title: string | null
      link: string | null
      proceeding: string | null
      publishedDate: string | null
      startPage: number | null
      endPage: number | null
      sessionId: string | null
      note: string | null
      category: {
        __typename: 'AchievementCategory'
        orderNumber: number | null
        nameJP: string | null
        nameUS: string | null
      } | null
      authorsCollection: {
        __typename: 'AchievementAuthorsCollection'
        items: Array<{
          __typename: 'Author'
          underline: boolean | null
          nameJP: string | null
          nameUS: string | null
        } | null>
      } | null
    } | null>
  } | null
  awards: {
    __typename: 'AwardCollection'
    items: Array<{
      __typename: 'Award'
      name: string | null
      publication: string | null
      awardDate: string | null
    } | null>
  } | null
  academicBackgroundCollection: {
    __typename: 'AcademicBackgroundCollection'
    items: Array<{
      __typename: 'AcademicBackground'
      organization: string | null
      startDate: string | null
      endDate: string | null
    } | null>
  } | null
}

export const LocaleDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'Locale' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'locale' },
            directives: [
              { kind: 'Directive', name: { kind: 'Name', value: 'client' } },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<LocaleQuery, LocaleQueryVariables>
export const TopDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'Top' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'preview' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Boolean' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'locale' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'authorId' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'me' },
            name: { kind: 'Name', value: 'author' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'authorId' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'preview' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'preview' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'locale' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'locale' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'nickname' } },
                { kind: 'Field', name: { kind: 'Name', value: 'description' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'image' },
                  arguments: [
                    {
                      kind: 'Argument',
                      name: { kind: 'Name', value: 'preview' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'preview' },
                      },
                    },
                    {
                      kind: 'Argument',
                      name: { kind: 'Name', value: 'locale' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'locale' },
                      },
                    },
                  ],
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'url' } },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'contacts' },
            name: { kind: 'Name', value: 'contactCollection' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'preview' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'preview' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'user' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'sys' },
                            value: {
                              kind: 'ObjectValue',
                              fields: [
                                {
                                  kind: 'ObjectField',
                                  name: { kind: 'Name', value: 'id' },
                                  value: {
                                    kind: 'Variable',
                                    name: { kind: 'Name', value: 'authorId' },
                                  },
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'order' },
                value: { kind: 'EnumValue', value: 'media_DESC' },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'items' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'media' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'account' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'link' } },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'workExperiences' },
            name: { kind: 'Name', value: 'workExperienceCollection' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'preview' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'preview' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'locale' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'locale' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'order' },
                value: { kind: 'EnumValue', value: 'startDate_DESC' },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'user' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'sys' },
                            value: {
                              kind: 'ObjectValue',
                              fields: [
                                {
                                  kind: 'ObjectField',
                                  name: { kind: 'Name', value: 'id' },
                                  value: {
                                    kind: 'Variable',
                                    name: { kind: 'Name', value: 'authorId' },
                                  },
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'items' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'organization' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'role' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'startDate' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'endDate' },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'achievements' },
            name: { kind: 'Name', value: 'achievementCollection' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'preview' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'preview' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'locale' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'locale' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'order' },
                value: { kind: 'EnumValue', value: 'publishedDate_DESC' },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'category' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'name_exists' },
                            value: { kind: 'BooleanValue', value: true },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'items' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'link' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'category' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              alias: { kind: 'Name', value: 'nameJP' },
                              name: { kind: 'Name', value: 'name' },
                              arguments: [
                                {
                                  kind: 'Argument',
                                  name: { kind: 'Name', value: 'locale' },
                                  value: {
                                    kind: 'StringValue',
                                    value: 'ja-JP',
                                    block: false,
                                  },
                                },
                              ],
                            },
                            {
                              kind: 'Field',
                              alias: { kind: 'Name', value: 'nameUS' },
                              name: { kind: 'Name', value: 'name' },
                              arguments: [
                                {
                                  kind: 'Argument',
                                  name: { kind: 'Name', value: 'locale' },
                                  value: {
                                    kind: 'StringValue',
                                    value: 'en-US',
                                    block: false,
                                  },
                                },
                              ],
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'orderNumber' },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'authorsCollection' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'items' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    alias: { kind: 'Name', value: 'nameJP' },
                                    name: { kind: 'Name', value: 'name' },
                                    arguments: [
                                      {
                                        kind: 'Argument',
                                        name: { kind: 'Name', value: 'locale' },
                                        value: {
                                          kind: 'StringValue',
                                          value: 'ja-JP',
                                          block: false,
                                        },
                                      },
                                    ],
                                  },
                                  {
                                    kind: 'Field',
                                    alias: { kind: 'Name', value: 'nameUS' },
                                    name: { kind: 'Name', value: 'name' },
                                    arguments: [
                                      {
                                        kind: 'Argument',
                                        name: { kind: 'Name', value: 'locale' },
                                        value: {
                                          kind: 'StringValue',
                                          value: 'en-US',
                                          block: false,
                                        },
                                      },
                                    ],
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'underline' },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'proceeding' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'publishedDate' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'startPage' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'endPage' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'sessionId' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'note' } },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'awards' },
            name: { kind: 'Name', value: 'awardCollection' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'preview' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'preview' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'locale' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'locale' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'order' },
                value: { kind: 'EnumValue', value: 'awardDate_DESC' },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'user' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'sys' },
                            value: {
                              kind: 'ObjectValue',
                              fields: [
                                {
                                  kind: 'ObjectField',
                                  name: { kind: 'Name', value: 'id' },
                                  value: {
                                    kind: 'Variable',
                                    name: { kind: 'Name', value: 'authorId' },
                                  },
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'items' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'publication' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'awardDate' },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'academicBackgroundCollection' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'preview' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'preview' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'locale' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'locale' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'user' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'sys' },
                            value: {
                              kind: 'ObjectValue',
                              fields: [
                                {
                                  kind: 'ObjectField',
                                  name: { kind: 'Name', value: 'id' },
                                  value: {
                                    kind: 'Variable',
                                    name: { kind: 'Name', value: 'authorId' },
                                  },
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'order' },
                value: { kind: 'EnumValue', value: 'startDate_DESC' },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'items' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'organization' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'startDate' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'endDate' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<TopQuery, TopQueryVariables>
