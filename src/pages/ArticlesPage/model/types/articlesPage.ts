import { Article, ArticleSortField } from '@/entities/Article';
import { ArticleView, SortOrder } from '@/shared/types/sort';
import { EntityState } from '@reduxjs/toolkit';

export interface ArticlesPageSchema extends EntityState<Article> {
  isLoading: boolean;
  error?: string;
  view: ArticleView;
  page: number;
  limit: number;
  hasMore: boolean;
  order: SortOrder;
  sort: ArticleSortField;
  search: string;
  type?: string;
  _inited: boolean;
}
