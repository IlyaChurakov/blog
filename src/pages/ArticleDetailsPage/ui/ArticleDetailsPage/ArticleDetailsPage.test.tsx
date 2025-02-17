import { screen } from '@testing-library/react';
import ArticleDetailsPage from './ArticleDetailsPage';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import { Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';

describe('articleDetailsPage', () => {
  test('render', () => {
    componentRender(
      <Routes>
        <Route
          path="/articles/:id"
          element={
            <Suspense fallback="">
              <ArticleDetailsPage />
            </Suspense>
          }
        />
      </Routes>,
      { route: '/articles/1' },
    );
    expect(screen.getByTestId('articlesDetailsPage')).toBeInTheDocument();
  });
});
