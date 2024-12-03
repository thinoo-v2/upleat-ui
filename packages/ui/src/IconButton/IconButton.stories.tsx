import type { Meta, StoryObj } from '@storybook/react';
import { IconButton } from './IconButton';

const meta: Meta<typeof IconButton> = {
  title: 'Components/IconButton',
  component: IconButton,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '컴포넌트 식별자 ID: IconButton',
        story: 'IconButton 컴포넌트입니다.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const OnlyIconType: Story = {
  args: {
    iconName: 'chevronDown',
    isDataIcon: false,
    iconTypeSize: 24,
  },
  parameters: {
    docs: {
      description: {
        story: '아이콘형 아이콘 타입',
      },
    },
  },
};

export const IconTextType: Story = {
  args: {
    isDataIcon: true,
    dataicon: 'OZ',
    textTypeSize: 'md',
    label: '아시아나항공',
  },
  parameters: {
    docs: {
      description: {
        story: '아이콘형 + 텍스트 아이콘 타입',
      },
    },
  },
};
