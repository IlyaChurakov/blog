import { StoryFn } from '@storybook/react';
import { StoreProvider } from 'app/providers/storeProvider';

export const StoreDecorator = (Story: StoryFn) => {
    return (
        <StoreProvider>
            <Story />
        </StoreProvider>
    );
};