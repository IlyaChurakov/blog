import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import LoginForm from './LoginForm';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

const meta = {
  title: 'features/LoginForm',
  component: LoginForm,
  tags: ['autodocs'],
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const DefaultDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const WithError: Story = {
  decorators: [StoreDecorator({ login: { error: 'Some error' } })],
};

export const WithLoading: Story = {
  decorators: [StoreDecorator({ login: { isLoading: true } })],
};
