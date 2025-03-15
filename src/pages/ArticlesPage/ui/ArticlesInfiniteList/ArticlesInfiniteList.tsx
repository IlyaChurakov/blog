import { useSelector } from 'react-redux';
import {
  getArticlesPageError,
  getArticlesPageIsLoading,
  getArticlesPageView,
} from 'pages/ArticlesPage/model/selectors/articlesPage';
import { getArticles } from 'pages/ArticlesPage/model/slices/articlesPageSlice';
import { ArticleList } from 'entities/Article';

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
