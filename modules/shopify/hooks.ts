import { useEffect, useState } from 'react';
import { Product } from 'shopify-buy';
import ShopifyClient from './client';

export function useAllProducts(): [Product[], boolean] {
  const [data, setData] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  const fetch = async () => {
    try {
      const products = await ShopifyClient.product.fetchAll();
      setData(products);
    } catch {
      console.warn('failed to fetch all');
    }
    setLoading(false);
  };

  useEffect(() => {
    fetch();
  }, []);

  return [data, loading];
}

export function useProductByHandle(handle: string): [Product | null, boolean] {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  const fetch = async () => {
    try {
      const product = await ShopifyClient.product.fetchByHandle(handle);
      setProduct(product);
    } catch {
      console.warn('failed to fetch all');
    }
    setLoading(false);
  };

  useEffect(() => {
    fetch();
  }, []);

  return [product, loading];
}
