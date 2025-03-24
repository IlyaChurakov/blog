import { createSelector } from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/storeProvider';

export const getScroll = (state: StateSchema) => state.scroll;
export const getScrollByPage = createSelector(
  getScroll,
  (_: StateSchema, page: string) => page,
  (scroll, page) => scroll[page] ?? 0,
);
