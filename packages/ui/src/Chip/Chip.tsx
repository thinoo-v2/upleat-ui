'use client';

import "./Chip.css";

import React from 'react';

export interface ChipProps {
  children: React.ReactNode;
  color?: 'primary' | 'secondary' | 'status' | 'success' | 'warning';
  size?: 'sm' | 'md';
  active?: boolean;
  onClick?: () => void;
  role?: string;
  'aria-checked'?: boolean;
}

export const Chip: React.FC<ChipProps> = ({ 
  children, 
  color = 'primary', 
  size = 'md',
  active = false,
  onClick,
  role,
  'aria-checked': ariaChecked
}) => {
  return (
    <span 
      className={`chip chip-${color} chip-${size} ${active ? 'chip-active' : ''}`}
      onClick={onClick}
      role={role}
      aria-checked={ariaChecked}
    >
      {children}
    </span>
  );
}; 