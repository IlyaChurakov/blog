import { getProfileData } from './getProfileData';
import { StateSchema } from '@/app/providers/storeProvider';

describe('getProfileData', () => {
  const state: DeepPartial<StateSchema> = {
    profile: {
      data: {
        username: 'username',
      },
    },
  } as StateSchema;

  test('should return error', () => {
    expect(getProfileData(state as StateSchema)).toEqual({
      username: 'username',
    });
  });

  test('empty state', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getProfileData(state as StateSchema)).toEqual(undefined);
  });
});
