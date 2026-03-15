module.exports = {
  output: 'export',
  serverExternalPackages: ['@apollo/client'],
  env: {
    GRAPHQL_ENDPOINT: process.env.GRAPHQL_ENDPOINT,
    PREVIEW: process.env.NODE_ENV === 'production' ? 'false' : 'true',
    AUTHOR_ID: process.env.AUTHOR_ID,
    GTM_ID: process.env.GTM_ID,
  },
}
