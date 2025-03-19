import { RouterDecorator } from './../../src/shared/config/storybook/RouterDecorator/RouterDecorator';
import { StoreDecorator } from './../../src/shared/config/storybook/StoreDecorator/StoreDecorator';
import { SuspenseDecorator } from './../../src/shared/config/storybook/SuspenseDecorator/SuspenseDecorator';
import { ThemeDecorator } from './../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Preview } from '@storybook/react';
import 'loki/configure-react';
import { Theme } from '../../src/app/providers/ThemeProvider';
import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator/StyleDecorator';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
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
