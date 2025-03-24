import { getProfileIsLoading } from './getProfileIsLoading';
import { StateSchema } from '@/app/providers/storeProvider';

describe('getProfileIsLoading', () => {
  test('should return error', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        isLoading: false,
      },
    } as StateSchema;

    expect(getProfileIsLoading(state as StateSchema)).toEqual(false);
  });

  test('empty state', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getProfileIsLoading(state as StateSchema)).toEqual(false);
  });
});
