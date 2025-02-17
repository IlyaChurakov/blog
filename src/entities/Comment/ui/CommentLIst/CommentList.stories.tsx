import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { CommentList } from './CommentList';

const meta = {
  title: 'entities/CommentList',
  component: CommentList,
  tags: ['autodocs'],
  args: {
    comments: [
      {
        id: '1',
        text: 'comment 1',
        articleId: '1',
        user: { id: '1', username: 'username' },
      },
    ],
    isLoading: false,
  },
} satisfies Meta<typeof CommentList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const DefaultDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const WithError: Story = {
  args: { error: 'some error' },
};

export const WithLoading: Story = {
  args: { isLoading: true },
};
