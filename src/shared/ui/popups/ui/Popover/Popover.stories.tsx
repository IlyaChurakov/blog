import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import type { Meta, StoryObj } from '@storybook/react';
import { Popover } from './Popover';
import { Button } from '../../../button/Button';

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
