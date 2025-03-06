import { lazy } from 'react';

export const ArticlesPageFiltersAsync = lazy(
  () => import('./ArticlesPageFilters'),
);
