import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/storeProvider';
import { ArticleSortField } from 'entities/Article';
import { SortOrder } from 'shared/types';
import { fetchArticles } from '../fetchArticles';
import { getArticlesPageInited } from '../../selectors/articlesPage';
import { articlesPageActions } from '../../slices/articlesPageSlice';

export const initArticlesPage = createAsyncThunk<
  void,
  Record<string, string>,
  ThunkConfig<string>
>(
  'articlesPage/initArticlesPage',
  async (searchParams, { rejectWithValue, dispatch, getState }) => {
    try {
      const inited = getArticlesPageInited(getState());

      if (!inited) {
        const sort = searchParams.sort as ArticleSortField;
        const order = searchParams.order as SortOrder;
        const search = searchParams.search;
        const type = searchParams.type;

        if (sort) dispatch(articlesPageActions.setSort(sort));
        if (order) dispatch(articlesPageActions.setOrder(order));
        if (search) dispatch(articlesPageActions.setSearch(search));
        if (type) dispatch(articlesPageActions.setType(type));

        dispatch(articlesPageActions.initView());
        dispatch(fetchArticles());
      }
    } catch (e) {
      console.error(e);
      return rejectWithValue('error');
    }
  },
);
