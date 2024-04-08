import { ReactNode, createContext, useContext } from 'react';

import { ShopifyCollection } from 'lib/shopify/types';

export const CollectionContext = createContext<ShopifyCollection[] | undefined>(undefined);
export const useCollection = () => useContext(CollectionContext);

interface CollectionProviderProps {
  children: ReactNode;
  collections: ShopifyCollection[];
}

export const CollectionProvider: React.FC<CollectionProviderProps> = ({
  children,
  collections
}) => <CollectionContext.Provider value={collections}>{children}</CollectionContext.Provider>;
