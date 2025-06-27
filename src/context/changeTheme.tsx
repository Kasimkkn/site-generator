
import React, { createContext, useContext, useEffect, useMemo, useState, ReactNode } from "react";
import { ThemeContextType } from "../types/global";

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
    children: ReactNode;
}

interface ThemeData {
    primary: string;
    background: string;
    text: string;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    const defaultTheme: ThemeData = {
        primary: "#7579ef",
        background: "#ffffff",
        text: "#111111",
    };

    const [theme, setTheme] = useState<ThemeData>(() => {
        try {
            const storedTheme = localStorage.getItem("app-theme");
            if (storedTheme) {
                const parsed = JSON.parse(storedTheme) as ThemeData;
                return parsed;
            }
            return defaultTheme;
        } catch {
            return defaultTheme;
        }
    });

    const updateTheme = (newTheme: ThemeData) => {
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
    }, [theme]);

    const contextValue = useMemo(() => ({ theme, setTheme: updateTheme }), [theme]);
    
    return (
        <ThemeContext.Provider value={contextValue}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = (): ThemeContextType => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
};
