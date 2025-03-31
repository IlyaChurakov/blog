import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import type { Meta, StoryObj } from '@storybook/react';
import { NotificationList } from './NotificationList';

const meta = {
  title: 'entities/NotificationList',
  component: NotificationList,
  tags: ['autodocs'],
} satisfies Meta<typeof NotificationList>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.LIGHT)],
};
