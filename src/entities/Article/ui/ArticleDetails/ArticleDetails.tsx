import { memo, useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
  DynamicModuleLoader,
  ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { Avatar } from 'shared/ui/avatar/Avatar';
import Skeleton from 'shared/ui/skeleton/Skeleton';
import { HStack } from 'shared/ui/stack';
import { VStack } from 'shared/ui/stack';
import { Text, TextColors } from 'shared/ui/text/Text';
import { Calendar1Icon, EyeIcon } from 'lucide-react';
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import { ArticleImageBlockComponent } from '../ArticleImageBlockComponent/ArticleImageBlockComponent';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsLoading,
} from '../../model/selectors/articleDetails';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import { articleDetailsReducer } from '../../model/slices/articleDetailsSlice';
import { ArticleBlock, ArticleBlockType } from '../../model/types/article';

const reducers: ReducersList = {
  articleDetails: articleDetailsReducer,
};

interface ArticleDetailsProps {
  id: string;
}

export const ArticleDetails = memo(({ id }: ArticleDetailsProps) => {
  const dispatch = useAppDispatch();
  const isLoading = useSelector(getArticleDetailsIsLoading);
  const error = useSelector(getArticleDetailsError);
  const data = useSelector(getArticleDetailsData);

  useEffect(() => {
    if (__PROJECT__ !== 'storybook') dispatch(fetchArticleById(id));
  }, [id]);

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      {isLoading ? (
        <ArticleDetailsSkeleton />
      ) : error ? (
        <Text
          color={TextColors.ERROR}
          title="Произошла ошибка при загрузке статьи"
        />
      ) : (
        !!data && (
          <VStack gap="16">
            <Avatar src={data.img} />
            <Text title={data.title} text={data.subtitle} justify="center" />
            <HStack justify="between" gap="16">
              <EyeIcon />
              <Text title={String(data.views)} justify="center" />
            </HStack>
            <HStack justify="between" gap="16">
              <Calendar1Icon />
              <Text title={data.createdAt} justify="center" />
            </HStack>

            {data.blocks.map((block) => (
              <Block key={block.id} block={block} />
            ))}
          </VStack>
        )
      )}
    </DynamicModuleLoader>
  );
});

export function Block({ block }: { block?: ArticleBlock }) {
  switch (block?.type) {
    case ArticleBlockType.CODE:
      return <ArticleCodeBlockComponent block={block} />;
    case ArticleBlockType.IMAGE:
      return <ArticleImageBlockComponent block={block} />;
    case ArticleBlockType.TEXT:
      return <ArticleTextBlockComponent block={block} />;
    default:
      return null;
  }
}

function ArticleDetailsSkeleton() {
  return (
    <VStack gap="16">
      <Skeleton width={100} height={100} borderRadius={50} />
      <Skeleton width="100%" height={70} borderRadius={0} />
      <Skeleton width="100%" height={200} borderRadius={0} />
      <Skeleton width="100%" height={70} borderRadius={0} />
      <Skeleton width="100%" height={200} borderRadius={0} />
      <Skeleton width="100%" height={70} borderRadius={0} />
      <Skeleton width="100%" height={200} borderRadius={0} />
    </VStack>
  );
}
