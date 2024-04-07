import { Suspense } from 'react';

import Collections from 'components/layout/search/collections';
import FilterList from 'components/layout/search/filter';
import { SimpleHero } from 'components/simple-hero';

import { sorting } from 'lib/constants';

export default function SearchLayout({ children }: { children: React.ReactNode }) {
  return (
    <Suspense>
      <div>
        <SimpleHero className="mb-24" title="Products" image="/hero.png" />
        <div className="mx-auto flex max-w-screen-2xl flex-col gap-8 px-4 pb-4 text-black dark:text-white md:flex-row">
          <div className="order-first w-full flex-none md:max-w-[125px]">
            <Collections />
          </div>
          <div className="order-last min-h-screen w-full md:order-none">{children}</div>
          <div className="order-none flex-none md:order-last md:w-[125px]">
            <FilterList list={sorting} title="Sort by" />
          </div>
        </div>
      </div>
    </Suspense>
  );
}
