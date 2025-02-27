import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import {
  getArticlesPageError,
  getArticlesPageIsLoading,
  getArticlesPageView,
} from 'pages/ArticlesPage/model/selectors/articlesPage';
import { fetchNextArticles } from 'pages/ArticlesPage/model/services/fetchNextArticles/fetchNextArticles';
import { initArticlesPage } from 'pages/ArticlesPage/model/services/initArticlesPage/initArticlesPage';
import { Page } from 'widgets/Page/ui/Page';
import { ArticleList } from 'entities/Article';
import { classNames } from 'shared/lib/classNames/classNames';
import {
  DynamicModuleLoader,
  ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect';
import { getQueryParams } from 'shared/lib/url/getQueryParams/getQueryParams';
import styles from './ArticlesPage.module.scss';
import { ArticlesPageFilters } from '../ArticlesPageFilters';
import {
  articlesPageReducer,
  getArticles,
} from '../../model/slices/articlesPageSlice';

interface ArticlesPageProps {
  className?: string;
}

const reducers: ReducersList = {
  articlesPageSlice: articlesPageReducer,
};

const ArticlesPage = memo(({ className }: ArticlesPageProps) => {
  const dispatch = useAppDispatch();

  const articles = useSelector(getArticles.selectAll);
  const isLoading = useSelector(getArticlesPageIsLoading);
  const error = useSelector(getArticlesPageError);
  const view = useSelector(getArticlesPageView);

  const onLoadNextPart = useCallback(() => {
    dispatch(fetchNextArticles());
  }, [dispatch]);

  useInitialEffect(() => {
    const searchParams = getQueryParams();
    dispatch(initArticlesPage(searchParams));
  });

  return (
    <DynamicModuleLoader reducers={reducers}>
      <Page
        onScrollEnd={onLoadNextPart}
        data-testid="articlesPage"
        className={classNames(styles.articlesPage, {}, [className])}
      >
        <ArticlesPageFilters />

        <ArticleList
          view={view}
          articles={articles}
          isLoading={isLoading}
          error={error}
        />
      </Page>
    </DynamicModuleLoader>
  );
});

export default ArticlesPage;
