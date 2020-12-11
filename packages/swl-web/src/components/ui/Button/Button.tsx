import clsx from 'clsx';
import { FC, ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  className?: string;
  onClick: () => void;
  size: 'xl';
  type: 'button';
}

const Button: FC<ButtonProps> = ({
  children,
  className,
  onClick,
  size,
  type,
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={clsx(
        'font-sans font-semibold tracking-wide inline-flex items-center border border-transparent  shadow-sm text-black bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500',
        { 'px-6 py-3 text-base rounded-md': size === 'xl' },
        className
      )}>
      {children}
    </button>
  );
};

export default Button;
