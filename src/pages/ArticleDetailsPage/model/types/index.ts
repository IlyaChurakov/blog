import { ArticleDetailsCommentsSchema } from './articleDetailsCommentsSchema';
import { ArticleDetailsRecommendationsSchema } from './articleDetailsRecommendationsSchema';

export interface ArticleDetailsPageSchema {
  articleDetailsComments?: ArticleDetailsCommentsSchema;
  articleRecommendations?: ArticleDetailsRecommendationsSchema;
}
