import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ArticleSortField } from 'entities/Article/model/types/article';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { ArticleSortSelector } from './ArticleSortSelector';

const meta = {
  title: 'entities/ArticleSortSelector',
  component: ArticleSortSelector,
  tags: ['autodocs'],
} satisfies Meta<typeof ArticleSortSelector>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    sort: ArticleSortField.CREATED,
    order: 'asc',
    onChangeSort: () => console.log('fdf'),
    onChangeOrder: () => console.log('fs'),
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
};
