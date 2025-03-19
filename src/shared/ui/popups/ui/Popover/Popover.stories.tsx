import type { Meta, StoryObj } from '@storybook/react';
import { Popover } from './Popover';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta = {
  title: 'entities/Popover',
  component: Popover,
  tags: ['autodocs'],
} satisfies Meta<typeof Popover>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { },
  decorators: [ThemeDecorator(Theme.LIGHT)],
};
