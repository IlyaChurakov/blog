import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/storeProvider';
import { Profile } from '@/entities/Profile';

export const fetchProfileData = createAsyncThunk<
  Profile,
  string | undefined,
  ThunkConfig<string>
>('profile/fetchProfileData', async (profileId, { extra, rejectWithValue }) => {
  if (!profileId) return rejectWithValue('error');

  try {
    const response = await extra.api.get<Profile>(`/profile/${profileId}`);
    if (!response.data) throw new Error();

    return response.data;
  } catch (e) {
    console.error(e);
    return rejectWithValue('error');
  }
});
