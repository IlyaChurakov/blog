import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './Avatar';
import image from './image.jpg';

const meta = {
  title: 'shared/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  args: {
    src: image,
  },
} satisfies Meta<typeof Avatar>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    size: 50,
  },
};
