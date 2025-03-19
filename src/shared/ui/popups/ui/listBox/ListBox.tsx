import { Listbox as HListBox } from '@headlessui/react';
import { Fragment, ReactNode } from 'react';
import { Check } from 'lucide-react';
import styles from './ListBox.module.scss';
import { classNames } from '../../../../lib/classNames/classNames';
import { DropdownDirection } from '../../../../types/ui';
import { Button } from '../../../../ui/button/Button';
import { mapDirections } from '../../consts';
import popupStyles from '../../styles/Popup.module.scss';

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
      className={classNames(styles.listBox, {}, [className, popupStyles.popup])}
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
                  [popupStyles.active]: active,
                  [popupStyles.disabled]: item.disabled,
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
