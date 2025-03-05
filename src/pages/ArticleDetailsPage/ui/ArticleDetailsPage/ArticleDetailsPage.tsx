import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import {
  getArticleDetailsCommentsError,
  getArticleDetailsCommentsIsLoading,
} from 'pages/ArticleDetailsPage/model/selectors/articleDetailsComment';
import {
  getArticleDetailsRecommendationsError,
  getArticleDetailsRecommendationsIsLoading,
} from 'pages/ArticleDetailsPage/model/selectors/articleDetailsRecommendations';
import { addCommentForArticle } from 'pages/ArticleDetailsPage/model/services/addCommentForArticle';
import { fetchArticleRecommendations } from 'pages/ArticleDetailsPage/model/services/fetchArticleRecommendations';
import { fetchCommentsByArticleId } from 'pages/ArticleDetailsPage/model/services/fetchCommentsByArticleId';
import { ArticleDetailsPageReducer } from 'pages/ArticleDetailsPage/model/slice';
import {
  articleDetailsCommentsReducer,
  getArticleDetailsComments,
} from 'pages/ArticleDetailsPage/model/slice/articleDetailsCommentsSlice';
import {
  articleDetailsRecommendationsReducer,
  getArticleRecommendations,
} from 'pages/ArticleDetailsPage/model/slice/articleDetailsRecommendationsSlice';
import { Page } from 'widgets/Page/ui/Page';
import { CommentForm } from 'features/addNewComment';
import { ArticleDetails, ArticleList } from 'entities/Article';
import { CommentList } from 'entities/Comment';
import { classNames } from 'shared/lib/classNames/classNames';
import {
  DynamicModuleLoader,
  ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect';
import { Button } from 'shared/ui/button/Button';
import { Text } from 'shared/ui/text/Text';
import { ArrowLeft } from 'lucide-react';
import styles from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
  className?: string;
}

const reducers: ReducersList = {
  articleDetailsPage: ArticleDetailsPageReducer,
};

const ArticleDetailsPage = memo(({ className }: ArticleDetailsPageProps) => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(id));
    dispatch(fetchArticleRecommendations());
  });

  const comments = useSelector(getArticleDetailsComments.selectAll);
  const isLoading = useSelector(getArticleDetailsCommentsIsLoading);
  const error = useSelector(getArticleDetailsCommentsError);

  const recommedations = useSelector(getArticleRecommendations.selectAll);
  const recommedationsIsLoading = useSelector(
    getArticleDetailsRecommendationsIsLoading,
  );
  const recommedationsError = useSelector(
    getArticleDetailsRecommendationsError,
  );

  const onSendComment = useCallback(
    (text: string) => {
      dispatch(addCommentForArticle(text));
    },
    [dispatch],
  );

  if (!id) return null;

  return (
    <DynamicModuleLoader reducers={reducers}>
      <Page
        data-testid="articlesDetailsPage"
        className={classNames(styles.articleDetailsPage, {}, [className])}
      >
        <Button onClick={() => navigate('/articles')}>
          <ArrowLeft />
        </Button>
        <ArticleDetails id={id!} />
        <Text title="Рекомендуем" className={styles.commentsBlock} />
        <ArticleList
          target="_blank"
          articles={recommedations}
          isLoading={recommedationsIsLoading}
          error={recommedationsError}
          className={styles.recommendations}
        />
        <Text title="Комментарии" className={styles.commentsBlock} />
        <CommentForm onSendComment={onSendComment} />
        <CommentList comments={comments} isLoading={isLoading} error={error} />
      </Page>
    </DynamicModuleLoader>
  );
});

export default ArticleDetailsPage;
