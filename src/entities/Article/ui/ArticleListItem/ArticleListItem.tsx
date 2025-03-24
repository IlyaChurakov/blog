import { HTMLAttributeAnchorTarget, memo } from 'react';
import { RoutePath } from '@/shared/config/routeConfig/routeConfig';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useHover } from '@/shared/lib/hooks/useHover';
import AppLink from '@/shared/ui/appLink/AppLink';
import { Button, ButtonVariants } from '@/shared/ui/button/Button';
import { Card } from '@/shared/ui/card/Card';
import { Text } from '@/shared/ui/text/Text';
import { Eye } from 'lucide-react';
import styles from './ArticleListItem.module.scss';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import { ArticleBlockType } from '../../model/consts/consts';
import {
  Article,
  ArticleTextBlock,
  ArticleView,
} from '../../model/types/article';

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
        view={view}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        className={classNames('', { [styles.isHover]: isHover }, [
          styles[view],
        ])}
      >
        <img src={article.img} className={styles.image} />

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
              to={RoutePath.article_details + '/' + article.id}
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
      <AppLink
        target={target}
        to={RoutePath.article_details + '/' + article.id}
      >
        {content}
      </AppLink>
    ) : (
      content
    );
  },
);
