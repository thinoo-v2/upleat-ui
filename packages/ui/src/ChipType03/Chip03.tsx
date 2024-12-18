import React, { useState } from 'react';
import { ReactNode } from 'react';
import './chip03.css';

export interface Chip03Props {
  children: ReactNode;
  className?: string;
  role?: 'radio' | 'checkbox' | 'null';
  checked?: boolean;
  variant?: 'default' | 'icons';
  fontSize?: '_sm' | '_md' | '_lg';
  fontColor?: '_colorRed' | '_colorBlue' | '_colorGray';
}

export const Chip03 = ({
  children,
  className = '',
  role = 'radio',
  fontSize = '_md',
  variant = 'default',
  fontColor = '_colorGray',
}: Chip03Props) => {
  const baseStyles = 'chip03';
  const variantStyles = {
    default: '',
    icons: 'icon',
  };
  const roleState = {
    radio: 'radio',
    checkbox: 'checkbox',
    null: null,
  };
  const [checked, setChecked] = useState(false);
  if (role === 'null') {
    return (
      <span className={`${baseStyles} ${fontSize} ${fontColor} ${variantStyles[variant]} ${className}`}>
        {children}
      </span>
    );
  } else {
    return (
      <span
        className={`${baseStyles} ${fontSize} ${fontColor} ${variantStyles[variant]} ${className}`}
        role={roleState[role]}
        aria-checked={checked}
        onClick={() => setChecked((v) => !v)}
      >
        {children}
      </span>
    );
  }
};
