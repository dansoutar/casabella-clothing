'use client';

import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { Button } from './button';
import { Container } from './container';

import { PaperAirplaneIcon } from '@heroicons/react/24/outline';

export function NewsletterSignup() {
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    console.log('Form submitted!');
  };

  const borderClasses =
    'border-b border-b-casabella-brown focus:outline-none focus:ring-1 focus:ring-casabella-brown focus:border-transparent';

  return (
    <Container className="flex min-h-[400px] flex-col items-center justify-center bg-casabella-cream py-12">
      <div className="flex flex-col items-center justify-center text-center">
        <PaperAirplaneIcon
          className="mb-8 h-6 w-6 -rotate-45 text-casabella-brown"
          aria-hidden="true"
        />
        <h2 className="text:lg mb-8 uppercase text-casabella-brown md:mb-16 lg:text-2xl">
          Get 10% off by subscribing to our newsletter
        </h2>
        <form
          onSubmit={handleSubmit}
          className="flex h-11 w-full max-w-[unset] flex-col items-center gap-4 sm:flex-row lg:w-[90%]"
        >
          <Input
            type="email"
            placeholder="Your email..."
            className="h-full rounded-none border-b border-b-casabella-brown bg-transparent px-4 py-2"
            required
          />
          <Button
            type="submit"
            className={cn('hover:bg-brown-700 mt-0 bg-casabella-brown text-white', borderClasses)}
          >
            SEND
          </Button>
        </form>
      </div>
    </Container>
  );
}
