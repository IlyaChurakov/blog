import { Page } from '@/widgets/Page';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

const AboutPage = memo(() => {
  const { t } = useTranslation('main');

  return <Page data-testid="AboutPage">{t('О сайте')}</Page>;
});

export default AboutPage;
