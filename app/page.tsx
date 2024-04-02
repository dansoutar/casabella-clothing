import { FeaturedCollection } from 'components/featured-collection';
import { Hero } from 'components/hero';

export const runtime = 'edge';

export const metadata = {
  description: 'High-performance ecommerce store built with Next.js, Vercel, and Shopify.',
  openGraph: {
    type: 'website'
  }
};

export default async function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedCollection collectionHandle="hidden-homepage-featured-items" title="New Arrivals" />
    </>
  );
}
