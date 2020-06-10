import React from 'react';

const Logo = (props: LogoProps) => {
  return (
    <svg viewBox='0 0 190.37 105.98' {...props}>
      <path d='M6.19 86.4c2.88 6.63 8.21 13.1 19.3 13.1 8.49 0 16.27-5.32 16.27-14.54 0-20.16-38.59-13.53-38.59-38.16 0-12 9.65-19.29 22.32-19.29 13.82 0 20.16 8.92 21.89 14.83l-5.91 2.3c-2-4.61-5.76-10.8-16.56-10.8-8.06 0-14.69 4.61-14.69 12.53 0 19.3 38.6 12.67 38.6 38.3 0 12.53-10.08 21.31-23.62 21.31-16.13 0-22.18-9.64-25.2-17.13zM113.18 50.26l-17 53.85H78.89l-23.9-75.16h17l16.42 57.6s.14-.29 17.27-57.6h15c17 57.31 17.14 57.6 17.14 57.6l16.56-57.6h17l-23.91 75.16h-17.44zM183.17 0h7.2v104.11h-7.2z' />
    </svg>
  );
};

export default Logo;

interface LogoProps {
  [reference: string]: any;
}
