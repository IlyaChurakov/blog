import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './CommentList.module.scss';
import Skeleton from 'shared/ui/skeleton/Skeleton';
import { CommentCard } from '../CommentCard/CommentCard';
import { Comment } from 'entities/Comment/model/types/comment';
import { Text } from 'shared/ui/text/Text';

interface CommentListProps {
  comments?: Comment[];
  isLoading?: boolean;
  error?: string;
}

export const CommentList = memo(
  ({ comments, isLoading, error }: CommentListProps) => {
    return (
      <div className={classNames(styles.commentsList)}>
        <Text title="Комментарии" />

        {isLoading ? (
          <CommentsSkeleton />
        ) : !!error ? (
          <Text text={error} />
        ) : !comments?.length ? (
          <Text text="Комментариев нет" />
        ) : (
          comments.map((comment) => (
            <CommentCard key={comment.id} comment={comment} isLoading={false} />
          ))
        )}
      </div>
    );
  },
);

function CommentsSkeleton() {
  return (
    <div className={styles.commentsSkeleton}>
      <Skeleton width="100%" height={70} borderRadius={0} />
      <Skeleton width="100%" height={70} borderRadius={0} />
      <Skeleton width="100%" height={70} borderRadius={0} />
      <Skeleton width="100%" height={70} borderRadius={0} />
    </div>
  );
}
