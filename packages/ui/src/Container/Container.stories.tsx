import type { Meta, StoryObj } from '@storybook/react';
import { Container, ContainerProps } from './Container';

const meta = {
  title: 'Components/Container',
  component: Container,
  parameters: {
    docs: {
      description: {
        component: '콘텐츠를 감싸는 반응형 컨테이너 컴포넌트입니다.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'fluid'],
      description: '컨테이너 변형 타입',
      table: {
        defaultValue: { summary: 'default' },
      },
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl', 'xxl'],
      description: '컨테이너 최대 너비',
      table: {
        defaultValue: { summary: 'md' },
      },
    },
    customHeight: {
      control: 'text',
      description: '컨테이너 높이 (CSS 값)',
    },
    padding: {
      control: 'text',
      description: '패딩 값 (CSS 값)',
      table: {
        defaultValue: { summary: '16px' },
      },
    },
    className: {
      control: 'text',
      description: '추가 CSS 클래스',
    },
    isDemo: {
      control: 'boolean',
      description: '데모 모드 활성화',
    },
  },
} satisfies Meta<typeof Container>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'default',
    size: 'md',
    children: '기본 컨테이너입니다.',
    isDemo: true,
  },
};

export const Fluid: Story = {
  args: {
    variant: 'fluid',
    children: '전체 너비 컨테이너입니다.',
    isDemo: true,
  },
};

export const CustomPadding: Story = {
  args: {
    variant: 'default',
    size: 'md',
    padding: '32px 16px',
    children: '커스텀 패딩 값을 가진 컨테이너입니다.',
    isDemo: true,
  },
};

export const CustomHeight: Story = {
  args: {
    variant: 'default',
    size: 'md',
    customHeight: '200px',
    children: '커스텀 높이 값을 가진 컨테이너입니다.',
    isDemo: true,
  },
};
