import { lazy, Suspense } from 'react';
import { ArticleRatingProps } from './ArticleRating';

const ArticleRating = lazy(() => import('./ArticleRating'));

export const ArticleRatingAsync = (props: ArticleRatingProps) => {
  return (
    <Suspense>
      <ArticleRating {...props} />
    </Suspense>
  );
};
