import type { Meta, StoryObj } from '@storybook/react';
import { Code } from './Code';

const meta: Meta<typeof Code> = {
  title: 'Components/Code',
  component: Code,
  tags: ['autodocs'],
  args: {
    children: 'const greeting = "Hello, World!";'
  }
};

export default meta;
type Story = StoryObj<typeof Code>;

export const Default: Story = {
  args: {
    children: 'const greeting = "Hello, World!";',
    language: 'javascript'
  }
};

export const TypeScript: Story = {
  args: {
    children: `interface User {
  name: string;
  age: number;
}`,
    language: 'typescript'
  }
};

export const HTML: Story = {
  args: {
    children: '<div class="container">Hello World</div>',
    language: 'html'
  }
}; 