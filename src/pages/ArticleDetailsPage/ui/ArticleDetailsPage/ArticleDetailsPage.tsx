import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { Page } from 'widgets/Page/ui/Page';
import { ArticleRecommendationsList } from 'features/articleRecommendationsList';
import { ArticleDetails } from 'entities/Article';
import { classNames } from 'shared/lib/classNames/classNames';
import {
  DynamicModuleLoader,
  ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import styles from './ArticleDetailsPage.module.scss';
import { ArticleDetailsComments } from '../ArticleDetailsComments/ArticleDetailsComments';
import { ArticleDetailsPageReducer } from '../../model/slice';
import ArticleDetailsPageHeader from '../../ui/ArticleDetailsPageHeader/ArticleDetailsPageHeader';

interface ArticleDetailsPageProps {
  className?: string;
}

const reducers: ReducersList = {
  articleDetailsPage: ArticleDetailsPageReducer,
};

const ArticleDetailsPage = memo(({ className }: ArticleDetailsPageProps) => {
  const { id } = useParams();
  if (!id) return null;

  return (
    <DynamicModuleLoader reducers={reducers}>
      <Page
        data-testid="articlesDetailsPage"
        className={classNames(styles.articleDetailsPage, {}, [className])}
      >
        <ArticleDetailsPageHeader />
        <ArticleDetails id={id} />
        <ArticleRecommendationsList />
        <ArticleDetailsComments id={id} />
      </Page>
    </DynamicModuleLoader>
  );
});

export default ArticleDetailsPage;
