import { Button } from './button';

import { Container } from './container';

export function Hero() {
  return (
    <Container className="relative bg-[#F5CBD5] bg-[url('/hero.png')] bg-cover bg-center px-4 lg:px-16">
      <div className="relative flex h-[768px] flex-col items-start justify-center text-casabella-brown">
        <h2 className="text-2xl uppercase tracking-widest lg:text-4xl">Stylish, Trendy & Modest</h2>
        <h1 className="mt-2 font-serif text-6xl leading-none lg:text-8xl">{`Women's Clothing`}</h1>
        <p
          className="text-normal mb-8 mt-4 font-semibold text-white lg:text-2xl"
          style={{ letterSpacing: '1rem' }}
        >
          FOR MODERN WOMEN
        </p>
        <Button href="https://www.google.com">VIEW OUR COLLECTIONS</Button>
      </div>
    </Container>
  );
}
