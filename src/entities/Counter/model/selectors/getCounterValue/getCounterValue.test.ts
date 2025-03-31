import { StateSchema } from '@/app/providers/storeProvider/config/StateSchema';
import { getCounterValue } from './getCounterValue';

describe('getCounterValue', () => {
  test('should return counter value', () => {
    const state: DeepPartial<StateSchema> = {
      counter: {
        value: 0,
      },
    };
    expect(getCounterValue(state as StateSchema)).toEqual(0);
  });
});
