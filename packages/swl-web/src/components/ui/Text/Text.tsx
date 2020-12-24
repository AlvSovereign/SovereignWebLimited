import { FC, ReactNode } from 'react';
import ReactMarkdown from 'react-markdown';
import clsx from 'clsx';

interface TextProps {
  align?: 'left' | 'center' | 'right';
  as?: any;
  children: string;
  className?: string;
  color?: 'black' | 'blue' | 'gray' | 'yellow';
  customRenderers?: object;
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
  withMarkdown?: boolean;
  rest?: any;
}

const Text: FC<TextProps> = ({
  as = 'p',
  align,
  children,
  className,
  color,
  customRenderers,
  display = 'block',
  gutterBottom,
  style,
  type,
  weight,
  withMarkdown,
  ...rest
}) => {
  const Element = as;
  const classes = clsx(
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
      'text-gray-900': color === 'black',
      'text-blue-600': color === 'blue',
      'text-gray-500': color === 'gray',
      'text-yellow-400': color === 'yellow',
    },
    className
  );

  return (
    <>
      {withMarkdown ? (
        <ReactMarkdown className={classes} renderers={{ ...customRenderers }}>
          {children}
        </ReactMarkdown>
      ) : (
        <Element className={classes} style={style} {...rest}>
          {children}
        </Element>
      )}
    </>
  );
};

export default Text;
