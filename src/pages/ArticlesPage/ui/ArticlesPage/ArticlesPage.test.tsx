import { screen } from '@testing-library/react';
import ArticlesPage from './ArticlesPage';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';

describe('sidebar', () => {
  test('render', () => {
    componentRender(<ArticlesPage />);
    expect(screen.getByTestId('articlesPage')).toBeInTheDocument();
  });
});
