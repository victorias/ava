import Link from 'next/link';
import { useAllProducts } from '../modules/shopify/hooks';
import Header from '../modules/uikit/Header';
import FeaturedHero from '../modules/front-page/FeaturedHero';

const Index = () => {
  const [products] = useAllProducts();

  return (
    <div>
      <Header />
      <FeaturedHero />
      <p>Hello Next.js</p>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {/* TODO: fix TS */}
            <Link href={`/dresses/${(product as any).handle}`}>
              <a>{product.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Index;
