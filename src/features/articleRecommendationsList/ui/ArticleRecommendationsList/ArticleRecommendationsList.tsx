import { ArticleList } from '@/entities/Article';
import { VStack } from '@/shared/ui/stack';
import { Text } from '@/shared/ui/text/Text';
import { SerializedError } from '@reduxjs/toolkit';
import { useFetchArticleRecommendationsQuery } from '../../api/articleRecommendationsApi';

export const ArticleRecommendationsList = () => {
  const {
    data: articles = [],
    isLoading,
    error,
  } = useFetchArticleRecommendationsQuery(3);

  return (
    <VStack gap="8" align="start">
      <Text title="Рекомендуем" />
      <ArticleList
        target="_blank"
        articles={articles}
        isLoading={isLoading}
        error={
          error
            ? ((error as SerializedError)?.message ?? 'Непредвиденная ошибка')
            : undefined
        }
      />
    </VStack>
  );
};
