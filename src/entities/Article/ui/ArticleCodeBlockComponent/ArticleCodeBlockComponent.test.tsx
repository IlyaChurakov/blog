import { screen } from '@testing-library/react';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import { ArticleCodeBlockComponent } from './ArticleCodeBlockComponent';
import { ArticleBlockType } from '../../model/consts/consts';

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
