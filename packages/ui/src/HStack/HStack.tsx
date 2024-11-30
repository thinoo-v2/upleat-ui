import { ReactNode } from 'react';
import "./HStack.css";

interface HStackProps {
  children: ReactNode;

  /**
   * HStack className
   */
  className?: string;

  /**
   * HStack variant
   */
  variant?: 'default' | 'bordered';

  /**
   * HStack gap
   */
  gap?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

export function HStack({ 
  children, 
  className = '', 
  variant = 'default' ,
  gap = 'md',
}: HStackProps) {
  const baseStyles = 'hstack';
  const variantStyles = {
    default: '--hstack-normal',
    bordered: '--hstack-bordered'
  };
  const gapStyles = {
    xs: '--hstack-xs',
    sm: '--hstack-sm',
    md: '--hstack-md',
    lg: '--hstack-lg',
    xl: '--hstack-xl'
  }

  return (
    <div className={`${baseStyles} ${variantStyles[variant]} ${gapStyles[gap]} ${className}`}>
      {children}
    </div>
  );
}
