/* eslint-disable @typescript-eslint/no-var-requires */
const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')
const isProd = process.env.NODE_ENV === 'production'

module.exports = withPWA({
  pwa: {
    dest: 'public',
    disable: !isProd,
    runtimeCaching
  },
  i18n: {
    locales: ['en-US'],
    defaultLocale: 'en-US'
  }
})
