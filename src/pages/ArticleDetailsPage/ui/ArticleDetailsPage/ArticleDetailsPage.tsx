import { memo, useCallback } from 'react';
import styles from './ArticleDetailsPage.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleDetails } from 'entities/Article';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { CommentList } from 'entities/Comment';
import {
  articleDetailsCommentsReducer,
  getArticleDetailsComments,
} from 'pages/ArticleDetailsPage/model/slice/articleDetailsCommentsSlice';
import {
  DynamicModuleLoader,
  ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {
  getArticleDetailsCommentsError,
  getArticleDetailsCommentsIsLoading,
} from 'pages/ArticleDetailsPage/model/selectors/articleDetailsComment';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { fetchCommentsByArticleId } from 'pages/ArticleDetailsPage/model/services/fetchCommentsByArticleId';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect';
import { CommentForm } from 'features/addNewComment';
import { Text } from 'shared/ui/text/Text';
import { addCommentForArticle } from 'pages/ArticleDetailsPage/model/services/addCommentForArticle';

interface ArticleDetailsPageProps {
  className?: string;
}

const reducers: ReducersList = {
  articleDetailsComments: articleDetailsCommentsReducer,
};

const ArticleDetailsPage = memo(({ className }: ArticleDetailsPageProps) => {
  const { id } = useParams();
  const dispatch = useAppDispatch();

  useInitialEffect(() => dispatch(fetchCommentsByArticleId(id)));

  const comments = useSelector(getArticleDetailsComments.selectAll);
  const isLoading = useSelector(getArticleDetailsCommentsIsLoading);
  const error = useSelector(getArticleDetailsCommentsError);

  const onSendComment = useCallback(
    (text: string) => {
      dispatch(addCommentForArticle(text));
    },
    [dispatch],
  );

  if (!id) return null;

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div
        data-testid="articlesDetailsPage"
        className={classNames(styles.articleDetailsPage, {}, [className])}
      >
        <ArticleDetails id={id!} />
        <Text title="Комментарии" className={styles.commentsBlock} />
        <CommentForm onSendComment={onSendComment} />
        <CommentList comments={comments} isLoading={isLoading} error={error} />
      </div>
    </DynamicModuleLoader>
  );
});

export default ArticleDetailsPage;
