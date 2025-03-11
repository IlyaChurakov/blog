import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/text/Text';
import styles from './ArticleTextBlockComponent.module.scss';
import { ArticleTextBlock } from '../../model/types/article';

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
