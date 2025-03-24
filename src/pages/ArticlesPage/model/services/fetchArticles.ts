import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/storeProvider';
import { Article } from '@/entities/Article';
import { addQueryParams } from '@/shared/lib/url/addQueryParams/addQueryParams';
import {
  getArticlesPageLimit,
  getArticlesPageOrder,
  getArticlesPagePage,
  getArticlesPageSearch,
  getArticlesPageSort,
  getArticlesPageType,
  getArticlesPageView,
} from '../selectors/articlesPage';

interface fetchArticlesProps {
  replace?: boolean;
}

export const fetchArticles = createAsyncThunk<
  Article[],
  fetchArticlesProps | undefined,
  ThunkConfig<string>
>(
  'articlesPage/fetchArticles',
  async (_, { extra, rejectWithValue, getState }) => {
    const state = getState();

    const view = getArticlesPageView(state);
    const defaultLimit = view === 'list' ? 3 : 6;
    const limit = getArticlesPageLimit(state) ?? defaultLimit;
    const sort = getArticlesPageSort(state);
    const order = getArticlesPageOrder(state);
    const search = getArticlesPageSearch(state);
    const page = getArticlesPagePage(state) ?? 1;
    const type = getArticlesPageType(state);

    try {
      addQueryParams({ sort, order, search, type });

      const response = await extra.api.get<Article[]>(`/articles/`, {
        params: {
          _expand: 'user',
          _page: page,
          _limit: limit,
          _sort: sort,
          _order: order,
          q: search,
          type_like: type,
        },
      });
      if (!response.data) throw new Error();

      return response.data;
    } catch (e) {
      console.error(e);
      return rejectWithValue('error');
    }
  },
);
