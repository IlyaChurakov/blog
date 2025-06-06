import { getRouteArticleDetails } from '@/shared/const/router';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useHover } from '@/shared/lib/hooks/useHover';
import { ArticleView } from '@/shared/types/sort';
import { AppImage } from '@/shared/ui/appImage';
import { AppLink } from '@/shared/ui/appLink';
import { Button, ButtonVariants } from '@/shared/ui/button';
import { Card } from '@/shared/ui/card';
import { Skeleton } from '@/shared/ui/skeleton';
import { Text } from '@/shared/ui/text';
import { HTMLAttributeAnchorTarget, memo } from 'react';
import { Eye } from 'lucide-react';
import styles from './ArticleListItem.module.scss';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import { ArticleBlockType } from '../../model/consts/consts';
import { Article, ArticleTextBlock } from '../../model/types/article';

interface ArticleListItemProps {
  article: Article;
  view: ArticleView;
  target?: HTMLAttributeAnchorTarget;
}

export const ArticleListItem = memo(
  ({ article, view, target }: ArticleListItemProps) => {
    const { isHover, onMouseEnter, onMouseLeave } = useHover();

    const content = (
      <Card
        data-testid="ArticleItem"
        view={view}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        className={classNames('', { [styles.isHover]: isHover }, [
          styles[view],
          view === 'tile'
            ? 'testArticleListItemTileView'
            : 'testArticleListItemListView',
        ])}
      >
        <AppImage
          src={article.img}
          fallback={<Skeleton width="100" height={250} />}
          className={styles.image}
          alt={article.title}
        />

        <div className={styles.description}>
          <div className={styles.description_meta}>
            <Text text={article.type.join(' ')} truncate />

            <div className={styles.description_meta_views}>
              <Text text={String(article.views)} />
              <Eye />
            </div>
          </div>

          {view === 'tile' && <Text text={article.title} truncate />}

          {view === 'list' && (
            <ArticleTextBlockComponent
              block={
                article.blocks.find(
                  (block) => block.type === ArticleBlockType.TEXT,
                ) as ArticleTextBlock
              }
              className={styles.textBlock}
            />
          )}

          {view === 'list' && (
            <AppLink
              target={target}
              to={getRouteArticleDetails(article.id)}
              className={styles.button}
            >
              <Button variant={ButtonVariants.CONTAINED}>
                Читать далее...
              </Button>
            </AppLink>
          )}
        </div>
      </Card>
    );

    return view === 'tile' ? (
      <AppLink target={target} to={getRouteArticleDetails(article.id)}>
        {content}
      </AppLink>
    ) : (
      content
    );
  },
);
