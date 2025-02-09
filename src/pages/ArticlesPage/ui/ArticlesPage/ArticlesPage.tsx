import { memo } from 'react';
import styles from './ArticlesPage.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';

interface ArticlesPageProps {
  className?: string;
}

const ArticlesPage = memo(({ className }: ArticlesPageProps) => {
  return (
    <div
      data-testid="articlesPage"
      className={classNames(styles.articlesPage, {}, [className])}
    >
      Articles
    </div>
  );
});

export default ArticlesPage;
