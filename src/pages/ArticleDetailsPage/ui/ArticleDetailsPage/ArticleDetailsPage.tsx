import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
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
import { Text } from 'shared/ui/text/Text';
import styles from './ArticleDetailsPage.module.scss';
import {
  getArticleDetailsCommentsError,
  getArticleDetailsCommentsIsLoading,
} from '../../model/selectors/articleDetailsComment';
import {
  getArticleDetailsRecommendationsError,
  getArticleDetailsRecommendationsIsLoading,
} from '../../model/selectors/articleDetailsRecommendations';
import { addCommentForArticle } from '../../model/services/addCommentForArticle';
import { fetchArticleRecommendations } from '../../model/services/fetchArticleRecommendations';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId';
import { ArticleDetailsPageReducer } from '../../model/slice';
import { getArticleDetailsComments } from '../../model/slice/articleDetailsCommentsSlice';
import { getArticleRecommendations } from '../../model/slice/articleDetailsRecommendationsSlice';
import ArticleDetailsPageHeader from '../../ui/ArticleDetailsPageHeader/ArticleDetailsPageHeader';

interface ArticleDetailsPageProps {
  className?: string;
}

const reducers: ReducersList = {
  articleDetailsPage: ArticleDetailsPageReducer,
};

const ArticleDetailsPage = memo(({ className }: ArticleDetailsPageProps) => {
  const { id } = useParams();
  const dispatch = useAppDispatch();

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
        <ArticleDetailsPageHeader />
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
