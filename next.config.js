const withPreact = require('next-plugin-preact')

module.exports = withPreact({
  /* regular next.js config options here */
  i18n: {
    locales: ['ja', 'en'],
    defaultLocale: 'ja'
  }
})
