//'use client';
import './ChipInput.scss';
import classNames from 'classnames';
import { ChipInput } from './ChipInput';

export interface ChipInputOption {
  id: string;
  label: string;
  color?: 'gray' | 'red' | 'blue';
  size?: 'sm' | 'md' | 'lg';
  icon?: boolean;
  disabled?: boolean;
  role?: 'radio' | 'checkbox';
  checked?: boolean;
  defaultChecked?: boolean;
  // eslint-disable-next-line no-unused-vars
  onChange?: (checked: boolean) => void;
}

export interface ChipInputGroupProps {
  options: ChipInputOption[];
  container?: 'default' | 'responsive' | 'fluid';
}

export const ChipInputGroup = ({ options, container = 'default' }: ChipInputGroupProps) => {
  const ChipInputGroupClasses = classNames('chip-group', {
    [`chip-group--${container}`]: container,
  });

  return (
    <div className={ChipInputGroupClasses}>
      {options.map((option) => (
        <ChipInput
          id={option.id}
          label={option.label}
          color={option.color}
          size={option.size}
          icon={option.icon}
          disabled={option.disabled}
          role={option.role}
          checked={option.checked}
          defaultChecked={option.defaultChecked}
        />
      ))}
    </div>
  );
};
