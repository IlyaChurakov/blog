import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { Profile } from '../../types/profile';
import { fetchProfileData } from './fetchProfileData';

describe('validateProdileData', () => {
  test('fetched', async () => {
    const profile: Profile = {
      name: 'john doe',
      age: 20,
    };

    const thunk = new TestAsyncThunk(fetchProfileData);
    thunk.api.get.mockReturnValue(Promise.resolve({ data: profile }));

    const result = await thunk.callThunk();

    expect(result.payload).toEqual(profile);
  });

  test('error', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData);
    thunk.api.get.mockReturnValue(Promise.resolve({ error: 'Some error' }));

    const result = await thunk.callThunk();

    expect(result.payload).toBe('error');
    expect(result.meta.requestStatus).toBe('rejected');
  });
});
