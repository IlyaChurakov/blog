import { StateSchema } from 'app/providers/storeProvider';

export const getArticleDetailsRecommendationsIsLoading = (state: StateSchema) =>
  state.articleDetailsPage?.articleRecommendations?.isLoading;
export const getArticleDetailsRecommendationsError = (state: StateSchema) =>
  state.articleDetailsPage?.articleRecommendations?.error;
