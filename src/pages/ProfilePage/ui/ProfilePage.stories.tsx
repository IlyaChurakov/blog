import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import ProfilePage from './ProfilePage';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';
import avatar from '@/shared/assets/storybook/avatar.jpg';

const meta = {
  title: 'pages/ProfilePage',
  component: ProfilePage,
  tags: ['autodocs'],
  decorators: [
    StoreDecorator({
      profile: {
        form: {
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
    }),
  ],
} satisfies Meta<typeof ProfilePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const DefaultDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};
