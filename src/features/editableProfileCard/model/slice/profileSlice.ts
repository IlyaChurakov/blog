import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';
import { ProfileSchema } from '../types/profile';
import { Profile } from '../../../../entities/Profile/model/types/profile';

const initialState: ProfileSchema = {
  isLoading: false,
  readonly: true,
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setForm: (state, action: PayloadAction<Omit<Profile, 'id'>>) => {
      state.form = { ...state.form, ...action.payload } as Profile;
    },
    cancelEdit: (state) => {
      state.readonly = true;
      state.form = state.data;
      state.error = undefined;
    },
    saveChanges: (state) => {
      state.readonly = true;
      state.data = state.form;
    },
    setReadonly: (state, action: PayloadAction<boolean>) => {
      state.readonly = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProfileData.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchProfileData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
        state.form = action.payload;
      })
      .addCase(fetchProfileData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(updateProfileData.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(updateProfileData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
        state.form = action.payload;
        state.readonly = true;
      })
      .addCase(updateProfileData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { actions: profileActions, reducer: profileReducer } =
  profileSlice;
