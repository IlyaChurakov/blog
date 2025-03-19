import { HTMLAttributeAnchorTarget, memo } from 'react';
import { List, ListRowProps, WindowScroller } from 'react-virtualized';
import { PAGE_ID } from 'widgets/Page/ui/Page';
import { classNames } from 'shared/lib/classNames/classNames';
import Skeleton from 'shared/ui/skeleton/Skeleton';
import { Text, TextColors } from 'shared/ui/text/Text';
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
  virtualized?: boolean;
}

export const ArticleList = memo(
  ({
    className,
    articles,
    view = 'tile',
    target,
    isLoading,
    error,
    virtualized = true,
  }: ArticleListProps) => {
    const isInitLoading = isLoading && !articles?.length;
    const isEmpty = !articles?.length;
    const isNextPageLoading = isLoading && !!articles?.length;

    const isList = view === 'list';

    const itemsPerRow = isList ? 1 : 3;
    const rowCount = isList ? articles.length : Math.ceil(articles.length / 3);

    const RowRenderer = ({ index, style, key }: ListRowProps) => {
      const items = [];
      const fromIndex = index * itemsPerRow;
      const toIndex = Math.min(fromIndex + itemsPerRow, articles.length);

      for (let i = fromIndex; i < toIndex; i++) {
        items.push(
          <ArticleListItem
            key={i}
            view={view}
            target={target}
            article={articles[i]}
          />,
        );
      }

      return (
        <div
          key={key}
          style={style}
          className={classNames(styles.ArticleList, {}, [
            className,
            styles[view],
          ])}
        >
          {items}
        </div>
      );
    };

    const page = document.getElementById(PAGE_ID);
    if (!page) return null;

    return (
      <WindowScroller scrollElement={page}>
        {({
          width,
          height,
          registerChild,
          onChildScroll,
          isScrolling,
          scrollTop,
        }) => (
          <div ref={registerChild}>
            {isInitLoading ? (
              <ArticleListSkeleton view={view} />
            ) : error ? (
              <Text color={TextColors.ERROR} title={error} />
            ) : isEmpty ? (
              <Text color={TextColors.ACCENT} title="Статей еще нет" />
            ) : virtualized ? (
              <List
                height={height}
                width={width ? width - 50 : 700}
                rowCount={rowCount}
                rowHeight={isList ? 500 : 370}
                autoHeight
                onScroll={onChildScroll}
                scrollTop={scrollTop}
                isScrolling={isScrolling}
                rowRenderer={RowRenderer}
              />
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
        )}
      </WindowScroller>
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
