import { getArticleDetailsData } from '@/entities/Article';
import { RoutePath } from '@/shared/const/router';
import { Button } from '@/shared/ui/button/Button';
import { memo } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Edit } from 'lucide-react';
import styles from './ArticleDetailsPageHeader.module.scss';
import { getCanEdit } from '../../model/selectors/article';

const ArticleDetailsPageHeader = memo(() => {
  const navigate = useNavigate();

  const article = useSelector(getArticleDetailsData);
  const canEdit = useSelector(getCanEdit);

  const back = () => navigate(RoutePath.articles);
  const edit = () => navigate(`${RoutePath.articles}/${article?.id}/edit`);

  return (
    <div className={styles.ArticleDetailsPageHeader}>
      <Button onClick={back}>
        <ArrowLeft />
      </Button>

      {canEdit && (
        <Button onClick={edit} className={styles.edit}>
          <Edit />
        </Button>
      )}
    </div>
  );
});

export default ArticleDetailsPageHeader;
