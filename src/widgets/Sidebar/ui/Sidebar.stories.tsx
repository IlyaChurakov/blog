import type { Meta, StoryObj } from '@storybook/react';
import Sidebar from './Sidebar';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

const meta = {
  title: 'widget/Sidebar',
  component: Sidebar,
  tags: ['autodocs'],
} satisfies Meta<typeof Sidebar>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  decorators: [
    ThemeDecorator(Theme.LIGHT),
    StoreDecorator({ user: { authData: { id: '1', username: 'john doe' } } }),
  ],
};

export const DefaultDark: Story = {
  decorators: [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({ user: { authData: { id: '1', username: 'john doe' } } }),
  ],
};

export const Unauthorized: Story = {
  decorators: [ThemeDecorator(Theme.LIGHT), StoreDecorator({ user: {} })],
};
