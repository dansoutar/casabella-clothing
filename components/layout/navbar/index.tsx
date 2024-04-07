import Cart from 'components/cart';
import OpenCart from 'components/cart/open-cart';
import { getMenu } from 'lib/shopify';
import { Suspense } from 'react';
import MobileMenu from './mobile-menu';
import Search, { SearchSkeleton } from './search';

import Image from 'next/image';
import Link from 'next/link';

export default async function Navbar() {
  const menu = await getMenu('next-js-frontend-header-menu');

  return (
    <nav className="relative flex flex-col items-center justify-between p-4 pb-8 lg:px-6">
      <div></div>
      <div className="block flex-none md:hidden">
        <MobileMenu menu={menu} />
      </div>
      <div className="flex w-full items-center">
        <div className="flex justify-end md:w-1/3" />
        <div className="flex justify-center md:w-1/3">
          <Link href="/">
            <Image
              className="max-w-[300px]"
              src="/cbella-logo.png"
              width={360}
              height={200}
              alt="Casabella Clothing Logo"
            />
          </Link>
        </div>
        <div className="flex justify-end md:w-1/3">
          <Suspense fallback={<OpenCart />}>
            <Cart />
          </Suspense>
        </div>
      </div>
      <div className="hidden justify-center md:flex md:w-1/3">
        <Suspense fallback={<SearchSkeleton />}>
          <Search />
        </Suspense>
      </div>
    </nav>
  );
}
