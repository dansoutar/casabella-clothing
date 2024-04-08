import Grid from 'components/grid';
// import { GridTileImage } from 'components/grid/tile';
import { ProductCard } from 'components/product-card.tsx';
import { Product } from 'lib/shopify/types';
import Link from 'next/link';

export default function ProductGridItems({ products }: { products: Product[] }) {
  return (
    <>
      {products.map((product) => (
        <Grid.Item key={product.handle} className="animate-fadeIn">
          <Link className="relative inline-block h-full w-full" href={`/product/${product.handle}`}>
            <ProductCard product={product} />
          </Link>
        </Grid.Item>
      ))}
    </>
  );
}
