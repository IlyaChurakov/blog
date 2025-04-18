import { ThunkConfig } from '@/app/providers/storeProvider';
import { User } from '@/entities/User';
import { userActions } from '@/entities/User';
import { USER_LS_KEY } from '@/shared/const/localstorage';
import { createAsyncThunk } from '@reduxjs/toolkit';

interface LoginByUsernameProps {
  username: string;
  password: string;
}

export const loginByUsername = createAsyncThunk<
  User,
  LoginByUsernameProps,
  ThunkConfig<string>
>(
  'login/loginByUsername',
  async ({ username, password }, { dispatch, extra, rejectWithValue }) => {
    try {
      const response = await extra.api.post<User>('/login', {
        username,
        password,
      });
      if (!response.data) throw new Error();

      localStorage.setItem(USER_LS_KEY, JSON.stringify(response.data));
      dispatch(userActions.setAuthData(response.data));

      // extra?.navigate?.('/about');
      return response.data;
    } catch (e) {
      console.error(e);
      return rejectWithValue('error');
    }
  },
);
