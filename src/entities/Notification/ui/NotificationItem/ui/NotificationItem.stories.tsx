import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import type { Meta, StoryObj } from '@storybook/react';
import { NotificationItem } from './NotificationItem';

const meta = {
  title: 'entities/NotificationItem',
  component: NotificationItem,
  tags: ['autodocs'],
} satisfies Meta<typeof NotificationItem>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    notification: { id: '1', title: 'Title', description: 'Description' },
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
};
