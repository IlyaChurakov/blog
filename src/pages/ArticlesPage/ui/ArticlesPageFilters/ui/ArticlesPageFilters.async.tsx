import { lazy } from 'react';

export const ArticlesPageFiltersAsync = lazy(
  () =>
    new Promise((resolve) => {
      // @ts-expect-error some explain
      // ТАК В РЕАЛЬНЫХ ПРОЕКТАХ НЕ ДЕЛАТЬ!!!!! ДЕЛАЕМ ДЛЯ КУРСА!
      setTimeout(() => resolve(import('./ArticlesPageFilters')), 500);
    }),
);
