import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import type { Meta, StoryObj } from '@storybook/react';
import { AppImage } from './AppImage';

const meta = {
  title: 'entities/AppImage',
  component: AppImage,
  tags: ['autodocs'],
} satisfies Meta<typeof AppImage>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.LIGHT)],
};
