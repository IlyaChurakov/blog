import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import img from '../avatar/image.jpg';

const meta = {
  title: 'entities/Card',
  component: Card,
  tags: ['autodocs'],
} satisfies Meta<typeof Card>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Tile: Story = {
  args: {
    view: 'tile',
    children: (
      <>
        <img src={img} style={{ width: '100px', aspectRatio: '1 / 1' }} />
        <div>descr</div>
      </>
    ),
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const List: Story = {
  args: {
    view: 'list',
    children: (
      <>
        <img src={img} style={{ width: '100px', aspectRatio: '1 / 1' }} />
        <div>descr</div>
      </>
    ),
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
};
