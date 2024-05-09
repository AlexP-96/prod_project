import React, {FC, PropsWithChildren, useMemo} from 'react';
import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext} from "./ThemeContext";

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT;

type Props = {
    children: React.ReactNode
}

const ThemeProvider: FC<Props> = ({children}) => {

    const [theme, setTheme] = React.useState<Theme>(defaultTheme);


    const defaultProps = useMemo(() => ({
        theme: theme,
        setTheme: setTheme,
    }), [theme]);

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;