import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { CommentCard } from './CommentCard';

const meta = {
  title: 'entities/CommentCard',
  component: CommentCard,
  tags: ['autodocs'],
  args: {
    comment: {
      id: '1',
      text: 'comment 1',
      articleId: '1',
      user: { id: '1', username: 'username' },
    },
    isLoading: false,
  },
} satisfies Meta<typeof CommentCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const DefaultDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const WithLoading: Story = {
  args: { isLoading: true },
};
