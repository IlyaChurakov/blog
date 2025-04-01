import { RouterDecorator } from './../../src/shared/config/storybook/RouterDecorator/RouterDecorator';
import { StoreDecorator } from './../../src/shared/config/storybook/StoreDecorator/StoreDecorator';
import { SuspenseDecorator } from './../../src/shared/config/storybook/SuspenseDecorator/SuspenseDecorator';
import { ThemeDecorator } from './../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from './../../src/shared/const/theme';
import { Preview } from '@storybook/react';
import 'loki/configure-react';
import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator/StyleDecorator';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: 'fullscreen',
    themes: {
      default: 'light',
      list: [
        { name: 'light', class: Theme.LIGHT, color: '#ffffff' },
        { name: 'dark', class: Theme.DARK, color: '#000000' },
        { name: 'orange', class: Theme.ORANGE, color: '#ffa500' },
      ],
    },
  },
};

export const decorators = [
  StoreDecorator({ login: { username: 'admin', password: '1234' } }),
  ThemeDecorator(Theme.LIGHT),
  StyleDecorator,
  RouterDecorator,
  SuspenseDecorator,
];

export default preview;
