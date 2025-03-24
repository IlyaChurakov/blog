import type { Meta, StoryObj } from '@storybook/react';
import { StarRating } from './StarRating';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta = {
  title: 'entities/StarRating',
  component: StarRating,
  tags: ['autodocs'],
} satisfies Meta<typeof StarRating>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { },
  decorators: [ThemeDecorator(Theme.LIGHT)],
};
