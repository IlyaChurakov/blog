import { getUserAuthData, isUserAdmin } from '@/entities/User';
import { userActions } from '@/entities/User';
import { getRouteAdminPanel, getRouteProfile } from '@/shared/const/router';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { Avatar } from '@/shared/ui/avatar';
import { Dropdown } from '@/shared/ui/popups';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

export const AvatarDropdown = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const authData = useSelector(getUserAuthData);
  const isAdmin = useSelector(isUserAdmin);

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  if (!authData) return null;

  return (
    <Dropdown
      trigger={<Avatar size={40} src={authData.avatar} />}
      direction="bottom left"
      items={[
        ...(isAdmin
          ? [
              {
                content: <p>{t('Админ панель')}</p>,
                href: getRouteAdminPanel(),
              },
            ]
          : []),
        {
          content: <p>{t('Профиль')}</p>,
          href: getRouteProfile(authData.id),
        },
        {
          content: <p>{t('Выход')}</p>,
          onClick: () => onLogout(),
        },
      ]}
    />
  );
};

export default AvatarDropdown;
