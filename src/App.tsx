import { memo, Suspense } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { AboutPageAsync } from './pages/AboutPage/AboutPage.async';
import { MainPageAsync } from './pages/MainPage/MainPage.async';
import { Theme } from './theme/ThemeContext';
import useTheme from './theme/useTheme';
import { classNames } from './helpers/classNames/classNames';

const App = () => {
    const { theme, toggleTheme } = useTheme()
    
    return (
        <div className={classNames('app', {}, [theme])}>
            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>О сайте</Link>

            <button onClick={toggleTheme}>
                {theme === Theme.LIGHT ? Theme.LIGHT : Theme.DARK}
            </button>

            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/about'} element={<AboutPageAsync />} />
                    <Route path={'/'} element={<MainPageAsync />} />
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;
