import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Select } from '@/shared/ui/select/Select';
import { Currency } from '../../model/consts/consts';

interface CurrencySelectProps {
  value?: Currency;
  onChange?: (value: Currency) => void;
  readonly?: boolean;
}

const options = Object.values(Currency).map((val) => ({
  value: val,
  content: val,
}));

export const CurrencySelect = memo(
  ({ value, onChange, readonly }: CurrencySelectProps) => {
    const { t } = useTranslation('profile');

    const onChangeHandler = useCallback(
      (value: string) => {
        onChange?.(value as Currency);
      },
      [onChange],
    );

    return (
      <Select
        placeholder={t('Валюта')}
        value={value}
        onChange={onChangeHandler}
        disabled={readonly}
        options={options}
      />
    );
  },
);
