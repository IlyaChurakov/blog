import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Button, ButtonVariants } from './Button';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta = {
    title: 'shared/Button',
    component: Button,
    tags: ['autodocs'],
    args: { onClick: fn(), children: 'Text', },
} satisfies Meta<typeof Button>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Clear: Story = {
    args: {
        variant: ButtonVariants.CLEAR
    },
};

export const Outline: Story = {
    args: {
        variant: ButtonVariants.OUTLINE,
    },
};

export const Filled: Story = {
    args: {
        variant: ButtonVariants.FILLED,
    },
};

export const ClearDark: Story = {
    args: {
        variant: ButtonVariants.CLEAR
    },
    decorators: [ThemeDecorator(Theme.DARK)]
};

export const OutlineDark: Story = {
    args: {
        variant: ButtonVariants.OUTLINE,
    },
    decorators: [ThemeDecorator(Theme.DARK)]
};

export const FilledDark: Story = {
    args: {
        variant: ButtonVariants.FILLED,
    },
    decorators: [ThemeDecorator(Theme.DARK)]
};