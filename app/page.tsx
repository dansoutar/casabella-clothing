import { FeaturedBlogPost } from 'components/featured-blog-post';
import { FeaturedCollection } from 'components/featured-collection';
import { Hero } from 'components/hero';
import { MasonryFeatureGrid } from 'components/masonry-feature-grid';

import { getBlogPosts } from 'lib/shopify';

export const runtime = 'edge';

export const metadata = {
  description: 'High-performance ecommerce store built with Next.js, Vercel, and Shopify.',
  openGraph: {
    type: 'website'
  }
};

export default async function HomePage() {
  const post = await getBlogPosts();

  return (
    <>
      <Hero />

      <FeaturedCollection
        collectionHandle="hidden-homepage-featured-items"
        title="New Arrivals"
        maxProductsDisplayed={8}
      />

      <MasonryFeatureGrid>
        <MasonryFeatureGrid.Card
          className="col-span-12 lg:col-span-5 lg:row-span-1"
          title="DRESSES"
          subtitle="#maxi, midi, cocktail, skater..."
          image="/dress.jpg"
          href="/collections/frontpage"
        />
        <MasonryFeatureGrid.Card
          className="col-span-12 lg:col-span-7 lg:row-span-1"
          title="SHOES"
          subtitle="#maxi, midi, cocktail, skater..."
          image="/dress.jpg"
        />
        <MasonryFeatureGrid.Card
          className="col-span-12 lg:col-span-4 lg:row-span-1"
          image="/dress.jpg"
        />
        <MasonryFeatureGrid.Card
          className="col-span-12 lg:col-span-4 lg:row-span-1"
          title="BAGS & SHOES"
          subtitle="#maxi, midi, cocktail, skater..."
        />
        <MasonryFeatureGrid.Card
          className="col-span-12 lg:col-span-4 lg:row-span-1"
          image="/dress.jpg"
        />
      </MasonryFeatureGrid>

      <FeaturedCollection collectionHandle="hidden-homepage-featured-items" title="Dresses" />
      <FeaturedCollection
        className="mt-4"
        collectionHandle="hidden-homepage-featured-items"
        title="Plus clothing"
      />

      <FeaturedBlogPost className="mt-16" postData={post} />
    </>
  );
}
