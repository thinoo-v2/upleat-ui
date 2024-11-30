'use client';

import "./Button.css";

export interface ButtonProps {
  /**
   * Button contents
   */
  children: React.ReactNode;
  /**
   * Optional click handler
   */
  onClick?: () => void;
  /**
   * Button variant
   */
  variant?: 'solid' | 'outline' | 'dashed';
  /**
   * Button color
   */
  color?: 'primary' | 'secondary' | 'status';
  /**
   * Button size
   */
  sizes?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

export const Button = ({ children, onClick, variant = 'solid', color = 'primary', sizes = 'md' }: ButtonProps) => {
  const variantStyles = {
    solid: '--button-solid',
    outline: '--button-outline',
    dashed: '--button-dashed'
  };
  const colorStyles = {
    primary: '--button-primary',
    secondary: '--button-secondary',
    status: '--button-status'
  };
  const sizeStyles = {
    xs: '--button-xs',
    sm: '--button-sm',
    md: '--button-md',
    lg: '--button-lg',
    xl: '--button-xl'
  };

  return (
    <button type="button" onClick={onClick} className={`button ${variantStyles[variant]} ${colorStyles[color]} ${sizeStyles[sizes]}`}>
      {children}
    </button>
  );
};
