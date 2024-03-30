import Cart from 'components/cart';
import OpenCart from 'components/cart/open-cart';
import { getMenu } from 'lib/shopify';
import { Suspense } from 'react';
import MobileMenu from './mobile-menu';

import Image from 'next/image';
import Link from 'next/link';

export default async function Navbar() {
  const menu = await getMenu('next-js-frontend-header-menu');

  return (
    <nav className="relative flex items-center justify-between p-4 lg:px-6">
      <div className="block flex-none md:hidden">
        <MobileMenu menu={menu} />
      </div>
      <div className="flex w-full items-center">
        <div className="flex justify-end md:w-1/3" />
        <div className="flex justify-center md:w-1/3">
          <Link href="/">
            <Image src="/cbella-logo.png" width={360} height={200} alt="Casabella Clothing Logo" />
          </Link>
        </div>
        <div className="flex justify-end md:w-1/3">
          <Suspense fallback={<OpenCart />}>
            <Cart />
          </Suspense>
        </div>
      </div>
    </nav>
  );
}
