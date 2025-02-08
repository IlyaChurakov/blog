import { getCounter } from './getCounter';
import { StateSchema } from 'app/providers/storeProvider';

describe('getCounter', () => {
  test('should return counter', () => {
    const state: DeepPartial<StateSchema> = {
      counter: {
        value: 0,
      },
    };
    expect(getCounter(state as StateSchema)).toEqual({ value: 0 });
  });
});
