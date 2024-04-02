import { Button } from './button';

import { Container } from './container';

export function Hero() {
  return (
    <Container className="relative bg-[#F5CBD5] bg-[url('/hero.png')] bg-cover bg-center px-16">
      <div className="relative flex h-[768px] flex-col items-start justify-center text-casabella-brown">
        <h2 className="text-4xl uppercase tracking-widest">Stylish, Trendy & Modest</h2>
        <h1 className="mt-2 font-serif text-8xl leading-none">{`Women's Clothing`}</h1>
        <p
          className="mb-8 mt-4 text-2xl font-semibold text-white"
          style={{ letterSpacing: '1rem' }}
        >
          FOR MODERN WOMEN
        </p>
        <Button href="https://www.google.com">VIEW OUR COLLECTIONS</Button>
      </div>
    </Container>
  );
}
