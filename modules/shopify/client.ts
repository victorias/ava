import 'isomorphic-fetch';
import Client from 'shopify-buy';

const client = Client.buildClient({
  domain: 'ava-bridal.myshopify.com',
  storefrontAccessToken: '596f04f97e83f24b8b244b80d6857177',
});

export default client;
