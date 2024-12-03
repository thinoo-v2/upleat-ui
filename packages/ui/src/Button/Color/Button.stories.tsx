import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../Button';

const meta = {
  title: 'Components/Button/Color',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Button',
    variant: 'filled',
    color: 'default',
  },
};

export const Primary: Story = {
  args: {
    children: 'Button',
    variant: 'filled',
    color: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Button',
    variant: 'filled',
    color: 'secondary',
  },
};

export const Gray: Story = {
  args: {
    children: 'Button',
    variant: 'filled',
    color: 'gray',
  },
};

export const Success: Story = {
  args: {
    children: 'Button',
    variant: 'filled',
    color: 'success',
  },
};

export const Info: Story = {
  args: {
    children: 'Button',
    variant: 'filled',
    color: 'info',
  },
};

export const Warning: Story = {
  args: {
    children: 'Button',
    variant: 'filled',
    color: 'warning',
  },
};

export const Danger: Story = {
  args: {
    children: 'Button',
    variant: 'filled',
    color: 'danger',
  },
};

export const Light: Story = {
  args: {
    children: 'Button',
    variant: 'filled',
    color: 'light',
  },
};

export const Dark: Story = {
  args: {
    children: 'Button',
    variant: 'filled',
    color: 'dark',
  },
};
