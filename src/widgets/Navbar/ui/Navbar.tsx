import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { LoginModal } from 'features/authByUsername';
import { getUserAuthData } from 'entities/User';
import { userActions } from 'entities/User/model/slice/userSlice';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { Button, ButtonSizes, ButtonVariants } from 'shared/ui/button/Button';
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
        <div className={classNames(styles.links)}>
          <Button
            size={ButtonSizes.M}
            variant={ButtonVariants.TEXT_INVERTED}
            onClick={onLogout}
          >
            {t('Выйти')}
          </Button>
        </div>
      </header>
    );
  }

  return (
    <header className={classNames(styles.navbar)}>
      <div className={classNames(styles.links)}>
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
