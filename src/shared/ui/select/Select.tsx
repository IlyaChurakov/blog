import { ChangeEvent, SelectHTMLAttributes, useCallback, useMemo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import styles from './Select.module.scss';

export interface SelectOption<T extends string> {
  value: T;
  content: string;
}

type HTMLSelectProps = Omit<
  SelectHTMLAttributes<HTMLSelectElement>,
  'value' | 'onChange' | 'readOnly'
>;

interface SelectProps<T extends string> extends HTMLSelectProps {
  value?: T;
  onChange?: (value: T) => void;
  options?: SelectOption<T>[];
}

export const Select = <T extends string>({
  disabled,
  options,
  value,
  onChange,
  placeholder,
}: SelectProps<T>) => {
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
    onChange?.(e.target.value as T);
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
};
