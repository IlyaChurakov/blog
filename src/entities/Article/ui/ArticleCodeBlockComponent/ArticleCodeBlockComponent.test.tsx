import { screen } from '@testing-library/react';
import { ArticleCodeBlockComponent } from './ArticleCodeBlockComponent';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import { ArticleBlockType } from 'entities/Article/model/types/article';

describe('sidebar', () => {
  test('render', () => {
    componentRender(
      <ArticleCodeBlockComponent
        block={{
          id: '1',
          code: 'console.log(1);',
          type: ArticleBlockType.CODE,
        }}
      />,
    );
    expect(screen.getByTestId('articleCodeBlockComponent')).toBeInTheDocument();
  });
});
