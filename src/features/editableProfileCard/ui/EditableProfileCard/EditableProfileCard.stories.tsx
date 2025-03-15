import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { EditableProfileCard } from './EditableProfileCard';

const meta = {
  title: 'features/EditableProfileCard',
  component: EditableProfileCard,
  tags: ['autodocs'],
  args: { id: '1' },
} satisfies Meta<typeof EditableProfileCard>;

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
