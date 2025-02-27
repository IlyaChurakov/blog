import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { fetchProfileData } from './fetchProfileData';
import { Profile } from '../../types/profile';

describe('fetchProdileData', () => {
  test('fetched', async () => {
    const profile: Profile = {
      id: '1',
      name: 'john doe',
      age: 20,
    };

    const thunk = new TestAsyncThunk(fetchProfileData);
    thunk.api.get.mockReturnValue(Promise.resolve({ data: profile }));

    const result = await thunk.callThunk('1');

    expect(result.payload).toEqual(profile);
  });

  test('error', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData);
    thunk.api.get.mockReturnValue(Promise.resolve({ error: 'Some error' }));

    const result = await thunk.callThunk(undefined);

    expect(result.payload).toBe('error');
    expect(result.meta.requestStatus).toBe('rejected');
  });
});
