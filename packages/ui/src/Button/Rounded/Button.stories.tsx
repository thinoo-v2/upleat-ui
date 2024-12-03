import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../Button';

const meta = {
  title: 'Components/Button/Rounded',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Sqare: Story = {
  args: {
    children: 'Button',
    rounded: 'sqare',
  },
};

export const Rounded: Story = {
  args: {
    children: 'Button',
    rounded: 'rounded',
  },
};

export const Solid: Story = {
  args: {
    children: 'Button',
    rounded: 'solid',
  },
};
