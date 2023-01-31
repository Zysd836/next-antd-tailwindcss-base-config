const withPlugins = require('next-compose-plugins');
const { nextI18NextRewrites } = require('next-i18next/rewrites');

const localeSubpaths = {
    vi: 'vi',
    en: 'en',
};
const config = {
  rewrites: async() => [
      ...nextI18NextRewrites(localeSubpaths),
      {
        source: '/abc',
        destination: '/news'
      },
      {
        source: '/abc/:path*',
        destination: '/detail/:path*',
      }
  ],
  publicRuntimeConfig: {
      localeSubpaths,
      NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  },
};

module.exports = withPlugins([], config);
