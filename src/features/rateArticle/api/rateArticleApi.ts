import { rtkApi } from '@/shared/api/rtkApi';
import { ArticleRating } from '../model/types/articleRating';

export const { useFetchArticleRateQuery, useCreateArticleRateMutation } =
  rtkApi.injectEndpoints({
    endpoints: (builder) => ({
      fetchArticleRate: builder.query<
        ArticleRating[],
        { id: string; userId: string }
      >({
        query: ({ id, userId }) => ({
          url: `/ratings/`,
          params: {
            _limit: 1,
            articleId: id,
            userId,
          },
        }),
      }),
      createArticleRate: builder.mutation<
        ArticleRating,
        Omit<ArticleRating, 'id'>
      >({
        query: (body) => ({
          url: '/ratings',
          method: 'POST',
          body: JSON.stringify(body),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        }),
      }),
    }),
  });
