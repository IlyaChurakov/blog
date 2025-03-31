import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import avatar from '@/shared/assets/storybook/avatar.jpg';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import type { Meta, StoryObj } from '@storybook/react';
import { ProfileCard } from './ProfileCard';

const meta = {
  title: 'entities/ProfileCard',
  component: ProfileCard,
  args: {
    data: {
      avatar,
      username: 'john_doe',
      name: 'john',
      surname: 'doe',
      age: 32,
      currency: Currency.EUR,
      country: Country.Armenia,
      city: 'Ереван',
    },
  },
} satisfies Meta<typeof ProfileCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const DefaultDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const WithError: Story = {
  decorators: [StoreDecorator({ login: { error: 'Some error' } })],
  args: {
    error: 'Error',
  },
};

export const WithLoading: Story = {
  decorators: [StoreDecorator({ login: { isLoading: true } })],
  args: {
    isLoading: true,
  },
};
