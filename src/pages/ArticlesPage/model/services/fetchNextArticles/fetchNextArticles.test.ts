import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { fetchNextArticles } from './fetchNextArticles';
import { fetchArticles } from '../fetchArticles';

jest.mock('../fetchArticles');

describe('fetchNextArticles', () => {
  test('success', async () => {
    const thunk = new TestAsyncThunk(fetchNextArticles, {
      articlesPageSlice: {
        page: 2,
        ids: [],
        entities: {},
        limit: 5,
        isLoading: false,
        hasMore: true,
      },
    });

    await thunk.callThunk();

    expect(thunk.dispatch).toBeCalledTimes(4);
  });

  test('fetchArticles not called', async () => {
    const thunk = new TestAsyncThunk(fetchNextArticles, {
      articlesPageSlice: {
        page: 2,
        ids: [],
        entities: {},
        limit: 5,
        isLoading: false,
      },
    });

    await thunk.callThunk();

    expect(thunk.dispatch).toBeCalledTimes(2);
    expect(fetchArticles).not.toHaveBeenCalled();
  });
});
