import React, { useState } from 'react';
import { cn } from '../utils';
import { Chip } from './Chip';

export interface ChipOption {
  id: string | number;
  label: string;
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'status';
}

export interface ChipGroupProps {
  options: ChipOption[];
  defaultSelected?: string | number;
  onChange?: (selectedId: string | number | null) => void;
  className?: string;
}

export const ChipGroup = ({
  options,
  defaultSelected,
  onChange,
  className
}: ChipGroupProps) => {
  const [selectedId, setSelectedId] = useState<string | number | null>(defaultSelected ?? null);

  const handleSelect = (id: string | number) => {
    setSelectedId(id);
    onChange?.(id);
  };

  return (
    <div className={cn('chip-group', className)} role="radiogroup">
      {options.map((option) => (
        <Chip
          key={option.id}
          onClick={() => handleSelect(option.id)}
          color={option.color}
          active={selectedId === option.id}
          aria-checked={selectedId === option.id}
          role="radio"
        >
          {option.label}
        </Chip>
      ))}
    </div>
  );
}; 