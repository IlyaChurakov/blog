import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Country, CountrySelect } from '@/entities/Country';
import { Currency, CurrencySelect } from '@/entities/Currency';
import { checkErrorType } from '@/shared/lib/checkErrorType/checkErrorType';
import { ErrorTypes } from '@/shared/lib/checkErrorType/types';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Avatar } from '@/shared/ui/avatar/Avatar';
import { Input } from '@/shared/ui/input/Input';
import Loader from '@/shared/ui/loader/ui/Loader';
import { Text, TextColors } from '@/shared/ui/text/Text';
import styles from './ProfileCard.module.scss';
import { Profile } from '../model/types/profile';

interface ProfileCardProps {
  data?: Profile;
  isLoading?: boolean;
  error?: ErrorTypes;
  readonly?: boolean;
  onChangeUsername?: (val?: string) => void;
  onChangeName?: (val?: string) => void;
  onChangeSurname?: (val?: string) => void;
  onChangeAge?: (val?: number) => void;
  onChangeCity?: (val?: string) => void;
  onChangeCountry?: (val?: Country) => void;
  onChangeCurrency?: (val?: Currency) => void;
  onChangeAvatar?: (val?: string) => void;
}

export const ProfileCard = ({
  data,
  isLoading,
  readonly,
  error,
  onChangeUsername,
  onChangeName,
  onChangeSurname,
  onChangeAge,
  onChangeCity,
  onChangeCountry,
  onChangeCurrency,
  onChangeAvatar,
}: ProfileCardProps) => {
  const { t } = useTranslation('profile');

  const { validationError, defaultError } = checkErrorType(error);

  const mods = {
    [styles.loading]: isLoading,
    [styles.error]: defaultError,
  };

  const content = (
    <>
      <Avatar src={data?.avatar} size={200} alt="avatar" />

      <div className={classNames(styles.fields)}>
        <Text title={t('Профиль')} />
        <Input
          onChange={onChangeUsername}
          readonly={readonly}
          placeholder={t('Логин')}
          value={data?.username}
        />
        <Input
          data-testid="EditableProfileCard.Name"
          onChange={onChangeName}
          readonly={readonly}
          placeholder={t('Имя')}
          value={data?.name}
        />
        {validationError?.name && (
          <Text
            data-testid="EditableProfileCard.Name.Error"
            color={TextColors.ERROR}
            text={t(validationError.name)}
          />
        )}
        <Input
          onChange={onChangeSurname}
          readonly={readonly}
          placeholder={t('Фамилия')}
          value={data?.surname}
        />
        <Input
          type="number"
          onChange={(value) =>
            !isNaN(Number(value)) && onChangeAge?.(Number(value))
          }
          readonly={readonly}
          placeholder={t('Возраст')}
          value={String(data?.age)}
        />
        {validationError?.age && (
          <Text
            data-testid="editableProfileCard.age.error"
            color={TextColors.ERROR}
            text={t(validationError.age)}
          />
        )}
        <CountrySelect
          value={data?.country}
          onChange={(value) => onChangeCountry?.(value)}
          readonly={readonly}
        />
        <Input
          onChange={onChangeCity}
          readonly={readonly}
          placeholder={t('Город')}
          value={data?.city}
        />
        <CurrencySelect
          value={data?.currency}
          onChange={(value) => onChangeCurrency?.(value)}
          readonly={readonly}
        />
        <Input
          onChange={(value) => onChangeAvatar?.(value)}
          readonly={readonly}
          placeholder={t('Ссылка на аватар')}
          value={data?.avatar}
        />
      </div>
    </>
  );

  return (
    <div className={classNames(styles.profile, mods)}>
      {isLoading ? <Loader /> : defaultError ? <ProfileError /> : content}
    </div>
  );
};

const ProfileError = memo(() => {
  const { t } = useTranslation('profile');

  return (
    <Text
      data-testid="EditableProfileCard.Error"
      justify="center"
      color={TextColors.ERROR}
      title={t('Произошла ошибка при загрузке профиля')}
      text={t('Попробуйте обновить страницу')}
    />
  );
});
