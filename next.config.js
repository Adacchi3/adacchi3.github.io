module.exports = {
  /* regular next.js config options here */
  env: {
    GRAPHQL_ENDPOINT: process.env.GRAPHQL_ENDPOINT,
    PREVIEW: process.env.NODE_ENV === 'production' ? false : true,
    AUTHOR_ID: process.env.AUTHOR_ID
  }
}
