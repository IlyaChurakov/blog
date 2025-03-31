import { StateSchema } from '@/app/providers/storeProvider/config/StateSchema';
import { getLoginIsLoading } from './getLoginIsLoading';

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
