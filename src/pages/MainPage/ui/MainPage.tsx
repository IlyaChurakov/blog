import { Input } from 'shared/ui/input/Input';
import { useTranslation } from 'react-i18next';
import { memo, useState } from 'react';
import { Counter } from '../../../entities/Counter';

const MainPage = memo(() => {
  const { t } = useTranslation('main');

  const [value, setValue] = useState<string>('');

  const onChange = (val: string) => setValue(val);

  return (
    <div>
      {t('Главная')}
      <Counter />
      <Input
        placeholder="Placeholder"
        value={value}
        onChange={onChange}
        type="email"
        autoFocus
      />
    </div>
  );
});

export default MainPage;
