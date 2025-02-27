import { memo } from 'react';
import { ArticleCodeBlock } from 'entities/Article/model/types/article';
import { classNames } from 'shared/lib/classNames/classNames';
import { Code } from 'shared/ui/code/Code';
import styles from './ArticleCodeBlockComponent.module.scss';

interface ArticleCodeBlockComponentProps {
  className?: string;
  block?: ArticleCodeBlock;
}

export const ArticleCodeBlockComponent = memo(
  ({ className, block }: ArticleCodeBlockComponentProps) => {
    if (!block) return null;

    const { code } = block;

    return (
      <div
        data-testid="articleCodeBlockComponent"
        className={classNames(styles.articleCodeBlockComponent, {}, [
          className,
        ])}
      >
        <Code code={code} />
      </div>
    );
  },
);
