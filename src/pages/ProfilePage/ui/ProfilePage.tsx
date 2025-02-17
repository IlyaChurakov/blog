import { memo, useCallback } from 'react';
import { DynamicModuleLoader } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {
  fetchProfileData,
  getProfileError,
  getProfileForm,
  getProfileIsLoading,
  getProfileReadonly,
  profileActions,
  ProfileCard,
  profileReducer,
} from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { useParams } from 'react-router-dom';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect';

const reducers = {
  profile: profileReducer,
};

const ProfilePage = memo(() => {
  const { id } = useParams();
  const dispatch = useAppDispatch();

  const form = useSelector(getProfileForm);
  const error = useSelector(getProfileError);
  const isLoading = useSelector(getProfileIsLoading);
  const readonly = useSelector(getProfileReadonly);

  useInitialEffect(() => dispatch(fetchProfileData(id)));

  const onChangeUsername = useCallback(
    (value?: string) => {
      dispatch(profileActions.setForm({ username: value }));
    },
    [dispatch],
  );
  const onChangeName = useCallback(
    (value?: string) => {
      dispatch(profileActions.setForm({ name: value }));
    },
    [dispatch],
  );
  const onChangeSurname = useCallback(
    (value?: string) => {
      dispatch(profileActions.setForm({ surname: value }));
    },
    [dispatch],
  );
  const onChangeAge = useCallback(
    (value?: number) => {
      dispatch(profileActions.setForm({ age: value }));
    },
    [dispatch],
  );
  const onChangeCity = useCallback(
    (value?: string) => {
      dispatch(profileActions.setForm({ city: value }));
    },
    [dispatch],
  );
  const onChangeCountry = useCallback(
    (value?: Country) => {
      dispatch(profileActions.setForm({ country: value }));
    },
    [dispatch],
  );
  const onChangeCurrency = useCallback(
    (value?: Currency) => {
      dispatch(profileActions.setForm({ currency: value }));
    },
    [dispatch],
  );
  const onChangeAvatar = useCallback(
    (value?: string) => {
      dispatch(profileActions.setForm({ avatar: value }));
    },
    [dispatch],
  );

  return (
    <DynamicModuleLoader removeAfterUnmount reducers={reducers}>
      <ProfileCard
        data={form}
        isLoading={isLoading}
        error={error}
        readonly={readonly}
        onChangeUsername={onChangeUsername}
        onChangeName={onChangeName}
        onChangeSurname={onChangeSurname}
        onChangeAge={onChangeAge}
        onChangeCity={onChangeCity}
        onChangeCountry={onChangeCountry}
        onChangeCurrency={onChangeCurrency}
        onChangeAvatar={onChangeAvatar}
      />

      <ProfilePageHeader />
    </DynamicModuleLoader>
  );
});

export default ProfilePage;
