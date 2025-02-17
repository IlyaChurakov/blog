import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NewCommentSchema } from '../types/newComment';

const initialState: NewCommentSchema = {
  text: '',
  isLoading: false,
};

export const newCommentSlice = createSlice({
  name: 'newComment',
  initialState,
  reducers: {
    setText: (state, action: PayloadAction<string>) => {
      state.text = action.payload;
    },
  },
});

export const { actions: newCommentActions, reducer: newCommentReducer } =
  newCommentSlice;
