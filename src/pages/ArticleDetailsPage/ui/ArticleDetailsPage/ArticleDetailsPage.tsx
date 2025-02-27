import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import {
  getArticleDetailsCommentsError,
  getArticleDetailsCommentsIsLoading,
} from 'pages/ArticleDetailsPage/model/selectors/articleDetailsComment';
import { addCommentForArticle } from 'pages/ArticleDetailsPage/model/services/addCommentForArticle';
import { fetchCommentsByArticleId } from 'pages/ArticleDetailsPage/model/services/fetchCommentsByArticleId';
import {
  articleDetailsCommentsReducer,
  getArticleDetailsComments,
} from 'pages/ArticleDetailsPage/model/slice/articleDetailsCommentsSlice';
import { Page } from 'widgets/Page/ui/Page';
import { CommentForm } from 'features/addNewComment';
import { ArticleDetails } from 'entities/Article';
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
  articleDetailsComments: articleDetailsCommentsReducer,
};

const ArticleDetailsPage = memo(({ className }: ArticleDetailsPageProps) => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

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
    <DynamicModuleLoader reducers={reducers}>
      <Page
        data-testid="articlesDetailsPage"
        className={classNames(styles.articleDetailsPage, {}, [className])}
      >
        <Button onClick={() => navigate('/articles')}>
          <ArrowLeft />
        </Button>
        <ArticleDetails id={id!} />
        <Text title="Комментарии" className={styles.commentsBlock} />
        <CommentForm onSendComment={onSendComment} />
        <CommentList comments={comments} isLoading={isLoading} error={error} />
      </Page>
    </DynamicModuleLoader>
  );
});

export default ArticleDetailsPage;
