import { getUserAuthData } from '@/entities/User';
import { LoginModal } from '@/features/authByUsername';
import { AvatarDropdown } from '@/features/avatarDropdown';
import { NotificationButton } from '@/features/notificationButton';
import { RoutePath } from '@/shared/config/routeConfig/routeConfig';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AnimationProvider } from '@/shared/lib/components/AnimationProvider';
import AppLink, { AppLinkVariants } from '@/shared/ui/appLink/AppLink';
import { Button, ButtonSizes, ButtonVariants } from '@/shared/ui/button/Button';
import { HStack } from '@/shared/ui/stack';
import { Text, TextColors } from '@/shared/ui/text/Text';
import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import styles from './Navbar.module.scss';

const Navbar = memo(() => {
  const { t } = useTranslation('main');
  const [isOpenModal, setIsOpenModal] = useState(false);
  const authData = useSelector(getUserAuthData);

  const onCloseModal = useCallback(() => {
    setIsOpenModal(false);
  }, []);

  const onOpenModal = useCallback(() => {
    setIsOpenModal(true);
  }, []);

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

          <HStack gap="16" className={styles.actions}>
            <NotificationButton />
            <AvatarDropdown />
          </HStack>
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
