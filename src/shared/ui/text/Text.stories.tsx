import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import type { Meta, StoryObj } from '@storybook/react';
import { Text, TextColors } from './Text';

const meta = {
  title: 'shared/Text',
  component: Text,
  tags: ['autodocs'],
  args: {},
} satisfies Meta<typeof Text>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { title: 'Some long title', text: 'Some example text' },
  decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const DefaultDark: Story = {
  args: { title: 'Some long title', text: 'Some example text' },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const Error: Story = {
  args: {
    title: 'Some long title',
    text: 'Some example text',
    color: TextColors.ERROR,
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const TitleOnly: Story = {
  args: { title: 'Some long title' },
  decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const TextOnly: Story = {
  args: { text: 'Some example text' },
  decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const SizeS: Story = {
  args: { title: 'Title', text: 'text', size: 's' },
  decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const SizeM: Story = {
  args: { title: 'Title', text: 'text', size: 'm' },
  decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const SizeL: Story = {
  args: { title: 'Title', text: 'text', size: 'l' },
  decorators: [ThemeDecorator(Theme.LIGHT)],
};
