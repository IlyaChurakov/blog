import { DeepPartial } from '@reduxjs/toolkit';
import { StoryFn } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/storeProvider';
import { loginReducer } from 'features';

const defaultAsyncReducers = { login: loginReducer };

export const StoreDecorator =
  (state: DeepPartial<StateSchema>) => (Story: StoryFn) => {
    return (
      <StoreProvider
        initialState={state as StateSchema}
        asyncReducers={defaultAsyncReducers}
      >
        <Story />
      </StoreProvider>
    );
  };
