import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

export const Button: React.FC<ButtonProps> = ({ 
  className, variant = 'primary', size = 'md', children, ...props 
}) => {
  const baseStyles = 'rounded font-bold transition-all duration-300 flex items-center justify-center';
  
  const variants = {
    primary: 'bg-beluga-accent text-white hover:bg-cyan-400 hover:shadow-[0_0_15px_rgba(6,182,212,0.4)]',
    secondary: 'bg-beluga-gold text-beluga-dark hover:bg-yellow-300 hover:shadow-[0_0_15px_rgba(251,191,36,0.4)]',
    outline: 'border-2 border-beluga-accent text-beluga-accent hover:bg-beluga-accent/10'
  };

  const sizes = {
    sm: 'px-3 py-1 text-sm',
    md: 'px-6 py-2',
    lg: 'px-8 py-3 text-lg'
  };

  return (
    <button 
      className={twMerge(clsx(baseStyles, variants[variant], sizes[size], className))}
      {...props}
    >
      {children}
    </button>
  );
};
