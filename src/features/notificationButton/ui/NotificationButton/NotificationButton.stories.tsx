import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import NotificationButton from './NotificationButton';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

const meta = {
  title: 'features/NotificationButton',
  component: NotificationButton,
  tags: ['autodocs'],
  args: { },
} satisfies Meta<typeof NotificationButton>;

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
