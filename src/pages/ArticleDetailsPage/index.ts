export { ArticleDetailsComments } from './ui/ArticleDetailsComments/ArticleDetailsComments';
export type { ArticleDetailsPageSchema } from './model/types/index';
export {
  articleDetailsActions,
  articleDetailsReducer,
} from '@/entities/Article/model/slices/articleDetailsSlice';
export { ArticleDetailsPageAsync as ArticleDetailsPage } from './ui/ArticleDetailsPage/ArticleDetailsPage.async';
export type { ArticleDetailsCommentsSchema } from './model/types/articleDetailsCommentsSchema';
