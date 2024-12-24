import type { Meta, StoryObj } from '@storybook/react';
import Sidebar from './Sidebar';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta = {
    title: 'widget/Sidebar',
    component: Sidebar,
    tags: ['autodocs'],
} satisfies Meta<typeof Sidebar>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
    
    },
    decorators: [ThemeDecorator(Theme.LIGHT)]
};

export const DefaultDark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)]
};