import { classNames } from 'shared/lib/classNames/classNames';
import styles from './Sidebar.module.scss';
import { memo, useMemo, useState } from 'react';
import { ThemeSwitcher } from 'widgets/themeSwitcher';
import { LanguageSwitcher } from 'widgets/LanguageSwitcher';
import { Button, ButtonSizes, ButtonVariants } from 'shared/ui/button/Button';
import { PanelRightClose, PanelRightOpen } from 'lucide-react';
import { sidebarItemsList } from '../model/items';
import { SidebarItem } from './components/sidebarItem/SidebarItem';

interface SidebarProps {
  className?: string;
}

const Sidebar = memo(({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const onToggle = () => setCollapsed((prev) => !prev);

  const items = useMemo(
    () =>
      sidebarItemsList.map((item) => (
        <SidebarItem key={item.path} item={item} collapsed={collapsed} />
      )),
    [collapsed],
  );

  return (
    <div
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
    </div>
  );
});

export default Sidebar;
