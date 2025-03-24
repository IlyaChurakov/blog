import { StateSchema } from '@/app/providers/storeProvider';

export const getArticleDetailsCommentsIsLoading = (state: StateSchema) =>
  state.articleDetailsPage?.articleDetailsComments?.isLoading;
export const getArticleDetailsCommentsError = (state: StateSchema) =>
  state.articleDetailsPage?.articleDetailsComments?.error;
