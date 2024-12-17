import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../Button';

const meta = {
  title: 'Components/Button/Variant',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Filled: Story = {
  args: {
    children: 'Button',
    variant: 'filled',
  },
};

export const Oulined: Story = {
  args: {
    children: 'Button',
    variant: 'oulined',
  },
};

export const Dashed: Story = {
  args: {
    children: 'Button',
    variant: 'dashed',
  },
};

export const Ghost: Story = {
  args: {
    children: 'Button',
    variant: 'ghost',
  },
};

export const LinkType: Story = {
  args: {
    children: 'Button',
    variant: 'link',
  },
};
