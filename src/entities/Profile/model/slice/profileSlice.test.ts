import { ProfileSchema } from '../types/profile';
import { profileActions, profileReducer } from './profileSlice';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';

describe('profileSlice', () => {
  test('set username', () => {
    const profile: DeepPartial<ProfileSchema> = { data: { username: '' } };

    expect(
      profileReducer(
        profile as ProfileSchema,
        profileActions.setForm({ username: 'john doe' }),
      ),
    ).toEqual({
      data: {
        username: '',
      },
      form: { username: 'john doe' },
    });
  });

  test('save changes', () => {
    const profile: DeepPartial<ProfileSchema> = {
      form: { username: 'john doe' },
    };

    expect(
      profileReducer(profile as ProfileSchema, profileActions.saveChanges()),
    ).toEqual({
      readonly: true,
      data: { username: 'john doe' },
      form: { username: 'john doe' },
    });
  });

  test('cancel edit', () => {
    const profile: DeepPartial<ProfileSchema> = {
      form: { username: 'john doe' },
      data: { username: 'jack london' },
    };

    expect(
      profileReducer(profile as ProfileSchema, profileActions.cancelEdit()),
    ).toEqual({
      error: undefined,
      form: { username: 'jack london' },
      readonly: true,
      data: { username: 'jack london' },
    });
  });

  test('set readonly', () => {
    const profile: DeepPartial<ProfileSchema> = {
      readonly: true,
    };

    expect(
      profileReducer(
        profile as ProfileSchema,
        profileActions.setReadonly(false),
      ),
    ).toEqual({
      readonly: false,
    });
  });

  test('pending of updateProfileData', () => {
    const profile: DeepPartial<ProfileSchema> = {
      readonly: true,
    };

    expect(
      profileReducer(profile as ProfileSchema, updateProfileData.pending),
    ).toEqual({
      readonly: true,
      isLoading: true,
      error: undefined,
    });
  });

  test('fulfilled of updateProfileData', () => {
    const profile: DeepPartial<ProfileSchema> = {
      readonly: true,
    };

    expect(
      profileReducer(profile as ProfileSchema, updateProfileData.fulfilled),
    ).toEqual({
      data: undefined,
      form: undefined,
      isLoading: false,
      readonly: true,
    });
  });
});
