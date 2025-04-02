import { Page } from '@/widgets/Page';
import { memo } from 'react';
import { useParams } from 'react-router-dom';

const ArticleEditPage = memo(() => {
  const { id } = useParams<{ id: string }>();
  const isEdit = !!id;

  return <Page>{isEdit ? 'edit' : 'new'}</Page>;
});

export default ArticleEditPage;
