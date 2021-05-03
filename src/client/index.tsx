import { ApolloClient, InMemoryCache } from '@apollo/client'

export const client = new ApolloClient({
  ssrMode: typeof window === 'undefined',
  uri: process.env.GRAPHQL_ENDPOINT,
  cache: new InMemoryCache(),
})
