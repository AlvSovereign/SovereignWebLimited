import React, { ReactNode } from 'react';
import cx from 'classnames';

interface RowProps {
  alignItems: 'center' | 'end' | 'inherit' | 'start'; //'inherit will deliberatly omit its style'
  background?: 'black';
  children: ReactNode;
  className?: string;
  direction: Direction;
  element?: any; // the string of a HTML element
  height: 'auto' | 'full' | 'screen';
  justifyContent: 'around' | 'between' | 'center' | 'inherit' | 'start';
}

type Direction = 'col' | 'row' | 'row-reverse' | ResponsiveDirection;

type ResponsiveDirection = {
  xs: Direction;
  sm?: Direction;
  md?: Direction;
  lg?: Direction;
  xl?: Direction;
};

const Row = ({
  alignItems,
  background,
  children,
  className,
  direction,
  element = 'div',
  height,
  justifyContent,
  ...rest
}: RowProps) => {
  const Element = element;

  const createDirectionClassName = (direction: Direction) => {
    if (typeof direction === 'object') {
      const directions = Object.entries(direction).map(
        (entry) => `${entry[0] !== 'xs' ? `${entry[0]}:` : ''}flex-${entry[1]}`
      );
      return directions;
    } else {
      return `flex-${direction}`;
    }
  };

  return (
    <Element
      className={cx(
        'flex',
        {
          'bg-black': background === 'black',
          'items-center': alignItems === 'center',
          'items-end': alignItems === 'end',
          'items-start': alignItems === 'start',
          'justify-around': justifyContent === 'around',
          'justify-between': justifyContent === 'between',
          'justify-center': justifyContent === 'center',
          'justify-start': justifyContent === 'start',
          'h-auto': height === 'auto',
          'h-full': height === 'full',
          'h-screen': height === 'screen',
        },
        createDirectionClassName(direction),
        className
      )}
      {...rest}>
      {children}
    </Element>
  );
};

export default Row;