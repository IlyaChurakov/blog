import { memo } from 'react';
import styles from './ArticleDetailsPage.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';

interface ArticleDetailsPageProps {
  className?: string;
}

const ArticleDetailsPage = memo(({ className }: ArticleDetailsPageProps) => {
  return (
    <div
      data-testid="articleDetailsPage"
      className={classNames(styles.articleDetailsPage, {}, [className])}
    >
      ArticleDetails
    </div>
  );
});

export default ArticleDetailsPage;
