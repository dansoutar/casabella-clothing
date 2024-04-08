'use client';

import { useParams, useSearchParams } from 'next/navigation';
import { Suspense, useEffect, useState } from 'react';

import Collections from 'components/layout/search/collections';
import { Colors } from 'components/layout/search/colors';
import FilterList from 'components/layout/search/filter';
import { SimpleHero } from 'components/simple-hero';

import { CollectionProvider } from 'contexts/collection-provider';
import {
  HIDDEN_PRODUCT_TAG,
  SHOPIFY_GRAPHQL_API_ENDPOINT,
  TAGS,
  defaultSort,
  sorting
} from 'lib/constants';
import { isShopifyError } from 'lib/type-guards';
import {
  getCollectionProductsQuery,
  getCollectionsQuery
} from '../../lib/shopify/queries/collection';

import {
  Collection,
  Connection,
  Image,
  Product,
  ShopifyCollection,
  ShopifyCollectionProductsOperation,
  ShopifyCollectionsOperation,
  ShopifyProduct
} from '../../lib/shopify/types';

// const domain = process.env.SHOPIFY_STORE_DOMAIN;
// const endpoint = `${domain}${SHOPIFY_GRAPHQL_API_ENDPOINT}`;
// const key = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN!;
const domain = 'https://www.casabella-clothing.myshopify.com';
const endpoint = `${domain}${SHOPIFY_GRAPHQL_API_ENDPOINT}`;
const key = '77d542f5ade5450994d2e40ab2d70b90';
type ExtractVariables<T> = T extends { variables: object } ? T['variables'] : never;

const removeEdgesAndNodes = (array: Connection<any>) => {
  return array.edges.map((edge) => edge?.node);
};

const reshapeCollection = (collection: ShopifyCollection): Collection | undefined => {
  if (!collection) {
    return undefined;
  }

  return {
    ...collection,
    path: `/search/${collection.handle}`
  };
};

const reshapeCollections = (collections: ShopifyCollection[]) => {
  const reshapedCollections = [];

  for (const collection of collections) {
    if (collection) {
      const reshapedCollection = reshapeCollection(collection);

      if (reshapedCollection) {
        reshapedCollections.push(reshapedCollection);
      }
    }
  }

  return reshapedCollections;
};

const reshapeImages = (images: Connection<Image>, productTitle: string) => {
  const flattened = removeEdgesAndNodes(images);

  return flattened.map((image) => {
    const filename = image.url.match(/.*\/(.*)\..*/)[1];
    return {
      ...image,
      altText: image.altText || `${productTitle} - ${filename}`
    };
  });
};

const reshapeProduct = (product: ShopifyProduct, filterHiddenProducts: boolean = true) => {
  if (!product || (filterHiddenProducts && product.tags.includes(HIDDEN_PRODUCT_TAG))) {
    return undefined;
  }

  const { images, variants, ...rest } = product;

  return {
    ...rest,
    images: reshapeImages(images, product.title),
    variants: removeEdgesAndNodes(variants)
  };
};

const reshapeProducts = (products: ShopifyProduct[]) => {
  const reshapedProducts = [];

  for (const product of products) {
    if (product) {
      const reshapedProduct = reshapeProduct(product);

      if (reshapedProduct) {
        reshapedProducts.push(reshapedProduct);
      }
    }
  }

  return reshapedProducts;
};

async function shopifyFetchClient<T>({
  query,
  tags,
  variables
}: {
  query: string;
  tags?: string[];
  variables?: ExtractVariables<T>;
}): Promise<{ status: number; body: T } | never> {
  try {
    const result = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Storefront-Access-Token': key
      },
      body: JSON.stringify({
        ...(query && { query }),
        ...(variables && { variables })
      }),
      // cache,
      ...(tags && { next: { tags } })
    });

    const body = await result.json();

    if (body.errors) {
      throw body.errors[0];
    }

    return {
      status: result.status,
      body
    };
  } catch (e) {
    if (isShopifyError(e)) {
      throw {
        cause: e.cause?.toString() || 'unknown',
        status: e.status || 500,
        message: e.message,
        query
      };
    }

    throw {
      error: e,
      query
    };
  }
}

async function getCollectionsClient(): Promise<Collection[]> {
  const res = await shopifyFetchClient<ShopifyCollectionsOperation>({
    query: getCollectionsQuery,
    tags: [TAGS.collections]
  });
  const shopifyCollections = removeEdgesAndNodes(res.body?.data?.collections);
  const collections = [
    {
      handle: '',
      title: 'All',
      description: 'All products',
      seo: {
        title: 'All',
        description: 'All products'
      },
      path: '/search',
      updatedAt: new Date().toISOString()
    },
    // Filter out the `hidden` collections.
    // Collections that start with `hidden-*` need to be hidden on the search page.
    ...reshapeCollections(shopifyCollections).filter(
      (collection) => !collection.handle.startsWith('hidden')
    )
  ];

  return collections;
}

async function getCollectionProductsClient({
  collection,
  reverse,
  sortKey
}: {
  collection: string;
  reverse?: boolean;
  sortKey?: string;
}): Promise<Product[]> {
  const res = await shopifyFetchClient<ShopifyCollectionProductsOperation>({
    query: getCollectionProductsQuery,
    tags: [TAGS.collections, TAGS.products],
    variables: {
      handle: collection,
      reverse,
      sortKey: sortKey === 'CREATED_AT' ? 'CREATED' : sortKey
    }
  });

  if (!res.body.data.collection) {
    console.log(`No collection found for \`${collection}\``);
    return [];
  }

  return reshapeProducts(removeEdgesAndNodes(res.body.data.collection.products));
}

type Props = { children: React.ReactNode };
export default function SearchLayout({ children }: Props) {
  const params = useParams();
  const [collections, setCollections] = useState([]);
  const [products, setProducts] = useState([]);

  const searchParams = useSearchParams();
  const { sort } = searchParams as unknown as { [key: string]: string };
  const { sortKey, reverse } = sorting.find((item) => item.slug === sort) || defaultSort;

  useEffect(() => {
    async function fetchData() {
      try {
        const fetchedCollections = await getCollectionsClient();
        // const fetchedProducts = await getCollectionProductsClient({
        //   collection: 'collection' in params ? params.collection : '',
        //   sortKey,
        //   reverse
        // });

        setCollections(fetchedCollections);
        // setProducts(fetchedProducts);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    }

    fetchData();
  }, [params, reverse, sortKey]);

  return (
    <Suspense>
      <CollectionProvider collections={collections}>
        <div>
          <SimpleHero className="mb-24" title="Products" image="/hero.png" />
          <div className="mx-auto flex max-w-screen-2xl flex-col gap-8 p-8 px-4 text-black dark:text-white md:flex-row md:pb-24">
            <div className="order-first w-full flex-none md:max-w-[125px]">
              <div className="flex flex-col gap-8">
                <Collections collections={collections} />
                <Colors />
              </div>
            </div>
            <div className="order-last min-h-screen w-full md:order-none">{children}</div>
            <div className="order-none flex-none md:order-last md:w-[125px]">
              <FilterList list={sorting} title="Sort by" />
            </div>
          </div>
        </div>
      </CollectionProvider>
    </Suspense>
  );
}
