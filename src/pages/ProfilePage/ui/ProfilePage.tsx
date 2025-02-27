import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Page } from 'widgets/Page/ui/Page';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
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
import { DynamicModuleLoader } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect';
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';

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
      <Page>
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
      </Page>
    </DynamicModuleLoader>
  );
});

export default ProfilePage;
