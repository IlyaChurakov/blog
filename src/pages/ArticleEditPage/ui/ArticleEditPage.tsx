import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { Page } from '@/widgets/Page';
import { classNames } from '@/shared/lib/classNames/classNames';
import styles from './ArticleEditPage.module.scss';

const ArticleEditPage = memo(() => {
  const { id } = useParams<{ id: string }>();
  const isEdit = !!id;

  return (
    <Page className={classNames(styles.ArticleEditPage)}>
      {isEdit ? 'edit' : 'new'}
    </Page>
  );
});

export default ArticleEditPage;
