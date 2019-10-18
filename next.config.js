const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');
const withImages = require('next-images');
const withCSS = require('@zeit/next-css');

module.exports = withCSS(
  withImages({
    exportPathMap: function() {
      return {
        '/': { page: '/' },
      };
    },
  })
);
