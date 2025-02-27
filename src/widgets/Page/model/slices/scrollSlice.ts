import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ScrollSchema } from '../types/scrollSchema';

const initialState: ScrollSchema = {};

const scrollSlice = createSlice({
  name: 'scrollSlice',
  initialState,
  reducers: {
    setScroll: (
      state,
      action: PayloadAction<{ page: string; scroll: number }>,
    ) => {
      state[action.payload.page] = action.payload.scroll;
    },
  },
});

export const { actions: scrollActions, reducer: scrollReducer } = scrollSlice;
