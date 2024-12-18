import type { Meta, StoryObj } from '@storybook/react';
import { Chip03 } from './Chip03';

const meta: Meta<typeof Chip03> = {
  title: 'Components/Chip03',
  component: Chip03,
  tags: ['autodocs'],
  args: {
    children: 'Chip Content',
  },
};

export default meta;
type Story = StoryObj<typeof Chip03>;

export const Default: Story = {
  args: {
    variant: 'default',
    role: 'radio',
    fontSize: '_md',
    fontColor: '_colorGray',
    children: 'default Chip',
  },
};

export const Icons: Story = {
  args: {
    variant: 'icons',
    role: 'checkbox',
    fontSize: '_md',
    fontColor: '_colorGray',
    children: 'icons Chip',
  },
};

export const NotSelectable: Story = {
  args: {
    variant: 'default',
    role: 'null',
    fontSize: '_md',
    fontColor: '_colorGray',
    children: 'not selected Chip',
  },
};
