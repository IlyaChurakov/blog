import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { ProfileCard } from '@/entities/Profile';
import { DynamicModuleLoader } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect';
import { EditableProfileCardHeader } from '../EditableProfileCardHeader/EditableProfileCardHeader';
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError';
import { getProfileForm } from '../../model/selectors/getProfileForm/getProfileForm';
import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading/getProfileIsLoading';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProgileReadonly';
import { fetchProfileData } from '../../model/services/fetchProfileData/fetchProfileData';
import { profileActions, profileReducer } from '../../model/slice/profileSlice';

const reducers = {
  profile: profileReducer,
};

export interface EditableProfileCardProps {
  id: string;
}

export const EditableProfileCard = ({ id }: EditableProfileCardProps) => {
  const dispatch = useAppDispatch();

  useInitialEffect(() => dispatch(fetchProfileData(id)));

  const form = useSelector(getProfileForm);
  const error = useSelector(getProfileError);
  const isLoading = useSelector(getProfileIsLoading);
  const readonly = useSelector(getProfileReadonly);

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
      <EditableProfileCardHeader />
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
    </DynamicModuleLoader>
  );
};
