import { RouteProps } from 'react-router-dom';
import { UserRole } from './sort';

export type AppRouteProps = RouteProps & {
  authOnly?: boolean;
  roles?: UserRole[];
};
