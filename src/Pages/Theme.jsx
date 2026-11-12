import React, {createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

export function ThemeProvider({children}) {
    const [theme,setTheme] = useState(() => {
        return localStorage.getItem('app-theme') || 'light';
    });

    useEffect(() => {
        localStorage.setItem('app-theme',theme);
        document.body.className = theme;
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark':'light'));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }} >
            {children}
        </ThemeContext.Provider>
    );
}
