import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../Button';

const meta = {
  title: 'Components/Button/Sizes',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Xs: Story = {
  args: {
    children: 'Button',
    sizes: 'xs',
  },
};

export const Sm: Story = {
  args: {
    children: 'Button',
    sizes: 'sm',
  },
};

export const Md: Story = {
  args: {
    children: 'Button',
    sizes: 'md',
  },
};

export const Lg: Story = {
  args: {
    children: 'Button',
    sizes: 'lg',
  },
};

export const Xl: Story = {
  args: {
    children: 'Button',
    sizes: 'xl',
  },
};
