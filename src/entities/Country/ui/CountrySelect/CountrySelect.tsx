import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Select } from 'shared/ui/select/Select';
import { Country } from '../../model/consts/consts';

interface CountrySelectProps {
  value?: Country;
  onChange?: (value: Country) => void;
  readonly?: boolean;
}

const options = Object.values(Country).map((val) => ({
  value: val,
  content: val,
}));

export const CountrySelect = memo(
  ({ value, onChange, readonly }: CountrySelectProps) => {
    const { t } = useTranslation('profile');

    const onChangeHandler = useCallback(
      (value: string) => {
        onChange?.(value as Country);
      },
      [onChange],
    );

    return (
      <Select
        placeholder={t('Страна')}
        value={value}
        onChange={onChangeHandler}
        disabled={readonly}
        options={options}
      />
    );
  },
);
