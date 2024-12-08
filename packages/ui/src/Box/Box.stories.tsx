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
    text: 'Box Content',
    padding: '20px',
    margin: '20px',
    width: '200px',
    height: '200px',
    backgroundColor: '#f0f0f0',
    borderRadius: '4px',
    className: 'custom-box'
  }
};