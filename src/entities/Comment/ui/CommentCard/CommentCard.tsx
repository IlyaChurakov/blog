import { classNames } from '@/shared/lib/classNames/classNames';
import { AppLink } from '@/shared/ui/appLink';
import { Avatar } from '@/shared/ui/avatar';
import { Skeleton } from '@/shared/ui/skeleton';
import { Text } from '@/shared/ui/text';
import { memo } from 'react';
import styles from './CommentCard.module.scss';
import { Comment } from '../../model/types/comment';

interface CommentCardProps {
  comment: Comment;
  isLoading: boolean;
}

export const CommentCard = memo(({ comment, isLoading }: CommentCardProps) => {
  return (
    <div className={classNames(styles.commentCard)}>
      {isLoading ? (
        <CommentCardSkeleton />
      ) : (
        <>
          <AppLink
            to={`/profile/${comment.user.id}`}
            className={styles.profileLink}
          >
            {!!comment.user.avatar && (
              <Avatar src={comment.user.avatar} size={30} />
            )}
            <Text text={comment.user.username} />
          </AppLink>

          <Text text={comment.text} />
        </>
      )}
    </div>
  );
});

function CommentCardSkeleton() {
  return (
    <div className={styles.commentCard}>
      <div className={styles.user}>
        <Skeleton width={30} height={30} borderRadius={50} />
        <Skeleton width={100} height={70} borderRadius={0} />
      </div>

      <Skeleton width="100%" height={30} borderRadius={0} />
    </div>
  );
}
