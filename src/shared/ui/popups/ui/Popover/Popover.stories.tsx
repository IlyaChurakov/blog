import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from '@/app/providers/ThemeProvider';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Button } from '@/shared/ui/button/Button';
import { Popover } from './Popover';

const meta = {
  title: 'entities/Popover',
  component: Popover,
  tags: ['autodocs'],
} satisfies Meta<typeof Popover>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { trigger: <Button>click me</Button> },
  decorators: [ThemeDecorator(Theme.LIGHT)],
};
