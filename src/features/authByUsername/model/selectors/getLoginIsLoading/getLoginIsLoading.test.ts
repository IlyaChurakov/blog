import { getLoginIsLoading } from './getLoginIsLoading';
import { StateSchema } from '@/app/providers/storeProvider';

describe('getLoginIsLoading', () => {
  test('should return error', () => {
    const state: DeepPartial<StateSchema> = {
      login: {
        isLoading: false,
      },
    };

    expect(getLoginIsLoading(state as StateSchema)).toEqual(false);
  });

  test('empty state', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getLoginIsLoading(state as StateSchema)).toEqual(false);
  });
});
