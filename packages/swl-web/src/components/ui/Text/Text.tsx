import { FC, ReactNode } from 'react';
import clsx from 'clsx';

interface TextProps {
  align?: 'left' | 'center' | 'right';
  children: ReactNode;
  className?: string;
  color?: 'black' | 'blue' | 'grey' | 'yellow';
  as: any;
  display?: 'block' | 'inline';
  gutterBottom?: 'sm' | 'md' | 'lg';
  style?: object;
  type?:
    | 'hero'
    | 'heading'
    | 'nav'
    | 'normal'
    | 'pageTitle'
    | 'paragraph'
    | 'subheading';
  weight?: 'bold' | 'light' | 'medium' | 'semibold';
  rest?: any;
}

const Text: FC<TextProps> = ({
  as = 'p',
  align,
  children,
  className,
  color,
  display = 'block',
  gutterBottom,
  style,
  type,
  weight,
  ...rest
}) => {
  const Element = as;
  return (
    <Element
      className={clsx(
        'text-opacity',
        'font-sans',
        'subpixel-antialiased',
        {
          block: display === 'block',
          inline: display === 'inline',
          'mb-2': gutterBottom === 'sm',
          'mb-4': gutterBottom === 'md',
          'mb-8': gutterBottom === 'lg',
          'text-center': align === 'center',
          'text-left': align === 'left',
          'text-right': align === 'right',
          'text-xl': type === 'nav',
          'text-3xl md:text-4xl tracking-tight': type === 'heading',
          'text-4xl md:text-6xl lg:text-7xl xl:text-8xl tracking-tight':
            type === 'hero',
          'text-4xl md:text-6xl tracking-tight': type === 'pageTitle',
          'text-base md:text-xl': type === 'paragraph',
          'text-xl md:text-2xl lg:text-3xl': type === 'subheading',
          'hero-font': type === 'hero',
          'font-bold': weight === 'bold',
          'font-light': weight === 'light',
          'font-medium': weight === 'medium',
          'font-semibold': weight === 'semibold',
          'text-grey-900': color === 'black',
          'text-blue-600': color === 'blue',
          'text-grey-500': color === 'grey',
          ' text-yellow-400': color === 'yellow',
        },
        className
      )}
      style={style}
      {...rest}>
      {children}
    </Element>
  );
};

export default Text;
