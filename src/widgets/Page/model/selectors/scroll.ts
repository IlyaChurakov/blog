import { StateSchema } from '@/app/providers/storeProvider/config/StateSchema';
import { createSelector } from '@reduxjs/toolkit';

export const getScroll = (state: StateSchema) => state.scroll;
export const getScrollByPage = createSelector(
  getScroll,
  (_: StateSchema, page: string) => page,
  (scroll, page) => scroll[page] ?? 0,
);
