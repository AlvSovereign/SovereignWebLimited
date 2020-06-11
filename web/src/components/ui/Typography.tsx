import React, { ReactNode } from 'react';
import cx from 'classnames';

interface TypographyProps {
  textAlign?: 'left' | 'center' | 'right';
  children: ReactNode;
  className?: string;
  component: any;
  gutterBottom?: 'sm' | 'md' | 'lg';
  type: 'hero' | 'heading' | 'nav' | 'paragraph' | 'subheading';
  weight?: 'light' | 'medium';
}

const Typography = ({
  children,
  className,
  component,
  gutterBottom,
  textAlign,
  type,
  weight,
}: TypographyProps) => {
  const Component = component || 'p';

  return (
    <Component
      className={cx(
        'typography-opacity',
        'font-sans',
        'subpixel-antialiased',
        {
          'mb-2': gutterBottom === 'sm',
          'mb-4': gutterBottom === 'md',
          'mb-8': gutterBottom === 'lg',
          'text-center': textAlign === 'center',
          'text-left': textAlign === 'left',
          'text-right': textAlign === 'right',
          'text-xl': type === 'nav',
          'text-3xl md:text-4xl': type === 'heading',
          'text-base md:text-xl': type === 'paragraph',
          'text-2xl md:text-3xl': type === 'subheading',
          hero: type === 'hero',
          'font-light': weight === 'light',
          'font-medium': weight === 'medium',
        },
        className
      )}>
      {children}
    </Component>
  );
};

export default Typography;
