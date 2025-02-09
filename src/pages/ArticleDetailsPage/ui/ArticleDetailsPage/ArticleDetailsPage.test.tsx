import { screen } from '@testing-library/react';
import ArticleDetailsPage from './ArticleDetailsPage';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';

describe('sidebar', () => {
  test('render', () => {
    componentRender(<ArticleDetailsPage />);
    expect(screen.getByTestId('articleDetailsPage')).toBeInTheDocument();
  });
});
