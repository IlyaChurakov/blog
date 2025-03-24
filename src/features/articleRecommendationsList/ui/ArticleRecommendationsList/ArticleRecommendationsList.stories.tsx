import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from '@/app/providers/ThemeProvider';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
// import withMock from 'storybook-addon-mock';
import { ArticleRecommendationsList } from './ArticleRecommendationsList';

const article = {
  title: 'Article title',
  description: 'Article description',
  imageUrl: 'https://example.com/image.jpg',
  publishedAt: '2021-01-01T00:00:00.000Z',
  url: 'https://example.com/article',
};

const meta = {
  title: 'features/ArticleRecommendationsList',
  component: ArticleRecommendationsList,
  tags: ['autodocs'],
  args: {},
  parameters: {
    mockData: [
      {
        url: __API__ + '/articles?_limit=3',
        method: 'GET',
        status: 200,
        response: {
          articles: [
            { ...article, id: '1' },
            { ...article, id: '2' },
          ],
        },
      },
    ],
  },
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
