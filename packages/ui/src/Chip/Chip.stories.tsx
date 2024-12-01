import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Chip, type ChipProps } from './Chip';
import { ChipGroup } from './ChipGroup';

const meta = {
  title: 'Components/Chip',
  component: Chip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select', 
      options: ['primary', 'secondary', 'status'],
    },
    size: {
        control: 'select',
        options: ['sm', 'md'],
      },
  },
} satisfies Meta<ChipProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Chip',
    color: 'primary',
    size:'md',
  },
};

export const Colors: Story = {
  render: () => {
    return (
      <div style={{ display: 'flex', gap: '1rem' }}>
        <Chip color="primary">Primary</Chip>
        <Chip color="secondary">Secondary</Chip>
        <Chip color="status">Status</Chip>
      </div>
    );
  },
};

export const Sizes: Story = {
  args: {},
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <Chip size="sm">Small</Chip>
      <Chip size="md">Medium</Chip>
    </div>
  ),
};

export const SingleSelect: Story = {
  args: {},
  render: () => {
    const options = [
      { id: 1, label: 'Option 1', color: 'primary' as const },
      { id: 2, label: 'Option 2', color: 'primary' as const },
      { id: 3, label: 'Option 3', color: 'primary' as const },
      { id: 4, label: 'Option 4', color: 'primary' as const },
    ];

    return (
      <ChipGroup
        options={options}
        onChange={(selectedId) => console.log('Selected:', selectedId)}
      />
    );
  },
};

export const WithDefaultSelected: Story = {
  args: {},
  render: () => {
    const options = [
      { id: 1, label: 'Option 1', color: 'primary' as const },
      { id: 2, label: 'Option 2', color: 'primary' as const },
      { id: 3, label: 'Option 3', color: 'primary' as const },
      { id: 4, label: 'Option 4', color: 'primary' as const },
    ];

    return (
      <ChipGroup
        options={options}
        defaultSelected={1}
        onChange={(selectedId) => console.log('Selected:', selectedId)}
      />
    );
  },
};