const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = phase => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        SHOPIFY_DOMAIN: 'ava-bridal.myshopify.com',
        SHOPIFY_STOREFRONT_ACCESS_TOKEN: '596f04f97e83f24b8b244b80d6857177',
      },
    };
  }

  return {
    env: {
      SHOPIFY_DOMAIN: 'ava-bridal',
      SHOPIFY_STOREFRONT_ACCESS_TOKEN: '596f04f97e83f24b8b244b80d6857177',
    },
  };
};
