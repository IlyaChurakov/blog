import { componentRender } from '@/shared/lib/tests/componentRender/componentRender';
import { screen } from '@testing-library/react';
import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import ArticlesPage from './ArticlesPage';

describe('sidebar', () => {
  beforeAll(() => {
    global.IntersectionObserver = class {
      constructor() {}
      observe() {}
      unobserve() {}
      disconnect() {}
    } as any;
  });

  test('render', async () => {
    componentRender(
      <Routes>
        <Route
          path="/articles"
          element={
            <Suspense fallback="">
              <ArticlesPage />
            </Suspense>
          }
        />
      </Routes>,
      { route: '/articles' },
    );

    expect(await screen.findByTestId('articlesPage')).toBeInTheDocument();
  });
});
