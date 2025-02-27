import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/storeProvider';
import { fetchArticles } from '../fetchArticles';
import {
  getArticlesPageHasMore,
  getArticlesPageIsLoading,
  getArticlesPagePage,
} from '../../selectors/articlesPage';
import { articlesPageActions } from '../../slices/articlesPageSlice';

export const fetchNextArticles = createAsyncThunk<
  void,
  void,
  ThunkConfig<string>
>(
  'articlesPage/fetchNextArticles',
  async (_, { rejectWithValue, getState, dispatch }) => {
    try {
      const hasMore = getArticlesPageHasMore(getState());
      const page = getArticlesPagePage(getState());
      const isLoading = getArticlesPageIsLoading(getState());

      if (hasMore && !isLoading) {
        const nextPage = page + 1;

        dispatch(articlesPageActions.setPage(nextPage));
        dispatch(fetchArticles());
      }
    } catch (e) {
      console.error(e);
      return rejectWithValue('error');
    }
  },
);
