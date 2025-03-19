import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import ForbiddenPage from './ForbiddenPage';

const meta = {
  title: 'pages/ForbiddenPage',
  component: ForbiddenPage,
  tags: ['autodocs'],
} satisfies Meta<typeof ForbiddenPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  decorators: [ThemeDecorator(Theme.LIGHT)]
};

export const DefaultDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)]
};