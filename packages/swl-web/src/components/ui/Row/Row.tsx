import { FC, ReactNode } from 'react';
import clsx from 'clsx';
import { Container } from '../..';

export type Breakpoints = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
type ResponsiveProps = Pick<Breakpoints, any>;
type Alignment = 'center' | 'end' | 'inherit' | 'start' | ResponsiveProps;
type Justify =
  | 'around'
  | 'between'
  | 'center'
  | 'inherit'
  | 'start'
  | ResponsiveProps;
type Direction = 'col' | 'row' | 'row-reverse' | ResponsiveProps;

interface RowProps {
  alignItems?: Alignment;
  alignSelf?: Alignment;
  as: any;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  direction: Direction;
  id?: string;
  justifyContent: Justify;
  withContainer?: boolean;
  wrap?: boolean;
}

const Row: FC<RowProps> = ({
  alignItems,
  alignSelf,
  as = 'div',
  children,
  className,
  containerClassName,
  direction,
  id,
  justifyContent,
  withContainer,
  wrap,
}) => {
  const Component = as;

  const createResponsiveClassName = (
    breakpoints: Direction | Alignment,
    partial: string
  ) => {
    if (typeof breakpoints === 'object') {
      const className = Object.entries(breakpoints).map(
        (entry) =>
          `${entry[0] !== 'xs' ? `${entry[0]}:` : ''}${partial}${entry[1]}`
      );
      return className;
    } else {
      return `${partial}${breakpoints}`;
    }
  };

  return (
    <Component
      className={clsx(
        'flex',
        {
          'items-center': alignItems === 'center',
          'items-end': alignItems === 'end',
          'items-start': alignItems === 'start',
          'justify-around': justifyContent === 'around',
          'justify-between': justifyContent === 'between',
          'justify-center': justifyContent === 'center',
          'justify-start': justifyContent === 'start',
          'flex-wrap': wrap,
        },
        direction && createResponsiveClassName(direction, 'flex-'),
        alignSelf && createResponsiveClassName(alignSelf, 'self-'),
        alignItems && createResponsiveClassName(alignItems, 'items-'),
        className
      )}
      id={id}>
      {withContainer ? (
        <Container className={containerClassName}>{children}</Container>
      ) : (
        <>{children}</>
      )}
    </Component>
  );
};

export default Row;
