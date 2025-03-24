import { HTMLAttributes, memo, ReactNode } from 'react';
import { ArticleView } from '@/entities/Article/model/types/article';
import { classNames } from '@/shared/lib/classNames/classNames';
import styles from './Card.module.scss';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
  view: ArticleView;
}

export const Card = memo(
  ({ view = 'tile', className, children, ...props }: CardProps) => {
    return (
      <div
        className={classNames(styles.Card, {}, [className, styles[view]])}
        {...props}
      >
        {children}
      </div>
    );
  },
);
