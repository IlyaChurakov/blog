import {
  ChangeEvent,
  memo,
  SelectHTMLAttributes,
  useCallback,
  useMemo,
} from 'react';
import styles from './Select.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';

export interface SelectOption {
  value: string;
  content: string;
}

type HTMLSelectProps = Omit<
  SelectHTMLAttributes<HTMLSelectElement>,
  'value' | 'onChange' | 'readOnly'
>;

interface SelectProps extends HTMLSelectProps {
  value?: string | number;
  onChange?: (value: string) => void;
  options?: SelectOption[];
}

export const Select = memo(
  ({ disabled, options, value, onChange, placeholder }: SelectProps) => {
    const selectMods = {
      [styles.disabled]: disabled,
    };
    const placeholderMods = {
      [styles.disabled]: disabled,
    };

    const optionsList = useMemo(
      () =>
        options?.map((option) => {
          return (
            <option
              key={option.value}
              value={option.value}
              className={classNames(styles.option)}
            >
              {option.content}
            </option>
          );
        }),
      [options],
    );

    const onChangeHandler = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
      onChange?.(e.target.value);
    }, []);

    return (
      <div className={classNames(styles.wrapper)}>
        {!!placeholder && (
          <span className={classNames(styles.placeholder, placeholderMods)}>
            {placeholder + '>'}
          </span>
        )}

        <select
          disabled={disabled}
          onChange={onChangeHandler}
          value={value}
          className={classNames(styles.select, selectMods)}
        >
          {optionsList}
        </select>
      </div>
    );
  },
);
