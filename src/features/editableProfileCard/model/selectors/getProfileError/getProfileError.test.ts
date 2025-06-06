import { StateSchema } from '@/app/providers/storeProvider/config/StateSchema';
import { getProfileError } from './getProfileError';

describe('getProfileError', () => {
  const state: DeepPartial<StateSchema> = {
    profile: {
      error: 'some error',
    },
  } as StateSchema;

  test('should return error', () => {
    expect(getProfileError(state as StateSchema)).toEqual('some error');
  });

  test('empty state', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getProfileError(state as StateSchema)).toEqual(undefined);
  });
});
