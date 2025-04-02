import { Page } from '@/widgets/Page';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

const AdminPanelPage = memo(() => {
  const { t } = useTranslation();
  return <Page data-testid="AdminPanelPage">{t('AdminPanelPage')}</Page>;
});

export default AdminPanelPage;
