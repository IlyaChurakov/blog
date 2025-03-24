import { classNames } from '@/shared/lib/classNames/classNames';
import { DropdownDirection } from '@/shared/types/ui';
import { Popover as HPopover } from '@headlessui/react';
import { memo, ReactNode } from 'react';
import styles from './Popover.module.scss';
import { mapDirections } from '../../consts';
import popupStyles from '../../styles/Popup.module.scss';

interface PopoverProps {
  className?: string;
  trigger: ReactNode;
  direction?: DropdownDirection;
  children?: ReactNode;
}

export const Popover = memo(
  ({
    className,
    trigger,
    direction = 'bottom right',
    children,
  }: PopoverProps) => {
    return (
      <HPopover
        as="div"
        className={classNames(styles.popover, {}, [
          className,
          popupStyles.popup,
        ])}
      >
        <HPopover.Button as="div" className={classNames(popupStyles.trigger)}>
          {trigger}
        </HPopover.Button>

        <HPopover.Panel
          className={classNames(styles.items, {}, [mapDirections[direction]])}
        >
          {children}
        </HPopover.Panel>
      </HPopover>
    );
  },
);
