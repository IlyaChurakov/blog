import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from '@/app/providers/ThemeProvider';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Drawer } from './Drawer';

const meta = {
  title: 'entities/Drawer',
  component: Drawer,
  tags: ['autodocs'],
} satisfies Meta<typeof Drawer>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { isOpen: true, children: 'Drawer content' },
  decorators: [ThemeDecorator(Theme.LIGHT)],
};
