import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/storeProvider';
import { ErrorTypes } from '@/shared/lib/checkErrorType/types';
import { validateProfileData } from '../validateProfileData/validateProfileData';
import { Profile } from '../../../../../entities/Profile/model/types/profile';
import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm';

export const updateProfileData = createAsyncThunk<
  Profile,
  void,
  ThunkConfig<ErrorTypes>
>(
  'profile/updateProfileData',
  async (_, { extra, rejectWithValue, getState }) => {
    try {
      const profile = getProfileForm(getState());
      if (!profile) throw new Error('No profile');

      const errors = validateProfileData(profile);
      if (errors) return rejectWithValue(errors);

      const response = await extra.api.put<Profile>(
        `/profile/${profile.id}`,
        profile,
      );
      if (!response.data) throw new Error('Error');

      return response.data;
    } catch (e) {
      if (e instanceof Error) {
        return rejectWithValue(e.message);
      }
      return rejectWithValue('Unknown error');
    }
  },
);
