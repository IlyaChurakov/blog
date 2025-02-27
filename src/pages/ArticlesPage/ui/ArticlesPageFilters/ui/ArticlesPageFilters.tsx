import { memo, useCallback, useMemo } from 'react';
import { useSelector } from 'react-redux';
import {
  getArticlesPageOrder,
  getArticlesPageSearch,
  getArticlesPageSort,
  getArticlesPageType,
  getArticlesPageView,
} from 'pages/ArticlesPage/model/selectors/articlesPage';
import { fetchArticles } from 'pages/ArticlesPage/model/services/fetchArticles';
import { articlesPageActions } from 'pages/ArticlesPage/model/slices/articlesPageSlice';
import {
  ArticleSortField,
  ArticleType,
} from 'entities/Article/model/types/article';
import { ArticleSortSelector } from 'entities/Article/ui/ArticleSortSelector/ui/ArticleSortSelector';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import useDebounce from 'shared/lib/hooks/useDebounce';
import { SortOrder } from 'shared/types';
import { Button } from 'shared/ui/button/Button';
import { Card } from 'shared/ui/card/Card';
import { Input } from 'shared/ui/input/Input';
import { Tabs } from 'shared/ui/tabs/Tabs';
import { AlignJustify, LayoutGrid } from 'lucide-react';
import styles from './ArticlesPageFilters.module.scss';

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
