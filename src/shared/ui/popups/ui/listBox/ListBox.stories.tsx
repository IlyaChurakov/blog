import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import type { Meta, StoryObj } from '@storybook/react';
import { ListBox } from './ListBox';

const meta = {
  title: 'shared/ListBox',
  component: ListBox,
  tags: ['autodocs'],
} satisfies Meta<typeof ListBox>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [
      { value: '1', content: <div>1</div> },
      { value: '2', content: <div>2</div> },
      { value: '3', content: <div>3</div> },
      { value: '4', content: <div>4</div> },
    ],
    value: '1',
    defaultValue: '1',
    onChange: () => {},
    direction: 'top right',
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
};
