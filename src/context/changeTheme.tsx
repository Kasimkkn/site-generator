
import React, { createContext, useContext, useEffect, useMemo, useState, ReactNode } from "react";
import { ThemeContextType } from "@/types/global";

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
    children: ReactNode;
}

interface ThemeData {
    primary: string;
    background: string;
    text: string;
    accent: string;
    secondary: string;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    const defaultTheme: ThemeData = {
        primary: "#00FF41", // Electric lime
        background: "#000000", // Deep black
        text: "#ffffff", // Pure white
        accent: "#FF006E", // Neon pink
        secondary: "#FF8500", // Warning orange
    };

    const [theme, setTheme] = useState<ThemeData>(() => {
        try {
            const storedTheme = localStorage.getItem("devbuilder-theme");
            if (storedTheme) {
                const parsed = JSON.parse(storedTheme) as ThemeData;
                return { ...defaultTheme, ...parsed };
            }
            return defaultTheme;
        } catch {
            return defaultTheme;
        }
    });

    const updateTheme = (newTheme: ThemeData) => {
        const mergedTheme = { ...defaultTheme, ...newTheme };
        setTheme(mergedTheme);

        // Update CSS custom properties for brutalist design
        Object.entries(mergedTheme).forEach(([key, value]) => {
            document.documentElement.style.setProperty(`--color-${key}`, value);
        });

        // Additional brutalist-specific properties
        document.documentElement.style.setProperty('--brutalist-primary', mergedTheme.primary);
        document.documentElement.style.setProperty('--brutalist-accent', mergedTheme.accent);
        document.documentElement.style.setProperty('--brutalist-secondary', mergedTheme.secondary);

        localStorage.setItem("devbuilder-theme", JSON.stringify(mergedTheme));
    };

    useEffect(() => {
        // Apply theme on mount
        Object.entries(theme).forEach(([key, value]) => {
            document.documentElement.style.setProperty(`--color-${key}`, value);
        });

        // Set brutalist-specific properties
        document.documentElement.style.setProperty('--brutalist-primary', theme.primary);
        document.documentElement.style.setProperty('--brutalist-accent', theme.accent);
        document.documentElement.style.setProperty('--brutalist-secondary', theme.secondary);
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
