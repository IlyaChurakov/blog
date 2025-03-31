import { ThunkConfig } from '@/app/providers/storeProvider';
import { getArticleDetailsData } from '@/entities/Article';
import { Comment } from '@/entities/Comment';
import { getUserAuthData } from '@/entities/User';
import { validateNewComment } from '@/features/addNewComment';
import { newCommentActions } from '@/features/addNewComment';
import { ErrorTypes } from '@/shared/lib/checkErrorType/types';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchCommentsByArticleId } from './fetchCommentsByArticleId';

export const addCommentForArticle = createAsyncThunk<
  Comment,
  string,
  ThunkConfig<ErrorTypes>
>(
  'articleDetails/addCommentForArticle',
  async (text, { extra, rejectWithValue, getState, dispatch }) => {
    try {
      const article = getArticleDetailsData(getState());
      const user = getUserAuthData(getState());

      if (text === null || text === undefined || !article || !user)
        return rejectWithValue('no data');

      const errors = validateNewComment({ text });
      if (errors) return rejectWithValue(errors);

      const response = await extra.api.post<Comment>('/comments', {
        text,
        articleId: article.id,
        userId: user.id,
      });
      if (!response.data) throw new Error('Error');

      dispatch(newCommentActions.setText(''));
      dispatch(fetchCommentsByArticleId(article?.id));

      return response.data;
    } catch (e) {
      console.error(e);
      return rejectWithValue('error');
    }
  },
);
