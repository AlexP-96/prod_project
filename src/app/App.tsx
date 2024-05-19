import React from 'react';
import { Navbar } from 'widgets/navbar';
import './styles/index.scss';
import { AppRouter } from './providers/router';
import { useTheme } from './providers/ThemeProvider/lib/useTheme';

const App = () => {
    const {
        theme,
        toggleTheme,
    } = useTheme();
    return (
        <div className={`app ${theme}`}>
            <Navbar/>
            <button onClick={toggleTheme}>Toggle Theme</button>
            <AppRouter/>
        </div>
    );
};

export default App;