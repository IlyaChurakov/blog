import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { Suspense, useEffect } from 'react';
import { userActions } from 'entities/User/model/slice/userSlice';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch]);

  return (
    <div className={classNames('app')}>
      <Suspense fallback="">
        <Sidebar />
        <div className="content-page">
          <Navbar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};

export default App;
