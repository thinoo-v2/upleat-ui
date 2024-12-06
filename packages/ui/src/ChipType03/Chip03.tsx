import React, { useState } from "react";
import { ReactNode } from 'react';
import './chip.css';


export interface Chip03Props {
  children: ReactNode;
  className?: string;
  role?: 'radio' | 'checkbox' | null;
  checked?: boolean;
  variant?: 'default' | 'icons' ; // | 'icons'
}

export const Chip03 = ({
  children, 
  className = '', 
  role = 'radio',
  variant = 'default' 
}: Chip03Props) => {
  const baseStyles = 'chip';
  const variantStyles = {
    default: '',
    icons: 'icon'
  };
  const roleState = {
    radio: 'radio',
    checkbox: 'checkbox'
  }
  const [checked, setChecked] = useState(false);
  if(role === null) {
    return (
      <span className={`${baseStyles} ${variantStyles[variant]} ${className}`}>
        {children}
      </span>
    );
  } else {
    return (
      <span className={`${baseStyles} ${variantStyles[variant]} ${className}`} role={roleState[role]} aria-checked={checked} onClick={() => setChecked((v) => !v)}>
        {children}
      </span>
    );
  }
}

