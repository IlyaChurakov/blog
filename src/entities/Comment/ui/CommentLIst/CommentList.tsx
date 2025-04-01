import { classNames } from '@/shared/lib/classNames/classNames';
import { Skeleton } from '@/shared/ui/skeleton';
import { Text, TextColors } from '@/shared/ui/text';
import { memo } from 'react';
import styles from './CommentList.module.scss';
import { CommentCard } from '../CommentCard/CommentCard';
import { Comment } from '../../model/types/comment';

interface CommentListProps {
  comments?: Comment[];
  isLoading?: boolean;
  error?: string;
}

export const CommentList = memo(
  ({ comments, isLoading, error }: CommentListProps) => {
    return (
      <div className={classNames(styles.commentsList)}>
        {isLoading ? (
          <CommentsSkeleton count={comments?.length || 1} />
        ) : error ? (
          <Text color={TextColors.ERROR} text={error} />
        ) : !comments?.length ? (
          <Text text="Комментариев нет" />
        ) : (
          comments
            .reverse()
            .map((comment) => (
              <CommentCard
                key={comment.id}
                comment={comment}
                isLoading={false}
              />
            ))
        )}
      </div>
    );
  },
);

function CommentsSkeleton({ count }: { count: number }) {
  return (
    <div className={styles.commentsSkeleton}>
      {Array.from({ length: count }).map((item) => (
        <Skeleton
          key={String(item)}
          width="100%"
          height={100}
          borderRadius={0}
        />
      ))}
    </div>
  );
}
