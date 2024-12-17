//'use client';
import { ReactNode } from 'react';
import classNames from 'classnames';
import './ChipInput.scss';

export interface ChipInputsProps {
  children: ReactNode;
  container?: 'default' | 'responsive' | 'fluid';
}

export const ChipInputs = ({ children, container = 'default' }: ChipInputsProps) => {
  const ChipInputsClasses = classNames('chip-group', {
    [`chip-group--${container}`]: container,
  });

  return <div className={ChipInputsClasses}>{children}</div>;
};
