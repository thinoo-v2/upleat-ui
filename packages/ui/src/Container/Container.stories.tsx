import type { Meta, StoryObj } from '@storybook/react';
import { Container } from './Container';
import { describe } from 'node:test';
import { InputDescription } from '@mantine/core';
// Container 컴포넌트의 Storybook 설정
const meta: Meta<typeof Container> = {
  title: 'components/Container', // 스토리북 사이드바에서 표시될 경로
  component: Container,
  parameters: {},
  tags: ['autodocs'],
  argTypes: {
    fluid: {
      control: 'boolean',
      description: '전체 너비 사용 여부',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl', 'xxl'],
      description: '컨테이너 크기',
    },
    customHeight: {
      control: 'text',
      description: '컨테이너 높이',
    },
    padding: {
      control: 'text',
      description: '내부 여백',
    },
    className: {
      control: 'text',
      description: '확장 클래스 명',
    },
  },
} satisfies Meta<typeof Container>;

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 컨테이너
export const Default: Story = {
  args: {
    fluid: false,
    size: 'md',
    children: '기본 컨테이너입니다.',
    padding: '16px 16px',
    className: 'demo',
  },
};

// Fluid 컨테이너
export const Fluid: Story = {
  args: {
    fluid: true,
    children: '전체 너비 컨테이너입니다.',
    className: 'demo',
  },
};
