'use client';

import '../assets/css/common.css';
import './Button.css';

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
  variant?: 'filled' | 'oulined' | 'dashed' | 'ghost' | 'link';
  /**
   * Button color
   */
  color?: 'default' | 'primary' | 'secondary' | 'gray' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark';
  /**
   * Button size
   */
  sizes?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  /**
   * Button rounded
   */
  rounded?: 'sqare' | 'rounded' | 'solid';
}

/**
 * 아이콘 컴포넌트
 * 식별자 ID: Button
 * 담당자: 김수호
 * 뎁스: IconButton
 */

export const Button = ({
  children,
  onClick,
  variant = 'filled',
  color = 'primary',
  sizes = 'md',
  rounded = 'sqare',
}: ButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`upleat-button upleat-button-${variant} upleat-button-${sizes} upleat-button-${rounded} upleat-button-${color}`}
    >
      {children}
    </button>
  );
};
