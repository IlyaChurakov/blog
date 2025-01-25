import AppLink, { AppLinkVariants } from 'shared/ui/appLink/AppLink';
import styles from './SidebarItem.module.scss';
import { SidebarItemType } from 'widgets/Sidebar/model/items';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';

interface SidebarItemProps {
  item: SidebarItemType;
  collapsed: boolean;
}

export const SidebarItem = memo(({ item, collapsed }: SidebarItemProps) => {
  const { t } = useTranslation('links');

  return (
    <AppLink
      variant={AppLinkVariants.SECONDARY}
      to={item.path}
      className={styles.sidebarItem}
    >
      {item.icon}
      {!collapsed && t(item.text)}
    </AppLink>
  );
});
