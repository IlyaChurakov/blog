import { combineReducers } from '@reduxjs/toolkit';
import { articleDetailsCommentsReducer } from './articleDetailsCommentsSlice';
import { ArticleDetailsPageSchema } from '../types';

export const ArticleDetailsPageReducer =
  combineReducers<ArticleDetailsPageSchema>({
    articleDetailsComments: articleDetailsCommentsReducer,
  });
