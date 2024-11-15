import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  args: {
    children: 'Card Content'
  }
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    variant: 'default',
    children: 'This is a default card'
  }
};

export const Bordered: Story = {
  args: {
    variant: 'bordered',
    children: 'This is a bordered card'
  }
}; 