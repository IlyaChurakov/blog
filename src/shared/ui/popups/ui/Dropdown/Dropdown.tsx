import { Menu } from '@headlessui/react';
import { Fragment, ReactNode } from 'react';
import styles from './Dropdown.module.scss';
import { classNames } from '../../../../lib/classNames/classNames';
import { DropdownDirection } from '../../../../types/ui';
import AppLink from '../../../../ui/appLink/AppLink';
import { Button } from '../../../../ui/button/Button';
import { mapDirections } from '../../../../ui/popups/consts';
import popupStyles from '../../styles/Popup.module.scss';

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

export function Dropdown({
  className,
  items,
  trigger,
  direction = 'bottom right',
}: DropdownProps) {
  return (
    <Menu
      as="div"
      className={classNames(styles.dropdown, {}, [
        className,
        popupStyles.popup,
      ])}
    >
      <Menu.Button className={classNames(popupStyles.trigger)} as="div">
        {trigger}
      </Menu.Button>

      <Menu.Items
        className={classNames(styles.items, {}, [mapDirections[direction]])}
      >
        {items.map((item) => {
          const content = ({ active }: { active: boolean }) => (
            <Button
              onClick={item.onClick}
              className={classNames(styles.item, {
                [popupStyles.active]: active,
                [popupStyles.disabled]: item.disable,
              })}
            >
              {item.content}
            </Button>
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
