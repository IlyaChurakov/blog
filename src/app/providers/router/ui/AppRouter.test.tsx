import {
  getRouteAbout,
  getRouteAdminPanel,
  getRouteProfile,
} from '@/shared/const/router';
import { componentRender } from '@/shared/lib/tests/componentRender/componentRender';
import { screen } from '@testing-library/react';
import AppRouter from './AppRouter';

describe('app/router/AppRouter', () => {
  test('should render AppRouter', async () => {
    componentRender(<AppRouter />, {
      route: getRouteAbout(),
    });

    expect(await screen.findByTestId('AboutPage')).toBeInTheDocument();
  });

  test('page not found', async () => {
    componentRender(<AppRouter />, {
      route: '/someNonExistRoute',
    });

    expect(await screen.findByTestId('NotFoundPage')).toBeInTheDocument();
  });

  test('access to protected page for authenticated user who can visit', async () => {
    componentRender(<AppRouter />, {
      route: getRouteProfile('1'),
      initialState: {
        user: { authData: { id: '1' } },
      },
    });

    expect(await screen.findByTestId('ProfilePage')).toBeInTheDocument();
  });

  test('access denied', async () => {
    componentRender(<AppRouter />, {
      route: getRouteAdminPanel(),
      initialState: {
        user: { authData: { id: '1' } },
      },
    });

    expect(await screen.findByTestId('ForbiddenPage')).toBeInTheDocument();
  });

  test('access to admin page', async () => {
    componentRender(<AppRouter />, {
      route: getRouteAdminPanel(),
      initialState: {
        user: { authData: { id: '1', roles: ['ADMIN'] } },
      },
    });

    expect(await screen.findByTestId('AdminPanelPage')).toBeInTheDocument();
  });
});
