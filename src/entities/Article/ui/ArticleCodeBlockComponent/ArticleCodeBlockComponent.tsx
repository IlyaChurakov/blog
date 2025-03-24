import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Code } from '@/shared/ui/code/Code';
import styles from './ArticleCodeBlockComponent.module.scss';
import { ArticleCodeBlock } from '../../model/types/article';

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
