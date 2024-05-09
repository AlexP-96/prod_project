import React, {Suspense} from 'react';
import {Link, Route, Routes} from "react-router-dom";
import {HomePageAsync} from "./pages/homePage/Home.async";
import {AboutPageAsync} from "./pages/aboutPage/About.async";
import './styles/index.scss';
import {useTheme} from "./theme/useTheme";


const App = () => {
    const {theme, toggleTheme} = useTheme()
    return (
        <div className={`app ${theme}`}>
            <button onClick={toggleTheme}>Toggle Theme</button>
            <Link to={'/'}>Home</Link>
            <Link to={'/about'}>About</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/'} element={<HomePageAsync/>}/>
                    <Route path={'/about'} element={<AboutPageAsync/>}/>
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;