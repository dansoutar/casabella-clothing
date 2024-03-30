import { Button } from '@/components/ui/button';

import { Container } from './container';

export function Hero() {
  return (
    <Container className="relative bg-[#F5CBD5] bg-[url('/hero.png')] bg-cover bg-center">
      {/* <div className="absolute inset-0 bg-black bg-opacity-50" /> */}
      <div className="relative flex h-[768px] flex-col items-start justify-center p-8 text-casabella-brown">
        <h2 className="text-2xl font-semibold uppercase tracking-widest">
          Stylish, Trendy & Modest
        </h2>
        <h1 className="mt-2 font-serif text-6xl font-bold leading-none">{`Women's Clothing`}</h1>
        <p className="mt-4 text-xl">For Modern Woman</p>
        <Button className="mt-6 bg-white text-black">View Our Collections</Button>
      </div>
    </Container>
  );
}
