import type { Meta, StoryObj } from '@storybook/react';
import { HStack } from './HStack';

const meta: Meta<typeof HStack> = {
  title: 'Components/HStack',
  component: HStack,
  tags: ['autodocs'],
  args: {
    children: 'HStack Content'
  }
};

export default meta;
type Story = StoryObj<typeof HStack>;

export const Default: Story = {
  args: {
    variant: 'default',
    children: 'This is a default HStack'
  }
};

export const Bordered: Story = {
  args: {
    variant: 'bordered',
    children: 'This is a bordered HStack'
  }
}; 

export const Xs: Story = {
  args: {
    gap: 'xs',
    children: 'This is a Gap HStack'
  }
}; 

export const Sm: Story = {
  args: {
    gap: 'sm',
    children: 'This is a Gap HStack'
  }
}; 

export const Md: Story = {
  args: {
    gap: 'md',
    children: 'This is a Gap HStack'
  }
}; 

export const lg: Story = {
  args: {
    gap: 'lg',
    children: 'This is a Gap HStack'
  }
}; 

export const Xl: Story = {
  args: {
    gap: 'xl',
    children: 'This is a Gap HStack'
  }
}; 