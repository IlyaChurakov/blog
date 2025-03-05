import { combineReducers } from '@reduxjs/toolkit';
import { articleDetailsCommentsReducer } from './articleDetailsCommentsSlice';
import { articleDetailsRecommendationsReducer } from './articleDetailsRecommendationsSlice';

export const ArticleDetailsPageReducer = combineReducers({
  articleDetailsComments: articleDetailsCommentsReducer,
  articleRecommendations: articleDetailsRecommendationsReducer,
});
