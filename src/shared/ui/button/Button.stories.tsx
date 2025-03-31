import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Button, ButtonSizes, ButtonVariants } from './Button';

const meta = {
  title: 'shared/Button',
  component: Button,
  tags: ['autodocs'],
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Text: Story = {
  args: {
    children: 'TEXT',
    variant: ButtonVariants.TEXT,
  },
};

export const Outline: Story = {
  args: {
    children: 'OUTLINE',
    variant: ButtonVariants.OUTLINE,
  },
};

export const Contained: Story = {
  args: {
    children: 'CONTAINED',
    variant: ButtonVariants.CONTAINED,
  },
};

export const TextDark: Story = {
  args: {
    children: 'TEXT DARK',
    variant: ButtonVariants.TEXT,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const OutlineDark: Story = {
  args: {
    children: 'OUTLINE DARK',
    variant: ButtonVariants.OUTLINE,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const ContainedDark: Story = {
  args: {
    children: 'CONTAINED DARK',
    variant: ButtonVariants.CONTAINED,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const Square: Story = {
  args: {
    square: true,
    size: ButtonSizes.L,
    children: 'S',
    variant: ButtonVariants.OUTLINE,
  },
};

export const SizeS: Story = {
  args: {
    size: ButtonSizes.S,
    children: 'S',
    variant: ButtonVariants.OUTLINE,
  },
};

export const SizeM: Story = {
  args: {
    size: ButtonSizes.M,
    children: 'M',
    variant: ButtonVariants.OUTLINE,
  },
};

export const SizeL: Story = {
  args: {
    size: ButtonSizes.L,
    children: 'L',
    variant: ButtonVariants.OUTLINE,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
