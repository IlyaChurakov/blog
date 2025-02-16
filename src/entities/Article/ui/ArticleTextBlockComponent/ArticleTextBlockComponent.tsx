import { memo } from 'react';
import styles from './ArticleTextBlockComponent.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleTextBlock } from 'entities/Article/model/types/article';
import { Text } from 'shared/ui/text/Text';

interface ArticleTextBlockComponentProps {
  className?: string;
  block?: ArticleTextBlock;
}

export const ArticleTextBlockComponent = memo(
  ({ className, block }: ArticleTextBlockComponentProps) => {
    return (
      <div
        data-testid="articleTextBlockComponent"
        className={classNames(styles.articleTextBlockComponent, {}, [
          className,
        ])}
      >
        {!!block?.title && (
          <Text title={block.title} className={styles.title} />
        )}
        {!!block?.paragraphs &&
          block.paragraphs.map((p, i) => (
            <Text key={i} text={p} className={styles.paragraph} />
          ))}
      </div>
    );
  },
);
