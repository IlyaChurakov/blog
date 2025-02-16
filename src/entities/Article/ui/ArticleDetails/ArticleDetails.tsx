import { memo, useEffect } from 'react';
import { articleDetailsReducer } from 'entities/Article/model/slices/articleDetailsSlice';
import {
  DynamicModuleLoader,
  ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { fetchArticleById } from 'entities/Article/model/services/fetchArticleById/fetchArticleById';
import { useSelector } from 'react-redux';
import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsLoading,
} from 'entities/Article/model/selectors/articleDetails';
import { Text, TextColors } from 'shared/ui/text/Text';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './ArticleDetails.module.scss';
import Skeleton from 'shared/ui/skeleton/Skeleton';
import { Avatar } from 'shared/ui/avatar/Avatar';
import { Calendar1Icon, EyeIcon } from 'lucide-react';
import {
  ArticleBlock,
  ArticleBlockType,
} from 'entities/Article/model/types/article';
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import { ArticleImageBlockComponent } from '../ArticleImageBlockComponent/ArticleImageBlockComponent';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';

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
      <div className={classNames(styles.articleDetailsWrapper)}>
        {isLoading ? (
          <ArticleDetailsSkeleton />
        ) : !!error ? (
          <Text
            color={TextColors.ERROR}
            title="Произошла ошибка при загрузке статьи"
          />
        ) : (
          !!data && (
            <div className={classNames(styles.articleDetails)}>
              <Avatar src={data.img} />
              <Text title={data.title} text={data.subtitle} justify="center" />
              <div className={classNames(styles.views)}>
                <EyeIcon />
                <Text title={String(data.views)} justify="center" />
              </div>
              <div className={classNames(styles.createdAt)}>
                <Calendar1Icon />
                <Text title={data.createdAt} justify="center" />
              </div>

              {data.blocks.map((block) => (
                <Block key={block.id} block={block} />
              ))}
            </div>
          )
        )}
      </div>
    </DynamicModuleLoader>
  );
});

function Block({ block }: { block: ArticleBlock }) {
  switch (block.type) {
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
    <div className={styles.articleDetailsSkeleton}>
      <Skeleton width={100} height={100} borderRadius={50} />
      <Skeleton width="100%" height={70} borderRadius={0} />
      <Skeleton width="100%" height={200} borderRadius={0} />
      <Skeleton width="100%" height={70} borderRadius={0} />
      <Skeleton width="100%" height={200} borderRadius={0} />
      <Skeleton width="100%" height={70} borderRadius={0} />
      <Skeleton width="100%" height={200} borderRadius={0} />
    </div>
  );
}
