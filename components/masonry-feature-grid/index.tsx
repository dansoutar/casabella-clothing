// MasonryFeatureGrid.tsx
import clsx from 'clsx';
import React from 'react';

import { Container } from 'components/container';

import { Card } from './card';

type MasonryFeatureGridProps = {
  children: React.ReactNode;
  className?: string;
};

const GRID_CLASSES = 'grid grid-cols-12 lg:grid-rows-2 gap-3';

export const MasonryFeatureGrid = ({ children, className, ...props }: MasonryFeatureGridProps) => {
  return (
    <Container
      isFullWidth
      className={clsx('min-h-[600px]', 'bg-white p-3 lg:min-h-[1000px]', GRID_CLASSES, className)}
      {...props}
    >
      {children}
    </Container>
  );
};

MasonryFeatureGrid.Card = Card;
