import { Rating } from '@/entities/Rating';
import { getUserAuthData } from '@/entities/User';
import { classNames } from '@/shared/lib/classNames/classNames';
import { HStack, VStack } from '@/shared/ui/stack';
import { Text, TextColors } from '@/shared/ui/text';
import { useSelector } from 'react-redux';
import styles from './ArticleRating.module.scss';
import {
  useCreateArticleRateMutation,
  useFetchArticleRateQuery,
} from '../../api/rateArticleApi';

export interface ArticleRatingProps {
  id: string;
}

const ArticleRating = ({ id }: ArticleRatingProps) => {
  const user = useSelector(getUserAuthData);
  const { data, error, refetch } = useFetchArticleRateQuery({
    id,
    userId: user?.id as string,
  });
  const rating = data?.[0];

  const [createArticleRate, { isLoading: isCreateLoading }] =
    useCreateArticleRateMutation();

  return (
    <VStack align="start" gap="16" className={classNames(styles.rating)}>
      <Text title="Как вам статья?" />

      <HStack justify="center" max>
        {!user ? (
          <Text
            color={TextColors.ACCENT}
            text={`Оценивать статьи могут только авторизованные пользователи`}
          />
        ) : error ? (
          <Text
            color={TextColors.ERROR}
            text="При получении оценки произошла ошибка"
          />
        ) : (
          <Rating
            feedback={rating?.id ? 'Спасибо за оценку!' : undefined}
            value={rating?.value ?? 0}
            isLoading={isCreateLoading}
            onAccept={accept}
          />
        )}
      </HStack>
    </VStack>
  );

  async function accept(value: number) {
    if (!user) return;

    try {
      await createArticleRate({
        value,
        userId: user.id,
        articleId: id,
      });
    } catch (err) {
      console.log(err);
    }

    refetch();
  }
};

export default ArticleRating;
