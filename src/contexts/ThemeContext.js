import { useLocalStorage } from 'browser_storage_hook_react';
import React, { createContext, useEffect, useState } from 'react';

import { theDarkTheme, theLightTheme } from '../theme/theme';

export const ThemeContext = createContext()

function ThemeContextProvider(props) {
    // eslint-disable-next-line
    const [theme, setTheme] = useState(theDarkTheme);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [isDark, setDark] = useLocalStorage('toggleMode', true);

    const setHandleDrawer = () => {
        setDrawerOpen(!drawerOpen)
    }

    const changeTheme = () => {
        isDark ? setTheme(theLightTheme) : setTheme(theDarkTheme)
        setDark(!isDark)
    }

    useEffect(() => {
        isDark ? setTheme(theDarkTheme) : setTheme(theLightTheme)
    }, [isDark])


    const value = { theme, drawerOpen, setHandleDrawer, changeTheme, isDark }
    return (
        <ThemeContext.Provider value={value}>
            {props.children}
        </ThemeContext.Provider>
    )
}


export default ThemeContextProvider