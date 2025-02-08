import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/storeProvider';
import { Profile } from '../../types/profile';

export const fetchProfileData = createAsyncThunk<
  Profile,
  void,
  ThunkConfig<string>
>('profile/fetchProfileData', async (_, { extra, rejectWithValue }) => {
  try {
    const response = await extra.api.get<Profile>('/profile');
    if (!response.data) throw new Error();

    return response.data;
  } catch (e) {
    console.error(e);
    return rejectWithValue('error');
  }
});
