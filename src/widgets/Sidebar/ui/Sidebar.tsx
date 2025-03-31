import { LanguageSwitcher } from '@/features/LanguageSwitcher';
import { ThemeSwitcher } from '@/features/themeSwitcher';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonSizes, ButtonVariants } from '@/shared/ui/button/Button';
import { memo, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { PanelRightClose, PanelRightOpen } from 'lucide-react';
import styles from './Sidebar.module.scss';
import { SidebarItem } from './components/sidebarItem/SidebarItem';
import { getSidebarItems } from '../model/selectors/getSidebarItems';

interface SidebarProps {
  className?: string;
}

const Sidebar = memo(({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const onToggle = () => setCollapsed((prev) => !prev);

  const sidebarItemsList = useSelector(getSidebarItems);

  const items = useMemo(
    () =>
      sidebarItemsList.map((item) => (
        <SidebarItem key={item.path} item={item} collapsed={collapsed} />
      )),
    [collapsed, sidebarItemsList],
  );

  return (
    <aside
      data-testid={'sidebar'}
      className={classNames(styles.sidebar, { [styles.collapsed]: collapsed }, [
        className,
      ])}
    >
      <div className={styles.toggle}>
        <Button
          size={ButtonSizes.S}
          square
          variant={ButtonVariants.TEXT_INVERTED}
          data-testid="sidebar-toggle"
          onClick={onToggle}
        >
          {collapsed ? <PanelRightClose /> : <PanelRightOpen />}
        </Button>
      </div>

      <div className={styles.items}>{items}</div>

      <div className={classNames(styles.switchers)}>
        <ThemeSwitcher />
        <LanguageSwitcher />
      </div>
    </aside>
  );
});

export default Sidebar;
