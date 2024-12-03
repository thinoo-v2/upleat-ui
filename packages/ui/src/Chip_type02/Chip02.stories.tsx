import type { Meta, StoryObj } from '@storybook/react';
import { Chip02 } from './Chip02';

const meta: Meta<typeof Chip02> = {
  title: 'Components/Chip02',
  component: Chip02,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    selected: { control: 'boolean' },
    disabled: { control: 'boolean' },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large']
    }
  }
};

export default meta;
type Story = StoryObj<typeof Chip02>;

// 기본 Chip
export const Default: Story = {
  args: {
    label: '기본 칩',
  }
};

// 비활성화된 Chip
export const Disabled: Story = {
  args: {
    label: '비활성화',
    disabled: true,
  }
};

// 선택된 Chip
export const Selected: Story = {
  args: {
    label: '선택됨',
    disabled: false,
    selected: true,
  }
};

// 다양한 크기의 Chip
export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '10px' }}>
      <Chip02 size="small" label="Small" />
      <Chip02 size="medium" label="Medium" />
      <Chip02 size="large" label="Large" />
    </div>
  )
};
