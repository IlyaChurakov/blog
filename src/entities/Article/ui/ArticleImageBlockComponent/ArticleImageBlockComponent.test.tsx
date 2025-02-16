import React from 'react';
import { screen } from '@testing-library/react';
import { ArticleImageBlockComponent } from './ArticleImageBlockComponent';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';

describe('sidebar', () => {
  test('render', () => {
    componentRender(<ArticleImageBlockComponent />);
    expect(
      screen.getByTestId('articleImageBlockComponent'),
    ).toBeInTheDocument();
  });
});
