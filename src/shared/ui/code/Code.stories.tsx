import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import type { Meta, StoryObj } from '@storybook/react';
import { Code } from './Code';

const meta = {
  title: 'shared/Code',
  component: Code,
  tags: ['autodocs'],
  args: {},
} satisfies Meta<typeof Code>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    code: `export const Default: Story = {
      args: { code: '' },
      decorators: [ThemeDecorator(Theme.LIGHT)],
    };`,
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const DefaultDark: Story = {
  args: {
    code: `export const DefaultDark: Story = {
      args: { code: '' },
      decorators: [ThemeDecorator(Theme.DARK)],
    };`,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
