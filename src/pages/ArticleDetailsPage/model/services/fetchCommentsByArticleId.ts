import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/storeProvider';
import { Comment } from '@/entities/Comment';

export const fetchCommentsByArticleId = createAsyncThunk<
  Comment[],
  string | undefined,
  ThunkConfig<string>
>(
  'articleDetailsComments/fetchCommentsByArticleId',
  async (articleId, { extra, rejectWithValue }) => {
    if (!articleId) return rejectWithValue('error');

    try {
      const response = await extra.api.get<Comment[]>(`/comments/`, {
        params: {
          articleId,
          _expand: 'user',
        },
      });
      if (!response.data) throw new Error();

      return response.data;
    } catch (e) {
      console.error(e);
      return rejectWithValue('error');
    }
  },
);
