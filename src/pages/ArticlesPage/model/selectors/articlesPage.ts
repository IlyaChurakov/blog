import { StateSchema } from '@/app/providers/storeProvider/config/StateSchema';
import { ArticleSortField } from '@/entities/Article';

export const getArticlesPageIsLoading = (state: StateSchema) =>
  state.articlesPageSlice?.isLoading;
export const getArticlesPageError = (state: StateSchema) =>
  state.articlesPageSlice?.error;
export const getArticlesPageView = (state: StateSchema) =>
  state.articlesPageSlice?.view ?? 'tile';
export const getArticlesPagePage = (state: StateSchema) =>
  state.articlesPageSlice?.page ?? 1;
export const getArticlesPageLimit = (state: StateSchema) =>
  state.articlesPageSlice?.limit;
export const getArticlesPageHasMore = (state: StateSchema) =>
  state.articlesPageSlice?.hasMore;
export const getArticlesPageSort = (state: StateSchema) =>
  state.articlesPageSlice?.sort ?? ArticleSortField.CREATED;
export const getArticlesPageOrder = (state: StateSchema) =>
  state.articlesPageSlice?.order ?? 'asc';
export const getArticlesPageSearch = (state: StateSchema) =>
  state.articlesPageSlice?.search ?? '';
export const getArticlesPageType = (state: StateSchema) =>
  state.articlesPageSlice?.type;
export const getArticlesPageInited = (state: StateSchema) =>
  state.articlesPageSlice?._inited;
