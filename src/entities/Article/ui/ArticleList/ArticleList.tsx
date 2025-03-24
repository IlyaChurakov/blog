import { classNames } from '@/shared/lib/classNames/classNames';
import Skeleton from '@/shared/ui/skeleton/Skeleton';
import { Text, TextColors } from '@/shared/ui/text/Text';
import { PAGE_ID } from '@/widgets/Page/ui/Page';
import { HTMLAttributeAnchorTarget, memo } from 'react';
import styles from './ArticleList.module.scss';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { Article, ArticleView } from '../../model/types/article';

interface ArticleListProps {
  articles: Article[];
  isLoading?: boolean;
  view?: ArticleView;
  target?: HTMLAttributeAnchorTarget;
  className?: string;
  error?: string;
}

export const ArticleList = memo(
  ({
    className,
    articles,
    view = 'tile',
    target,
    isLoading,
    error,
  }: ArticleListProps) => {
    const isInitLoading = isLoading && !articles?.length;
    const isEmpty = !articles?.length;
    const isNextPageLoading = isLoading && !!articles?.length;

    const page = document.getElementById(PAGE_ID);
    if (!page) return null;

    return (
      <div>
        {isInitLoading ? (
          <ArticleListSkeleton view={view} />
        ) : error ? (
          <Text color={TextColors.ERROR} title={error} />
        ) : isEmpty ? (
          <Text color={TextColors.ACCENT} title="Статей еще нет" />
        ) : (
          <div
            className={classNames(styles.ArticleList, {}, [
              className,
              styles[view],
            ])}
          >
            {articles.map((article) => (
              <ArticleListItem
                key={article.id}
                article={article}
                target={target}
                view={view}
              />
            ))}
          </div>
        )}

        {isNextPageLoading && <ArticleListNextPage />}
      </div>
    );
  },
);

function ArticleListNextPage() {
  return (
    <div style={{ display: 'flex', gap: '20px', margin: '0 auto' }}>
      <Skeleton width="50px" height="50px" borderRadius={50} />
      <Skeleton width="50px" height="50px" borderRadius={50} />
      <Skeleton width="50px" height="50px" borderRadius={50} />
    </div>
  );
}

function ArticleListSkeleton({ view }: { view: ArticleView }) {
  return view === 'list' ? (
    <>
      <Skeleton width="100%" height="400px" />
      <Skeleton width="100%" height="400px" />
      <Skeleton width="100%" height="400px" />
      <Skeleton width="100%" height="400px" />
    </>
  ) : (
    <>
      <Skeleton width="100%" height="400px" />
      <Skeleton width="100%" height="400px" />
      <Skeleton width="100%" height="400px" />
      <Skeleton width="100%" height="400px" />
      <Skeleton width="100%" height="400px" />
      <Skeleton width="100%" height="400px" />
    </>
  );
}
