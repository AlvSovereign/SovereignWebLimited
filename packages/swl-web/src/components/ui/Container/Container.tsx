import { FC, ReactNode } from 'react';
import clsx from 'clsx';

interface ContainerProps {
  className?: string;
  children: ReactNode;
}

const Container: FC<ContainerProps> = ({ className, children }) => {
  return (
    <div
      className={clsx(
        'container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8',
        className
      )}>
      {children}
    </div>
  );
};

export default Container;
