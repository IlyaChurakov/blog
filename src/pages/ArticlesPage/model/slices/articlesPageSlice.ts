import {
  createEntityAdapter,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/storeProvider';
import { Article, ArticleSortField } from 'entities/Article';
import { ArticleView } from 'entities/Article/model/types/article';
import { ARTICLES_VIEW_LS_KEY } from 'shared/const/localstorage';
import { SortOrder } from 'shared/types/index';
import { fetchArticles } from '../services/fetchArticles';
import { ArticlesPageSchema } from '../types/articlesPage';

const articlesAdapter = createEntityAdapter<Article>({
  selectId: (articles) => articles.id,
});

export const getArticles = articlesAdapter.getSelectors<StateSchema>(
  (state) => state.articlesPageSlice || articlesAdapter.getInitialState(),
);

const articlesPageSlice = createSlice({
  name: 'articlesPageSlice',
  initialState: articlesAdapter.getInitialState<ArticlesPageSchema>({
    ids: [],
    entities: {},
    isLoading: false,
    error: undefined,
    view: 'list',
    page: 1,
    limit: 6,
    search: '',
    order: 'asc',
    sort: ArticleSortField.CREATED,
    hasMore: true,
    _inited: false,
  }),
  reducers: {
    setSort: (state, action: PayloadAction<ArticleSortField>) => {
      state.sort = action.payload;
    },
    setType: (state, action: PayloadAction<string | undefined>) => {
      state.type = action.payload;
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    setOrder: (state, action: PayloadAction<SortOrder>) => {
      state.order = action.payload;
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    setView: (state, action: PayloadAction<ArticleView>) => {
      state.view = action.payload;
      localStorage.setItem(ARTICLES_VIEW_LS_KEY, action.payload);
    },
    initView: (state) => {
      const view = localStorage.getItem(ARTICLES_VIEW_LS_KEY) as ArticleView;
      state.view = view;
      state.limit = view === 'list' ? 3 : 6;
      state._inited = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticles.pending, (state, action) => {
        state.error = undefined;
        state.isLoading = true;

        if (action.meta.arg?.replace) {
          articlesAdapter.removeAll(state);
        }
      })
      .addCase(fetchArticles.fulfilled, (state, action) => {
        state.isLoading = false;

        if (action.meta.arg?.replace) {
          articlesAdapter.setAll(state, action.payload);
        } else {
          articlesAdapter.addMany(state, action.payload);
        }

        state.hasMore = action.payload.length >= state.limit;
      })
      .addCase(fetchArticles.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { actions: articlesPageActions, reducer: articlesPageReducer } =
  articlesPageSlice;
