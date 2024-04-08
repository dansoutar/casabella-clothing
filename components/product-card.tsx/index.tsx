import Image from 'next/image';

import { Product } from '../../lib/shopify/types';
import { Button } from '../button';

type Props = {
  product: Product;
};

function formatPrice(amount: string | number) {
  const amountToFormat = typeof amount === 'string' ? parseFloat(amount) : amount;

  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(amountToFormat);
}

export function ProductCard({ product, ...props }: Props) {
  if (!product) return null;

  const isNew = product.tags.includes('New');
  const isOnSale =
    product.priceRange?.minVariantPrice?.amount < product.priceRange?.maxVariantPrice?.amount;

  return (
    <div className="relative" {...props}>
      {isOnSale && (
        <div className="absolute left-0 top-4 min-w-[70px] bg-casabella-brown px-4 py-2 text-sm uppercase text-white">
          Sale
        </div>
      )}
      {isNew && (
        <div className="absolute left-0 top-4 min-w-[70px] bg-casabella-brown px-4 py-2 text-sm uppercase text-white">
          New
        </div>
      )}

      <Image
        src={product.featuredImage?.url}
        alt={product.featuredImage?.altText || product.title}
        className="min-h-[400px] w-full object-cover"
        width={200}
        height={380}
      />
      <div className="p-4 text-center">
        <h3 className="text-lg">{product.title}</h3>
        <div className="mt-2">
          {isOnSale && (
            <span className="mr-2 text-gray-500 line-through">
              {formatPrice(product.priceRange?.maxVariantPrice?.amount)}
            </span>
          )}
          <span className="text-gray-900">
            {formatPrice(product.priceRange?.minVariantPrice?.amount)}
          </span>
        </div>
        <Button href={`/product/${product.handle}`} variant="ghost">
          View Product
        </Button>
      </div>
    </div>
  );
}
