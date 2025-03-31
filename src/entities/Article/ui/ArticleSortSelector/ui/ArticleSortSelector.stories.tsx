import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import type { Meta, StoryObj } from '@storybook/react';
import { ArticleSortSelector } from './ArticleSortSelector';
import { ArticleSortField } from '../../../model/consts/consts';

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
