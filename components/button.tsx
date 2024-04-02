import { Button as RadixButton } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';

type Props = {
  variant?: 'default' | 'ghost';
  children: React.ReactNode;
  className?: string;
  href?: string;
};

export function Button({ variant = 'default', children, className, href }: Props) {
  const baseClass =
    'mt-6 rounded-none transition-colors duration-200 cursor-pointer text-lg uppercase';
  const defaultClass = 'bg-casabella-brown text-white hover:bg-casabella-dark hover:text-grey-100';
  const ghostClass =
    'bg-transparent border border-casabella-brown text-casabella-brown hover:bg-casabella-brown hover:text-white';
  const buttonClass =
    variant === 'ghost'
      ? `${baseClass} ${ghostClass} ${className}`
      : `${baseClass} ${defaultClass} ${className}`;

  const isExternal = href?.startsWith('http') || href?.startsWith('https');

  if (href) {
    if (isExternal) {
      return (
        <Link href={href} target="_blank" rel="noopener noreferrer">
          <RadixButton className={buttonClass}>{children}</RadixButton>
        </Link>
      );
    }

    return (
      <Link href={href}>
        <RadixButton className={buttonClass}>{children}</RadixButton>
      </Link>
    );
  }

  return <RadixButton className={buttonClass}>{children}</RadixButton>;
}
