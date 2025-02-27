import { memo } from 'react';
import { ArticleImageBlock } from 'entities/Article/model/types/article';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/text/Text';
import styles from './ArticleImageBlockComponent.module.scss';

interface ArticleImageBlockComponentProps {
  className?: string;
  block?: ArticleImageBlock;
}

export const ArticleImageBlockComponent = memo(
  ({ className, block }: ArticleImageBlockComponentProps) => {
    return (
      <div
        data-testid="articleImageBlockComponent"
        className={classNames(styles.articleImageBlockComponent, {}, [
          className,
        ])}
      >
        <Text title={block?.title} />
        <img src={block?.src} width="100%" />
      </div>
    );
  },
);
