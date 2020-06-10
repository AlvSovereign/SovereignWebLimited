import React, { ReactNode } from 'react';
import cx from 'classnames';

const Container = ({ className, children }: ContainerProps) => {
  return (
    <div className={cx('container mx-auto px-4 sm:px-0', className)}>
      {children}
    </div>
  );
};

export default Container;

interface ContainerProps {
  className?: string;
  children: ReactNode;
}
