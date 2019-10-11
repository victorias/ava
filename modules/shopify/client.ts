import 'isomorphic-fetch';
import Client from 'shopify-buy';

const client = Client.buildClient({
  domain: process.env.SHOPIFY_DOMAIN as string,
  storefrontAccessToken: process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN as string,
});

export default client;
