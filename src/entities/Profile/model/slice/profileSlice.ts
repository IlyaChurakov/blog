import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Profile, ProfileSchema } from '../types/profile';
import { USER_LS_KEY } from 'shared/const/localstorage';

const initialState: ProfileSchema = {
  data: undefined,
  isLoading: false,
  readonly: true,
  error: undefined,
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setAuthData: (state: ProfileSchema, action: PayloadAction<Profile>) => {
      state.data = action.payload;
    },
    initAuthData: (state: ProfileSchema) => {
      const user = localStorage.getItem(USER_LS_KEY);

      if (user) {
        state.data = JSON.parse(user);
      }
    },
    logout: (state: ProfileSchema) => {
      state.data = null;
      localStorage.removeItem(USER_LS_KEY);
    },
  },
});

export const { actions: profileActions, reducer: profileReducer } =
  profileSlice;
