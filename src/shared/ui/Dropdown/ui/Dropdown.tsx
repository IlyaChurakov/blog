import { Menu } from '@headlessui/react';
import { Fragment, ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { DropdownDirection } from 'shared/types/ui';
import styles from './Dropdown.module.scss';
import AppLink from '../../appLink/AppLink';

export interface DropdownPropsItem {
  content: ReactNode;
  disable?: boolean;
  onClick?: () => void;
  href?: string;
}

interface DropdownProps {
  className?: string;
  items: DropdownPropsItem[];
  trigger: ReactNode;
  direction?: DropdownDirection;
}

const mapDirections: Record<DropdownDirection, string> = {
  'bottom left': styles.bottomLeft,
  'bottom right': styles.bottomRight,
  'top left': styles.topLeft,
  'top right': styles.topRight,
};

export function Dropdown({
  className,
  items,
  trigger,
  direction = 'bottom right',
}: DropdownProps) {
  return (
    <Menu as="div" className={classNames(styles.menu, {}, [className])}>
      <Menu.Button className={classNames(styles.button)} as="div">
        {trigger}
      </Menu.Button>
      <Menu.Items
        className={classNames(styles.items, {}, [mapDirections[direction]])}
      >
        {items.map((item) => {
          const content = ({ active }: { active: boolean }) => (
            <button
              onClick={item.onClick}
              className={classNames(styles.item, {
                [styles.active]: active,
                [styles.disable]: item.disable,
              })}
            >
              {item.content}
            </button>
          );

          if (item.href) {
            return (
              <Menu.Item as={AppLink} to={item.href}>
                {content}
              </Menu.Item>
            );
          }

          return <Menu.Item as={Fragment}>{content}</Menu.Item>;
        })}
      </Menu.Items>
    </Menu>
  );
}
