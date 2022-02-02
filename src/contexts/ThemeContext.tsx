import { createContext, ReactNode, useEffect, useState } from "react";

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

export function ThemeProvider({children} : {children: ReactNode}) {
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