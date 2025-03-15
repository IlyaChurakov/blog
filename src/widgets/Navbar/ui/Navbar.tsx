import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { LoginModal } from 'features/authByUsername';
import { getUserAuthData } from 'entities/User';
import { userActions } from 'entities/User/model/slice/userSlice';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { Dropdown } from 'shared/ui/Dropdown/ui/Dropdown';
import AppLink, { AppLinkVariants } from 'shared/ui/appLink/AppLink';
import { Avatar } from 'shared/ui/avatar/Avatar';
import { Button, ButtonSizes, ButtonVariants } from 'shared/ui/button/Button';
import { Text, TextColors } from 'shared/ui/text/Text';
import styles from './Navbar.module.scss';

const Navbar = memo(() => {
  const { t } = useTranslation('main');
  const [isOpenModal, setIsOpenModal] = useState(false);
  const authData = useSelector(getUserAuthData);
  const dispatch = useAppDispatch();

  const onCloseModal = useCallback(() => {
    setIsOpenModal(false);
  }, []);

  const onOpenModal = useCallback(() => {
    setIsOpenModal(true);
  }, []);

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  if (authData) {
    return (
      <header className={classNames(styles.navbar)}>
        <Text className={styles.logo} title="Blog" color={TextColors.ACCENT} />

        <div className={classNames(styles.links)}>
          <AppLink
            variant={AppLinkVariants.SECONDARY}
            to={RoutePath.article_create}
          >
            {t('Создать статью')}
          </AppLink>
          <Dropdown
            trigger={<Avatar size={40} src={authData.avatar} />}
            items={[
              {
                content: <p>{t('Профиль')}</p>,
                href: RoutePath.profile + '/' + authData.id,
              },
              {
                content: <p>{t('Выход')}</p>,
                onClick: () => onLogout(),
              },
            ]}
            direction="bottom left"
          />
        </div>
      </header>
    );
  }

  return (
    <header className={classNames(styles.navbar)}>
      <div className={classNames(styles.links)}>
        <Text title="Blog" color={TextColors.ACCENT} />
        <Button
          size={ButtonSizes.M}
          variant={ButtonVariants.TEXT_INVERTED}
          onClick={onOpenModal}
        >
          {t('Войти')}
        </Button>
        {isOpenModal && (
          <LoginModal isOpen={isOpenModal} onClose={onCloseModal} />
        )}
      </div>
    </header>
  );
});

export default Navbar;
