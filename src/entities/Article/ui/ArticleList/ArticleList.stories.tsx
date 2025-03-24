import type { Meta, StoryObj } from '@storybook/react';
import { ArticleList } from './ArticleList';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';

const meta = {
  title: 'entities/ArticleList',
  component: ArticleList,
  tags: ['autodocs'],
} satisfies Meta<typeof ArticleList>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { articles: [] },
  decorators: [ThemeDecorator(Theme.LIGHT)],
};
