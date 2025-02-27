import { screen } from '@testing-library/react';
import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import ArticleDetailsPage from './ArticleDetailsPage';

describe('articleDetailsPage', () => {
  beforeAll(() => {
    global.IntersectionObserver = class {
      constructor() {}
      observe() {}
      unobserve() {}
      disconnect() {}
    } as any;
  });

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
