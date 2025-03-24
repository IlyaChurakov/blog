import type { Meta, StoryObj } from '@storybook/react';
import Skeleton from './Skeleton';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';

const meta = {
  title: 'shared/Skeleton',
  component: Skeleton,
  tags: ['autodocs'],
} satisfies Meta<typeof Skeleton>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Circle: Story = {
  args: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const CircleDark: Story = {
  args: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const CircleOrange: Story = {
  args: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  decorators: [ThemeDecorator(Theme.ORANGE)],
};

export const RectangleDark: Story = {
  args: {
    width: 1000,
    height: 50,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
