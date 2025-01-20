import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User, UserSchema } from '../types/userSchema';
import { USER_LS_KEY } from 'shared/const/localstorage';

const initialState: UserSchema = {
  authData: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthData: (state: UserSchema, action: PayloadAction<User>) => {
      state.authData = action.payload;
    },
    initAuthData: (state: UserSchema) => {
      const user = localStorage.getItem(USER_LS_KEY);

      if (user) {
        state.authData = JSON.parse(user);
      }
    },
    logout: (state: UserSchema) => {
      state.authData = null;
      localStorage.removeItem(USER_LS_KEY);
    },
  },
});

export const { actions: userActions, reducer: userReducer } = userSlice;
