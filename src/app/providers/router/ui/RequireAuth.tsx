import { getUserAuthData, isUserAdmin } from '@/entities/User';
import { getRouteForbidden, getRouteMain } from '@/shared/const/router';
import { UserRole } from '@/shared/types';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

interface RequireAuthProps {
  children: JSX.Element;
  roles?: UserRole[];
}

export default function RequireAuth({ children, roles }: RequireAuthProps) {
  const user = useSelector(getUserAuthData);
  const location = useLocation();
  const isAdminRoute = roles?.includes('ADMIN');
  const isAdmin = useSelector(isUserAdmin);

  if (!user) {
    return <Navigate to={getRouteMain()} state={{ from: location }} replace />;
  }

  if (isAdminRoute && !isAdmin) {
    return (
      <Navigate to={getRouteForbidden()} state={{ from: location }} replace />
    );
  }

  return children;
}
