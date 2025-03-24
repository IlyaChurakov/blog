import { memo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page/ui/Page';
import { Counter } from '@/entities/Counter';
import { Input } from '@/shared/ui/input/Input';

const MainPage = memo(() => {
  const { t } = useTranslation('main');

  const [value, setValue] = useState<string>('');

  const onChange = (val: string) => setValue(val);

  return (
    <Page>
      {t('Главная')}
      <Counter />
      <Input
        placeholder="Placeholder"
        value={value}
        onChange={onChange}
        type="email"
        autoFocus
      />
    </Page>
  );
});

export default MainPage;
