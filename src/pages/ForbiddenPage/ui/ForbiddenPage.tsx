import { classNames } from '@/shared/lib/classNames/classNames';
import { Text, TextColors } from '@/shared/ui/text';
import { Page } from '@/widgets/Page';
import { memo } from 'react';
import styles from './ForbiddenPage.module.scss';

const ForbiddenPage = memo(() => {
  return (
    <Page data-testid="ForbiddenPage" className={classNames(styles.container)}>
      <Text
        justify="center"
        color={TextColors.ERROR}
        title="403 Forbidden"
        text="У вас недостаточно прав для просмотра данной страницы"
      />
    </Page>
  );
});

export default ForbiddenPage;
