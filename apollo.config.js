module.exports = {
  client: {
    name: 'client',
    includes: ['src/**/*.{ts,tsx,graphql}'],
    addTypename: true,
    service: {
      name: 'contentful graphql endpoint',
      url: '{contentful graphql endpoint url}',
    },
  },
}
