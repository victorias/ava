import { useRouter } from 'next/router';
import { useProductByHandle } from '../../modules/shopify/hooks';
import AddToCartButton from '../../modules/cart/AddToCartButton';

export default () => {
  const router = useRouter();
  const productHandle = router.query.handle;
  const [product] = useProductByHandle(productHandle as string);

  if (product == null) {
    return null;
  }

  return (
    <>
      <h1>{product.title}</h1>
      <h2>{product.description}</h2>
      {product.images.map(image => (
        <img src={image.src} key={image.id} />
      ))}
      <AddToCartButton productId={product.id} />
    </>
  );
};
