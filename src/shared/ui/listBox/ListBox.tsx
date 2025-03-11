import { Listbox as HListBox } from '@headlessui/react';
import { Fragment, ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { DropdownDirection } from 'shared/types/ui';
import { Check } from 'lucide-react';
import styles from './ListBox.module.scss';
import { Button } from '../button/Button';

export interface ListBoxItem {
  value: string;
  content: ReactNode;
  disabled?: boolean;
}

interface ListBoxProps {
  className?: string;
  items?: ListBoxItem[];
  value?: string;
  defaultValue?: string;
  onChange: (value: string) => void;
  direction?: DropdownDirection;
}

const mapDirections: Record<DropdownDirection, string> = {
  'bottom left': styles.bottomLeft,
  'bottom right': styles.bottomRight,
  'top left': styles.topLeft,
  'top right': styles.topRight,
};

export function ListBox({
  className,
  items,
  value,
  defaultValue,
  onChange,
  direction = 'top right',
}: ListBoxProps) {
  return (
    <HListBox
      as="div"
      value={value}
      onChange={onChange}
      className={classNames(styles.ListBox, {}, [className])}
    >
      <HListBox.Button className={styles.button} as="div">
        <Button>{value ?? defaultValue}</Button>
      </HListBox.Button>
      <HListBox.Options
        className={classNames(styles.options, {}, [mapDirections[direction]])}
      >
        {items?.map((item) => (
          <HListBox.Option
            as={Fragment}
            key={item.value}
            value={item.value}
            disabled={item.disabled}
          >
            {({ active, selected }) => (
              <li
                className={classNames(styles.option, {
                  [styles.active]: active,
                  [styles.unavailable]: item.disabled,
                })}
              >
                {selected && <Check />} {item.value}
              </li>
            )}
          </HListBox.Option>
        ))}
      </HListBox.Options>
    </HListBox>
  );
}
