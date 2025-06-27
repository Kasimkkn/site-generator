import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import { node } from 'prop-types';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const defaultTheme = {
        primary: "#7579ef",
        background: "#ffffff",
        text: "#111111",
    };

    const [theme, setTheme] = useState(() => {
        const storedTheme = localStorage.getItem("app-theme");
        return storedTheme ? JSON.parse(storedTheme) : defaultTheme;
    });

    const updateTheme = (newTheme) => {
        setTheme(newTheme);

        Object.entries(newTheme).forEach(([key, value]) => {
            document.documentElement.style.setProperty(`--color-${key}`, value);
        });

        localStorage.setItem("app-theme", JSON.stringify(newTheme));
    };

    useEffect(() => {
        Object.entries(theme).forEach(([key, value]) => {
            document.documentElement.style.setProperty(`--color-${key}`, value);
        });
    }, []);

    const contextValue = useMemo(() => ({ theme, setTheme: updateTheme }), [theme, updateTheme]);
    return (
        <ThemeContext.Provider value={contextValue}>
            {children}
        </ThemeContext.Provider>
    );
};

ThemeProvider.propTypes = {
    children: node
};
export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
};
