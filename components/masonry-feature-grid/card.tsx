import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  className?: string;
  title?: string;
  subtitle?: string;
  image?: string;
  href?: string;
};

export function Card({ className, ...props }: Props) {
  const { title, subtitle, image, href } = props;

  const cardContent = (
    <>
      {image && (
        <>
          <Image
            src={image}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
            width={400}
            height={600}
          />
          <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        </>
      )}

      <div
        className={clsx(
          'align-center absolute inset-0 flex flex-col justify-center text-center',
          image ? 'text-casabella-cream' : 'text-casabella-brown'
        )}
      >
        <div className="font-serif text-lg lg:text-6xl">{title}</div>
        <div className="text-casabella-cream-light text-md lg:text-lg">{subtitle}</div>
      </div>
    </>
  );

  if (href) {
    return (
      <Link href={href} className={clsx('relative bg-casabella-cream p-3', className)}>
        {cardContent}
      </Link>
    );
  }

  return <div className={clsx('relative bg-casabella-cream p-3', className)}>{cardContent}</div>;
}
