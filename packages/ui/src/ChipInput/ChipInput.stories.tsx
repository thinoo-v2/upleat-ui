import type { Meta, StoryObj } from '@storybook/react';
import { ChipInput } from './ChipInput';
import { ChipInputGroup } from './ChipInput.Group';

const meta: Meta<typeof ChipInput> = {
  title: 'Components/ChipInput',
  component: ChipInput,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ChipInput>;

// 기본 Chip
export const Default: Story = {
  args: {
    id: 'test',
    label: '기본',
  },
};

// 비활성화된 Chip
export const Disabled: Story = {
  args: {
    id: 'test',
    label: '비활성화',
    disabled: true,
    checked: false,
  },
};

// 체크된 Chip
export const Checked: Story = {
  args: {
    id: 'test',
    label: '체크됨',
    disabled: false,
    checked: true,
  },
};

// 아이콘 Chip
export const Icon: Story = {
  args: {
    id: 'test',
    label: '아이콘',
    icon: true,
  },
};

// Default Container
export const DefaultContainer: Story = {
  render: () => (
    <ChipInputGroup
      container="default"
      options={[
        { id: 'check01', label: 'Chip01', size: 'sm', icon: true },
        { id: 'check02', label: 'Chip02', size: 'md', icon: false },
        { id: 'check03', label: 'Chip03', size: 'lg', icon: false },
      ]}
    />
  ),
};

// Responsive Container
export const ResponsiveContainer: Story = {
  render: () => (
    <ChipInputGroup
      container="responsive"
      options={[
        { id: 'check01', label: 'Chip01', size: 'sm', icon: false },
        { id: 'check02', label: 'Chip02', size: 'md', icon: true },
        { id: 'check03', label: 'Chip03', size: 'lg', icon: false },
      ]}
    />
  ),
};

// Fluid Container
export const FluidContainer: Story = {
  render: () => (
    <ChipInputGroup
      container="fluid"
      options={[
        { id: 'check01', label: 'Chip01', size: 'sm', icon: false },
        { id: 'check02', label: 'Chip02', size: 'md', icon: false },
        { id: 'check03', label: 'Chip03', size: 'lg', icon: true },
      ]}
    />
  ),
};
