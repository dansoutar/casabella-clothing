import clsx from 'clsx';

type Props = {
  children: React.ReactNode;
  isFullWidth?: boolean;
  className?: string;
};

export function Container({ children, className, isFullWidth, ...props }: Props) {
  return (
    <section className={clsx('mx-auto', 'grid grid-cols-container-layout', 'max-w-[1600px]')}>
      <div className={clsx(isFullWidth ? 'col-span-full' : 'col-start-2', className)} {...props}>
        {children}
      </div>
    </section>
  );
}
