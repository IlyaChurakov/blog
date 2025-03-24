import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from '@/app/providers/ThemeProvider';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Button } from '@/shared/ui/button/Button';
import { Dropdown } from './Dropdown';

const meta = {
  title: 'shared/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
} satisfies Meta<typeof Dropdown>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    trigger: <Button>button</Button>,
    items: [
      { content: <p>link 1</p> },
      { content: <p>link 2</p>, disable: true },
    ],
    direction: 'bottom left',
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
};
