import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User } from '../../../../../entities/User';
import { userActions } from '../../../../../entities/User/model/slice/userSlice';
import i18n from 'shared/config/i18n/i18n';
import { USER_LS_KEY } from 'shared/const/localstorage';

interface LoginByUsernameProps {
  username: string;
  password: string;
}

export const loginByUsername = createAsyncThunk<
  User,
  LoginByUsernameProps,
  { rejectValue: string }
>('login/loginByUsername', async ({ username, password }, thunkAPI) => {
  try {
    const response = await axios.post<User>('http://localhost:8000/login', {
      username,
      password,
    });

    if (!response.data) throw new Error();

    localStorage.setItem(USER_LS_KEY, JSON.stringify(response.data));
    thunkAPI.dispatch(userActions.setAuthData(response.data));

    return response.data;
  } catch (e) {
    console.log(e);
    return thunkAPI.rejectWithValue(i18n.t('Неверный логин или пароль'));
  }
});
