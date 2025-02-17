import { StateSchema } from 'app/providers/storeProvider';

export const getNewCommentText = (state: StateSchema) => state.newComment?.text;
export const getNewCommentError = (state: StateSchema) =>
  state.newComment?.error;
export const getNewCommentIsLoading = (state: StateSchema) =>
  state.newComment?.isLoading;
