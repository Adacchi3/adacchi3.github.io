import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'
import { TopDocument } from '@graphql/documents'
import merge from 'deepmerge'
import isEqual from 'lodash/isEqual'

let apolloClient

const cache = new InMemoryCache()

function createApolloClient() {
  return new ApolloClient({
    link: new HttpLink({
      uri: process.env.GRAPHQL_ENDPOINT,
      credentials: 'same-origin',
    }),
    cache,
  })
}

export function makeClient() {
  return new ApolloClient({
    link: new HttpLink({
      uri: process.env.GRAPHQL_ENDPOINT,
      credentials: 'same-origin',
    }),
    cache: new InMemoryCache(),
  })
}

export async function prefetchTopData(locale: string) {
  if (!process.env.GRAPHQL_ENDPOINT) {
    return {}
  }
  const client = makeClient()
  await client.query({
    query: TopDocument,
    variables: {
      preview: process.env.PREVIEW === 'true',
      locale,
      authorId: String(process.env.AUTHOR_ID),
    },
  })
  return JSON.parse(JSON.stringify(client.cache.extract()))
}

export function initializeApollo(initialState: object | null = null) {
  const _apolloClient = apolloClient ?? createApolloClient()

  if (initialState) {
    const existingCache = _apolloClient.extract()
    const data = merge(
      initialState as unknown as Partial<unknown>,
      existingCache,
      {
        // combine arrays using object equality (like in sets)
        arrayMerge: (destinationArray, sourceArray) => [
          ...sourceArray,
          ...destinationArray.filter((d) =>
            sourceArray.every((s) => !isEqual(d, s)),
          ),
        ],
      },
    )
    _apolloClient.cache.restore(data)
  }

  // For SSG and SSR always create a new Apollo Client
  if (typeof window === 'undefined') return _apolloClient
  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient
  return _apolloClient
}
