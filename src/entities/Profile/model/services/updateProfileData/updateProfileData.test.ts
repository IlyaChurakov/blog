import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { Profile } from '../../types/profile';
import { updateProfileData } from './updateProfileData';

describe('updateProfileData', () => {
  test('updated', async () => {
    const profile: Profile = {
      id: '1',
      name: 'john doe',
      age: 20,
    };

    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: profile,
      },
    });
    thunk.api.put.mockReturnValue(Promise.resolve({ data: profile }));

    const result = await thunk.callThunk();

    expect(result.payload).toEqual(profile);
  });

  test('server error', async () => {
    const profile: Profile = {
      id: '1',
      name: 'john doe',
      age: 20,
    };

    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: profile,
      },
    });
    thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));

    const result = await thunk.callThunk();

    expect(result.payload).toBe('Error');
  });

  test('client error', async () => {
    const profile: Profile = {
      id: '1',
      name: 'john doe',
      age: 15,
    };

    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: profile,
      },
    });

    const result = await thunk.callThunk();

    expect(result.payload).toEqual({ age: 'Возрастное ограничение 18+' });
  });
});
