import { rtkApi } from 'shared/api/rtkApi';

export const {
  useFetchArticleRecommendationsQuery,
  useCreateArticleRecommendationMutation,
} = rtkApi.injectEndpoints({
  endpoints: (builder) => ({
    fetchArticleRecommendations: builder.query({
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
