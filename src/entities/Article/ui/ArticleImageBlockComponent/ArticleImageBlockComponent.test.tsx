import { componentRender } from '@/shared/lib/tests/componentRender/componentRender';
import { screen } from '@testing-library/react';
import React from 'react';
import { ArticleImageBlockComponent } from './ArticleImageBlockComponent';

describe('sidebar', () => {
  test('render', () => {
    componentRender(<ArticleImageBlockComponent />);
    expect(
      screen.getByTestId('articleImageBlockComponent'),
    ).toBeInTheDocument();
  });
});
