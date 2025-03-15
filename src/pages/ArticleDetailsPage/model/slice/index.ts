import { combineReducers } from '@reduxjs/toolkit';
import { articleDetailsCommentsReducer } from './articleDetailsCommentsSlice';

export const ArticleDetailsPageReducer = combineReducers({
  articleDetailsComments: articleDetailsCommentsReducer,
});
