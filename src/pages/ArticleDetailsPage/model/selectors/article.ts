import { createSelector } from '@reduxjs/toolkit';
import { getArticleDetailsData } from '@/entities/Article';
import { getUserAuthData } from '@/entities/User';

export const getCanEdit = createSelector(
  getArticleDetailsData,
  getUserAuthData,
  (article, user) => user?.id === article?.user?.id,
);
