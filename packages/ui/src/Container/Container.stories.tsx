import type { Meta, StoryObj } from '@storybook/react';
import { Container } from './Container';

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
        type: { summary: 'default | fluid' },
      },
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl', 'xxl', null],
      description: '컨테이너 최대 너비',
      table: {
        defaultValue: { summary: 'md' },
        type: { summary: 'sm | md | lg | xl | xxl' },
      },
    },
    height: {
      control: 'text',
      description: '컨테이너 높이 (CSS 값)',
      table: {
        defaultValue: { summary: 'auto' },
      },
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
      description: '데모 모드 활성화 (스트라이프 패턴 표시)',
      table: {
        defaultValue: { summary: false },
      },
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
  parameters: {
    viewport: {
      defaultViewport: 'responsive',
    },
    docs: {
      description: {
        story: '선택한 사이즈에 따라 컨테이너의 최대 너비가 자동으로 조정됩니다.',
      },
    },
  },
};

export const DefaultWithoutSize: Story = {
  args: {
    variant: 'default',
    children: '사이즈 속성을 지정하지 않은 컨테이너입니다.',
    isDemo: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'size prop을 지정하지 않으면 기본 최대 너비(1440px)를 사용합니다.',
      },
    },
  },
};

export const CustomMaxWidth: Story = {
  args: {
    variant: 'default',
    maxWidth: '1200px',
    children: '커스텀 최대 너비를 사용하는 컨테이너입니다.',
    isDemo: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'maxWidth prop으로 기본 최대 너비를 조정할 수 있습니다.',
      },
    },
  },
};

export const Fluid: Story = {
  args: {
    variant: 'fluid',
    children: '전체 너비 컨테이너입니다.',
    isDemo: true,
  },
  parameters: {
    docs: {
      description: {
        story: '부모 컨테이너의 최대 너비를 사용합니다.',
      },
    },
  },
};

export const CustomPadding: Story = {
  args: {
    variant: 'default',
    size: 'md',
    padding: '32px 32px',
    children: '커스텀 패딩 값을 가진 컨테이너입니다.',
    isDemo: true,
  },
  parameters: {
    docs: {
      description: {
        story: '패딩 값을 커스텀할 수 있습니다.',
      },
    },
  },
};

export const CustomHeight: Story = {
  args: {
    variant: 'default',
    size: 'md',
    height: '200px',
    children: '커스텀 높이 값을 가진 컨테이너입니다.',
    isDemo: true,
  },
  parameters: {
    docs: {
      description: {
        story: '높이 값을 커스텀할 수 있습니다.',
      },
    },
  },
};
