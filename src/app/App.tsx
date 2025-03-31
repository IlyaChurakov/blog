import { AppRouter } from '@/app/providers/router';
import { getUserInitialized } from '@/entities/User';
import { userActions } from '@/entities/User';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { Navbar } from '@/widgets/Navbar';
import { Sidebar } from '@/widgets/Sidebar';
import { Suspense, useEffect } from 'react';
import { useSelector } from 'react-redux';

const App = () => {
  const dispatch = useAppDispatch();
  const initialized = useSelector(getUserInitialized);

  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch]);

  return (
    <div className={classNames('app')}>
      <Suspense fallback="">
        <Sidebar />
        <div className="content-page">
          <Navbar />
          {initialized && <AppRouter />}
        </div>
      </Suspense>
    </div>
  );
};

export default App;
