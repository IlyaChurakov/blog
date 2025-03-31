import { StateSchema } from '@/app/providers/storeProvider/config/StateSchema';

export const getArticleDetailsCommentsIsLoading = (state: StateSchema) =>
  state.articleDetailsPage?.articleDetailsComments?.isLoading;
export const getArticleDetailsCommentsError = (state: StateSchema) =>
  state.articleDetailsPage?.articleDetailsComments?.error;
