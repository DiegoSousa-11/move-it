import { createContext, useEffect, useState } from "react";
import { IProvider } from "../models/ICommon";

interface ThemeContextProps {
    theme: any;
    switchTheme: () => void;
}

const styleTheme = {
    dark: {
        primaryColor: "#181818",
        secondaryColor: "#252525",
        text: "white",
        textSecondary: "#666666",
    }
}

export const ThemeContext = createContext({} as ThemeContextProps);

export function ThemeProvider({children} : IProvider) {
    const [isDark, setIsDark] = useState(false);
    const [theme, setTheme] = useState(isDark ? styleTheme.dark : null);

    const switchTheme = () => setIsDark(!isDark);

    useEffect(() => {
        setTheme(isDark ? styleTheme.dark : null);
    }, [isDark])

    return(
        <ThemeContext.Provider value={{
            theme,
            switchTheme
        }}>
            {children}
        </ThemeContext.Provider>
    )
}