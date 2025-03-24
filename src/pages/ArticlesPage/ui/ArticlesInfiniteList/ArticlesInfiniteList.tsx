import { ArticleList } from '@/entities/Article';
import { useSelector } from 'react-redux';
import {
  getArticlesPageError,
  getArticlesPageIsLoading,
  getArticlesPageView,
} from '../../model/selectors/articlesPage';
import { getArticles } from '../../model/slices/articlesPageSlice';

export const ArticlesInfiniteList = () => {
  const articles = useSelector(getArticles.selectAll);
  const isLoading = useSelector(getArticlesPageIsLoading);
  const error = useSelector(getArticlesPageError);
  const view = useSelector(getArticlesPageView);

  return (
    <ArticleList
      view={view}
      articles={articles}
      isLoading={isLoading}
      error={error}
    />
  );
};
