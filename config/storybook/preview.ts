import { StoreDecorator } from './../../src/shared/config/storybook/StoreDecorator/StoreDecorator';
import { RouterDecorator } from './../../src/shared/config/storybook/RouterDecorator/RouterDecorator';
import { ThemeDecorator } from './../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator/StyleDecorator';
import { Preview } from "@storybook/react";
import { Theme } from '../../src/app/providers/ThemeProvider';
import 'loki/configure-react'

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

global.__IS_DEV__ = true;

export const decorators = [StoreDecorator, ThemeDecorator(Theme.LIGHT), StyleDecorator, RouterDecorator];

export default preview;
