import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { CommentForm } from 'features/addNewComment';
import { CommentList } from 'entities/Comment';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect';
import { VStack } from 'shared/ui/stack';
import { Text } from 'shared/ui/text/Text';
import {
  getArticleDetailsCommentsError,
  getArticleDetailsCommentsIsLoading,
} from '../../model/selectors/articleDetailsComment';
import { addCommentForArticle } from '../../model/services/addCommentForArticle';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId';
import { getArticleDetailsComments } from '../../model/slice/articleDetailsCommentsSlice';

export const ArticleDetailsComments = ({ id }: { id: string }) => {
  const dispatch = useAppDispatch();

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(id));
  });

  const comments = useSelector(getArticleDetailsComments.selectAll);
  const isLoading = useSelector(getArticleDetailsCommentsIsLoading);
  const error = useSelector(getArticleDetailsCommentsError);

  const onSendComment = useCallback(
    (text: string) => {
      dispatch(addCommentForArticle(text));
    },
    [dispatch],
  );
  return (
    <VStack gap="8">
      <Text title="Комментарии" />
      <CommentForm onSendComment={onSendComment} />
      <CommentList comments={comments} isLoading={isLoading} error={error} />
    </VStack>
  );
};
