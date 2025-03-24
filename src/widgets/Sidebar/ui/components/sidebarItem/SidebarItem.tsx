import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getUserAuthData } from '@/entities/User';
import AppLink, { AppLinkVariants } from '@/shared/ui/appLink/AppLink';
import styles from './SidebarItem.module.scss';
import { SidebarItemType } from '../../../model/types/sidebar';

interface SidebarItemProps {
  item: SidebarItemType;
  collapsed: boolean;
}

export const SidebarItem = memo(({ item, collapsed }: SidebarItemProps) => {
  const isAuth = useSelector(getUserAuthData);
  const { t } = useTranslation('links');

  if (item.authOnly && !isAuth) return null;

  return (
    <AppLink
      variant={AppLinkVariants.PRIMARY}
      to={item.path}
      className={styles.sidebarItem}
    >
      {item.icon}
      {!collapsed && t(item.text)}
    </AppLink>
  );
});
