import { StateSchema } from '@/app/providers/storeProvider/config/StateSchema';
import { getLoginPassword } from './getLoginPassword';

describe('getLoginPassword', () => {
  const state: DeepPartial<StateSchema> = {
    login: {
      password: 'some password',
    },
  };

  test('should return error', () => {
    expect(getLoginPassword(state as StateSchema)).toEqual('some password');
  });

  test('empty state', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getLoginPassword(state as StateSchema)).toEqual('');
  });
});
