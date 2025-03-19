import { Article } from 'entities/Article';
import { rtkApi } from 'shared/api/rtkApi';

export const {
  useFetchArticleRecommendationsQuery,
  useCreateArticleRecommendationMutation,
} = rtkApi.injectEndpoints({
  endpoints: (builder) => ({
    fetchArticleRecommendations: builder.query<Article[], number>({
      query: (limit) => ({
        url: '/articles',
        params: {
          _limit: limit,
        },
      }),
    }),
    createArticleRecommendation: builder.mutation({
      query: (limit) => ({
        url: '/articles',
        method: 'PUT',
        params: {
          _limit: limit,
        },
      }),
    }),
  }),
});
