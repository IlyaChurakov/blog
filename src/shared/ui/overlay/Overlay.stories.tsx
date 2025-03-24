import type { Meta, StoryObj } from '@storybook/react';
import { Overlay } from './Overlay';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';

const meta = {
  title: 'entities/Overlay',
  component: Overlay,
  tags: ['autodocs'],
} satisfies Meta<typeof Overlay>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { },
  decorators: [ThemeDecorator(Theme.LIGHT)],
};
