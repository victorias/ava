const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = phase => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        SHOPIFY_DOMAIN: 'ava-bridal-dev.myshopify.com',
        SHOPIFY_STOREFRONT_ACCESS_TOKEN: 'be12b01f2eaf817739d04cac04b248ff',
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
