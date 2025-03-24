import type { Meta, StoryObj } from '@storybook/react';
import AppLink, { AppLinkVariants } from './AppLink';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';

const meta = {
  title: 'shared/AppLink',
  component: AppLink,
  tags: ['autodocs'],
  args: { to: '#', children: 'Link', },
} satisfies Meta<typeof AppLink>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: AppLinkVariants.PRIMARY
  },
};

export const Secondary: Story = {
  args: {
    variant: AppLinkVariants.SECONDARY
  },
};

export const PrimaryDark: Story = {
  args: {
    variant: AppLinkVariants.PRIMARY
  },
  decorators: [ThemeDecorator(Theme.DARK)]
};

export const SecondaryDark: Story = {
  args: {
    variant: AppLinkVariants.SECONDARY
  },
  decorators: [ThemeDecorator(Theme.DARK)]
};