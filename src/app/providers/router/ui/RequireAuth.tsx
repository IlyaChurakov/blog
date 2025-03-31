import { getUserAuthData, isUserAdmin } from '@/entities/User';
import { RoutePath } from '@/shared/const/router';
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
    return <Navigate to={RoutePath.main} state={{ from: location }} replace />;
  }

  if (isAdminRoute && !isAdmin) {
    return (
      <Navigate to={RoutePath.forbidden} state={{ from: location }} replace />
    );
  }

  return children;
}
