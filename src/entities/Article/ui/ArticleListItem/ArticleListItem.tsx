import { memo } from 'react';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { classNames } from 'shared/lib/classNames/classNames';
import { useHover } from 'shared/lib/hooks/useHover';
import { Button, ButtonVariants } from 'shared/ui/button/Button';
import { Card } from 'shared/ui/card/Card';
import { Text } from 'shared/ui/text/Text';
import { Eye } from 'lucide-react';
import styles from './ArticleListItem.module.scss';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import {
  Article,
  ArticleBlockType,
  ArticleTextBlock,
  ArticleView,
} from '../../model/types/article';

interface ArticleListItemProps {
  article: Article;
  view: ArticleView;
}

export const ArticleListItem = memo(
  ({ article, view }: ArticleListItemProps) => {
    const { isHover, onMouseEnter, onMouseLeave } = useHover();
    const navigate = useNavigate();

    const onOpenArticle = () => {
      navigate(RoutePath.article_details + '/' + article.id);
    };

    return (
      <Card
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        view={view}
        className={classNames('', { [styles.isHover]: isHover }, [
          styles[view],
        ])}
        onClick={view === 'tile' ? onOpenArticle : undefined}
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
            <Button
              variant={ButtonVariants.CONTAINED}
              className={styles.button}
              onClick={onOpenArticle}
            >
              Читать далее...
            </Button>
          )}
        </div>
      </Card>
    );
  },
);
