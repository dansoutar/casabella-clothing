import clsx from 'clsx';

type Props = {
  children: React.ReactNode;
  isFullWidth?: boolean;
  className?: string;
};

export function Container({ children, className, isFullWidth, ...props }: Props) {
  const containerClass = isFullWidth ? 'col-span-full' : 'col-start-2 col-end-3';

  return (
    <section className={clsx(containerClass, className)} {...props}>
      {children}
    </section>
  );
}
