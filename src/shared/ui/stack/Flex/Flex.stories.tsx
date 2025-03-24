import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from '@/app/providers/ThemeProvider';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Flex } from './Flex';

const meta = {
  title: 'entities/Flex',
  component: Flex,
  tags: ['autodocs'],
} satisfies Meta<typeof Flex>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <div>Start</div>
        <div>Center</div>
        <div>End</div>
      </>
    ),
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
};
