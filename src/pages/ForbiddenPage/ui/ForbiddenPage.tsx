import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text, TextColors } from '@/shared/ui/text';
import styles from './ForbiddenPage.module.scss';

const ForbiddenPage = memo(() => {
  return (
    <div className={classNames(styles.container)}>
      <Text
        justify="center"
        color={TextColors.ERROR}
        title="403 Forbidden"
        text="У вас недостаточно прав для просмотра данной страницы"
      />
    </div>
  );
});

export default ForbiddenPage;
