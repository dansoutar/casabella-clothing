import clsx from 'clsx';
import { getCollectionProducts } from 'lib/shopify';
import { Button } from '../button';
import { Container } from '../container';
import { ProductCard } from '../product-card.tsx';

type Props = {
  collectionHandle: string;
  title?: string;
  children?: React.ReactNode;
  maxProductsDisplayed?: number;
  className?: string;
};

const GRID_CLASSES = 'grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-4 md:gap-8';

export async function FeaturedCollection({
  collectionHandle,
  title,
  maxProductsDisplayed,
  className
}: Props) {
  const products = await getCollectionProducts({
    collection: collectionHandle
  });

  if (!products?.[0]) return null;

  return (
    <Container className={clsx('mt-24', className)}>
      <h2 className="mb-8 font-serif text-3xl uppercase text-casabella-brown">{title}</h2>
      <div className={clsx(GRID_CLASSES)}>
        {products.slice(0, maxProductsDisplayed || 4).map((product) => (
          <ProductCard key={product?.id} product={product} />
        ))}
      </div>
      <div className="mb-8 mt-4 flex justify-center">
        <Button href={`/collections/${collectionHandle}`} className="mx-auto">
          {`View All ${title}`}
        </Button>
      </div>
    </Container>
  );
}
