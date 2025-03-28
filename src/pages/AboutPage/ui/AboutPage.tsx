import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page/ui/Page';

const AboutPage = memo(() => {
  const { t } = useTranslation('main');

  return <Page>{t('О сайте')}</Page>;
});

export default AboutPage;
