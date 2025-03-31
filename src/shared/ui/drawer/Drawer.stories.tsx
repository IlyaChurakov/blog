import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import type { Meta, StoryObj } from '@storybook/react';
import { Drawer } from './Drawer';

const meta = {
  title: 'shared/Drawer',
  component: Drawer,
  tags: ['autodocs'],
} satisfies Meta<typeof Drawer>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { isOpen: true, children: 'Drawer content' },
  decorators: [ThemeDecorator(Theme.LIGHT)],
};
