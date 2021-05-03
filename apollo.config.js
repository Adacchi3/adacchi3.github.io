module.exports = {
  client: {
    name: 'client',
    includes: ['src/graphql/**/*.{ts,tsx,graphql}'],
    excludes: [
      'src/graphql/queries/*.{ts,tsx,graphql}',
      'src/graphql/generated/*.{ts,tsx,graphql}',
      'src/graphql/graphql.schema.json',
    ],
    addTypename: true,
    service: {
      name: 'contentful graphql endpoint',
      url: process.env.GRAPHQL_ENDPOINT,
    },
  },
}
