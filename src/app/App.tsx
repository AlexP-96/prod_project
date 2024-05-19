import React, {Suspense} from 'react';
import {Link, Route, Routes} from "react-router-dom";
import { AboutPage } from '../pages/aboutPage';
import { HomePage } from '../pages/homePage';
import './styles/index.scss';
import {useTheme} from "./providers/ThemeProvider/lib/useTheme";
import {cls} from "../shared/lib/helpers/classNames/classNames";


const App = () => {
    const {theme, toggleTheme} = useTheme()
    return (
        <div className={`app ${theme}`}>
            <button onClick={toggleTheme}>Toggle Theme</button>
            <Link to={'/'}>Home</Link>
            <Link to={'/about'}>About</Link>
            <div className={cls('class', {behavior: true, hovered: true}, 'sdasad2', 'dsfsdf1')}>Hello</div>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/'} element={<HomePage/>}/>
                    <Route path={'/about'} element={<AboutPage/>}/>
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;