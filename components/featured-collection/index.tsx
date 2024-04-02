import clsx from 'clsx';
import { getCollectionProducts } from 'lib/shopify';
import { Button } from '../button';
import { Container } from '../container';
import { ProductCard } from '../product-card.tsx';

type Props = {
  collectionHandle: string;
  title?: string;
  children?: React.ReactNode;
};

const GRID_CLASSES = 'grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-4 md:gap-8';
const MAX_PRODUCTS_DISPLAYED = 8;

export async function FeaturedCollection({ collectionHandle, title }: Props) {
  const products = await getCollectionProducts({
    collection: collectionHandle
  });

  if (!products?.[0]) return null;

  return (
    <Container className="mt-24">
      <h2 className="mb-8 font-serif text-3xl uppercase text-casabella-brown">{title}</h2>
      <div className={clsx(GRID_CLASSES)}>
        {products.slice(0, MAX_PRODUCTS_DISPLAYED).map((product) => (
          <ProductCard key={product?.id} product={product} />
        ))}
      </div>
      <div className="mt-8 flex justify-center">
        <Button href={`/collections/${collectionHandle}`} className="mx-auto">
          {`View All ${title}`}
        </Button>
      </div>
    </Container>
  );
}
