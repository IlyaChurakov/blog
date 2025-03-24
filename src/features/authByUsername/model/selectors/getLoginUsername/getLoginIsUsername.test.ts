import { getLoginUsername } from './getLoginUsername';
import { StateSchema } from '@/app/providers/storeProvider';

describe('getLoginUsername', () => {
  const state: DeepPartial<StateSchema> = {
    login: {
      username: 'some username',
    },
  };

  test('should return error', () => {
    expect(getLoginUsername(state as StateSchema)).toEqual('some username');
  });

  test('empty state', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getLoginUsername(state as StateSchema)).toEqual('');
  });
});
