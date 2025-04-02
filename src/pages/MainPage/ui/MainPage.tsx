import { Counter } from '@/entities/Counter';
import { Input } from '@/shared/ui/input';
import { Page } from '@/widgets/Page';
import { memo, useState } from 'react';
import { useTranslation } from 'react-i18next';

const MainPage = memo(() => {
  const { t } = useTranslation('main');

  const [value, setValue] = useState<string>('');

  const onChange = (val: string) => setValue(val);

  return (
    <Page data-testid="MainPage">
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
