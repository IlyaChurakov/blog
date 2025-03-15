import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { ArticleRecommendationsList } from './ArticleRecommendationsList';

const meta = {
  title: 'features/ArticleRecommendationsList',
  component: ArticleRecommendationsList,
  tags: ['autodocs'],
  args: {},
} satisfies Meta<typeof ArticleRecommendationsList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const WithError: Story = {
  decorators: [StoreDecorator({ newComment: { error: 'some error' } })],
};

export const WithLoading: Story = {
  decorators: [StoreDecorator({ newComment: { isLoading: true } })],
};
