import { createContext, useContext, useState, } from "react";

type Theme = 'light' | 'dark'
type ThemeProvider = {
    theme: Theme;
    setTheme: (theme: Theme) => void
} | undefined
const CustomContext = createContext<ThemeProvider>(undefined)
type ContextThemeProvider =
    { children: React.ReactNode, 
        defaultTheme?: Theme  }

export const CustomContextProvider = ({ children, defaultTheme='light' }: ContextThemeProvider) => {
    const [theme, setTheme] = useState<Theme>(defaultTheme)
    return (
        <CustomContext.Provider value={{ theme, setTheme }}>
            {children}
        </CustomContext.Provider>
    )
}

export const useCustomContext = (): ThemeProvider => {
    const context = useContext(CustomContext)
    return context
}