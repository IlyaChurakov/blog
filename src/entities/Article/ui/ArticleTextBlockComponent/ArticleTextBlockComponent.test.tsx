import React from 'react';
import { screen } from '@testing-library/react';
import { ArticleTextBlockComponent } from './ArticleTextBlockComponent';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';

describe('sidebar', () => {
  test('render', () => {
    componentRender(<ArticleTextBlockComponent />);
    expect(screen.getByTestId('articleTextBlockComponent')).toBeInTheDocument();
  });
});
