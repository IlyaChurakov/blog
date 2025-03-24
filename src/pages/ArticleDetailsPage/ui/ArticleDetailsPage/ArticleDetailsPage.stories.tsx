import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from '@/app/providers/ThemeProvider';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import ArticleDetailsPage from './ArticleDetailsPage';

const meta = {
  title: 'pages/ArticleDetailsPage',
  component: ArticleDetailsPage,
  tags: ['autodocs'],
} satisfies Meta<typeof ArticleDetailsPage>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const DefaultDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const Unauthorized: Story = {
  decorators: [ThemeDecorator(Theme.LIGHT)],
};
