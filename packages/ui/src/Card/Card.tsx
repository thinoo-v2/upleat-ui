import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'bordered';
}

export function Card({ 
  children, 
  className = '', 
  variant = 'default' 
}: CardProps) {
  const baseStyles = 'rounded-lg p-4 bg-white';
  const variantStyles = {
    default: 'shadow-md',
    bordered: 'border border-gray-200'
  };

  return (
    <div className={`${baseStyles} ${variantStyles[variant]} ${className}`}>
      {children}
    </div>
  );
}
