import useTheme from 'app/providers/ThemeProvider/lib/useTheme';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { Suspense } from 'react';

const App = () => {
    const { theme } = useTheme()
    
    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback=''>
                <Sidebar/>
                <div></div>
                <div className='content-page'>
                    <Navbar/>
                    <AppRouter/>
                </div>
            </Suspense>
        </div>
    );
};

export default App;
