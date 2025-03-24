import type { Meta, StoryObj } from '@storybook/react';
import { Rating } from './Rating';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta = {
  title: 'entities/Rating',
  component: Rating,
  tags: ['autodocs'],
} satisfies Meta<typeof Rating>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { },
  decorators: [ThemeDecorator(Theme.LIGHT)],
};
