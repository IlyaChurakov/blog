import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { Button, ButtonColors, ButtonVariants } from 'shared/ui/button/Button';
import styles from './EditableProfileCardHeader.module.scss';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProgileReadonly';
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';
import { profileActions } from '../../model/slice/profileSlice';

export const EditableProfileCardHeader = () => {
  const { t } = useTranslation('profile');
  const authData = useSelector(getUserAuthData);
  const profileData = useSelector(getUserAuthData);

  const canEdit = authData?.id === profileData?.id;

  const readonly = useSelector(getProfileReadonly);
  const dispatch = useAppDispatch();

  const edit = useCallback(() => {
    dispatch(profileActions.setReadonly(false));
  }, [dispatch]);

  const cancel = useCallback(() => {
    dispatch(profileActions.cancelEdit());
  }, [dispatch]);

  const save = useCallback(() => {
    dispatch(updateProfileData());
  }, [dispatch]);

  return (
    <div className={classNames(styles.profilePageHeader, {})}>
      {canEdit &&
        (readonly ? (
          <Button
            onClick={edit}
            color={ButtonColors.ACCENT}
            variant={ButtonVariants.OUTLINE}
          >
            {t('Редактировать')}
          </Button>
        ) : (
          <>
            <Button
              onClick={save}
              color={ButtonColors.ACCENT}
              variant={ButtonVariants.OUTLINE}
            >
              {t('Сохранить')}
            </Button>
            <Button
              onClick={cancel}
              color={ButtonColors.DANGER}
              variant={ButtonVariants.OUTLINE}
            >
              {t('Отменить')}
            </Button>
          </>
        ))}
    </div>
  );
};
