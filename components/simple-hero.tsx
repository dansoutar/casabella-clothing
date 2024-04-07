import { cn } from '@/lib/utils';
import { Container } from './container';

type Props = {
  image: string;
  title?: string;
  className?: string;
};

export function SimpleHero({ image, title, className, ...props }: Props) {
  return (
    <Container
      isFullWidth
      style={{
        backgroundImage: `url(${image})`
      }}
      className={cn(
        'relative bg-[#F5CBD5] bg-cover bg-center px-4 lg:px-16',
        'min-h-[200px] md:min-h-[400px] lg:min-h-[600px]',
        'flex items-center justify-center text-casabella-brown',
        className
      )}
      {...props}
    >
      <div className="absolute inset-0 bg-black opacity-40" />
      <div className="absolute inset-0 flex items-center justify-center text-4xl text-white md:text-7xl">
        {title}
      </div>
    </Container>
  );
}
