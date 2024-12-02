import type { Meta, StoryObj } from '@storybook/react';
import { Box } from './Box';

const meta: Meta<typeof Box> = {
  title: 'Components/Box',
  component: Box,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Box>;

export const Default: Story = {
  args: {
    children: 'Box Content',
    padding: '20px',
    backgroundColor: '#f0f0f0',
    borderRadius: '4px',
  },
};

export const CustomSized: Story = {
  args: {
    children: 'Custom Sized Box',
    width: '200px',
    height: '200px',
    padding: '20px',
    backgroundColor: '#e0e0e0',
    borderRadius: '8px',
  },
};

export const WithMargin: Story = {
  args: {
    children: 'Box with Margin',
    margin: '20px',
    padding: '20px',
    backgroundColor: '#d0d0d0',
    borderRadius: '4px',
  },
}; 