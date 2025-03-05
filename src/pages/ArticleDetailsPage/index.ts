export { ArticleDetailsPageSchema } from './model/types/index';
export { ArticleDetailsRecommendationsSchema } from 'pages/ArticleDetailsPage/model/types/articleDetailsRecommendationsSchema';
export {
  articleDetailsActions,
  articleDetailsReducer,
} from 'entities/Article/model/slices/articleDetailsSlice';
export { ArticleDetailsPageAsync as ArticleDetailsPage } from './ui/ArticleDetailsPage/ArticleDetailsPage.async';
export { ArticleDetailsCommentsSchema } from './model/types/articleDetailsCommentsSchema';
