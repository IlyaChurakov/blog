import { DeepPartial } from '@reduxjs/toolkit';
import { getLoginError } from './getLoginError';
import { StateSchema } from 'app/providers/storeProvider';

describe('getLoginError', () => {
  const state: DeepPartial<StateSchema> = {
    login: {
      error: 'some error',
    },
  };

  test('should return error', () => {
    expect(getLoginError(state as StateSchema)).toEqual('some error');
  });

  test('empty state', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getLoginError(state as StateSchema)).toEqual(undefined);
  });
});
