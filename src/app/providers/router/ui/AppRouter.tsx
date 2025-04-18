import { routeConfig } from '@/app/providers/router/config/routeConfig';
import { AppRouteProps } from '@/shared/types/router';
import { PageLoader } from '@/widgets/PageLoader';
import { memo, Suspense, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import RequireAuth from './RequireAuth';

const AppRouter = () => {
  const renderWithWrapper = useCallback((route: AppRouteProps) => {
    const element = <>{route.element}</>;

    return (
      <Route
        key={route.path}
        path={route.path}
        element={
          route.authOnly ? (
            <RequireAuth roles={route.roles}>{element}</RequireAuth>
          ) : (
            element
          )
        }
      />
    );
  }, []);

  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {Object.values(routeConfig).map((route) => renderWithWrapper(route))}
      </Routes>
    </Suspense>
  );
};

export default memo(AppRouter);
