import * as React from 'react';
import clsx from 'clsx';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

const variantClasses = {
  default: 'bg-primary text-white hover:bg-primary/90',
  outline: 'border border-primary text-primary bg-transparent hover:bg-primary/10',
  ghost: 'bg-transparent text-primary hover:bg-primary/10',
};

const sizeClasses = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-6 py-3 text-lg',
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'md', ...props }, ref) => (
    <button
      ref={ref}
      className={clsx(
        'rounded transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50',
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      {...props}
    />
  )
);

Button.displayName = 'Button';

export default Button; 