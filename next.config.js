// const { i18n, localePath } = require("./next-i18next.config")
module.exports = {
  output: 'standalone',
  reactStrictMode: true,
  // i18n,
  // localePath,
  rewrites: async () => [
  ],
  publicRuntimeConfig: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  },
}
