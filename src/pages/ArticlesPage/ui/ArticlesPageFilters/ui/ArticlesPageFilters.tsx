import { ArticleType, ArticleSortField } from '@/entities/Article';
import { ArticleSortSelector } from '@/entities/Article';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import useDebounce from '@/shared/lib/hooks/useDebounce';
import { SortOrder } from '@/shared/types/sort';
import { Button } from '@/shared/ui/button';
import { Card } from '@/shared/ui/card';
import { Input } from '@/shared/ui/input';
import { Tabs } from '@/shared/ui/tabs';
import { memo, useCallback, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { AlignJustify, LayoutGrid } from 'lucide-react';
import styles from './ArticlesPageFilters.module.scss';
import {
  getArticlesPageOrder,
  getArticlesPageSearch,
  getArticlesPageSort,
  getArticlesPageType,
  getArticlesPageView,
} from '../../../model/selectors/articlesPage';
import { fetchArticles } from '../../../model/services/fetchArticles';
import { articlesPageActions } from '../../../model/slices/articlesPageSlice';

interface ArticlesPageFiltersProps {
  className?: string;
}

const ArticlesPageFilters = memo(({ className }: ArticlesPageFiltersProps) => {
  const dispatch = useAppDispatch();

  const view = useSelector(getArticlesPageView);
  const order = useSelector(getArticlesPageOrder);
  const sort = useSelector(getArticlesPageSort);
  const search = useSelector(getArticlesPageSearch);
  const type = useSelector(getArticlesPageType);

  const tabs = useMemo(
    () =>
      Object.values(ArticleType).map((type) => ({
        value: type,
        content: <div>{type}</div>,
      })),
    [],
  );

  const fetchData = useCallback(() => {
    dispatch(fetchArticles({ replace: true }));
  }, []);

  const debouncedFetchData = useDebounce(fetchData, 500);

  const toggleView = () =>
    dispatch(articlesPageActions.setView(view === 'list' ? 'tile' : 'list'));

  const onChangeOrder = useCallback((val: SortOrder) => {
    dispatch(articlesPageActions.setOrder(val));
    dispatch(articlesPageActions.setPage(1));
    fetchData();
  }, []);

  const onChangeSort = useCallback((val: ArticleSortField) => {
    dispatch(articlesPageActions.setSort(val));
    dispatch(articlesPageActions.setPage(1));
    fetchData();
  }, []);

  const onChangeSearch = useCallback((val: string) => {
    dispatch(articlesPageActions.setSearch(val));
    dispatch(articlesPageActions.setPage(1));
    debouncedFetchData();
  }, []);

  const onChangeTab = useCallback(
    (val: string) => {
      dispatch(articlesPageActions.setType(val === type ? undefined : val));
      dispatch(articlesPageActions.setPage(1));
      debouncedFetchData();
    },
    [type],
  );

  return (
    <div className={classNames(styles.ArticlesPageFilters, {}, [className])}>
      <div className={styles.sortWrapper}>
        <ArticleSortSelector
          sort={sort}
          order={order}
          onChangeOrder={onChangeOrder}
          onChangeSort={onChangeSort}
        />
        <Button onClick={toggleView} className={styles.viewButton}>
          {view === 'list' ? <AlignJustify /> : <LayoutGrid />}
        </Button>
      </div>
      <Card view="list" className={styles.search}>
        <Input value={search} placeholder="Search" onChange={onChangeSearch} />
      </Card>
      <Tabs
        tabs={tabs}
        value={type}
        onTabClick={(tab) => onChangeTab(tab.value)}
      />
    </div>
  );
});

export default ArticlesPageFilters;
