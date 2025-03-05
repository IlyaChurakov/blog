import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/storeProvider';
import { Article } from 'entities/Article';

interface fetchArticlesProps {
  replace?: boolean;
}

export const fetchArticleRecommendations = createAsyncThunk<
  Article[],
  fetchArticlesProps | undefined,
  ThunkConfig<string>
>('articlesPage/fetchArticles', async (_, { extra, rejectWithValue }) => {
  try {
    const response = await extra.api.get<Article[]>(`/articles/`, {
      params: {
        _limit: 4,
      },
    });
    if (!response.data) throw new Error();

    return response.data;
  } catch (e) {
    console.error(e);
    return rejectWithValue('error');
  }
});
