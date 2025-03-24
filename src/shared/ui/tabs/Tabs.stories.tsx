import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from '@/app/providers/ThemeProvider';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Tabs } from './Tabs';

const meta = {
  title: 'entities/Tabs',
  component: Tabs,
  tags: ['autodocs'],
} satisfies Meta<typeof Tabs>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    tabs: [
      { value: 'IT', content: <div>IT</div> },
      { value: 'ECONOMICS', content: <div>ECONOMICS</div> },
      { value: 'POLITIC', content: <div>POLITIC</div> },
    ],
    value: 'ECONOMICS',
    onTabClick: () => console.log('f'),
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
};
