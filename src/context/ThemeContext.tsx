import { createContext, ReactNode, useContext, useEffect, useState } from 'react'

interface ThemeContextValue {
	theme: string
	setTheme: React.Dispatch<React.SetStateAction<string>>
}

const ThemeContext = createContext<ThemeContextValue>({ theme: '', setTheme: () => {} })

interface ThemeProps {
	children: ReactNode
}

export const ThemeContextProvider = ({ children }: ThemeProps) => {
	const localStorageTheme = localStorage.getItem('theme')
	const initTheme = localStorageTheme ? localStorageTheme : ''

	const [theme, setTheme] = useState(initTheme)

	useEffect(() => {
		localStorage.setItem('theme', theme)
	}, [theme])

	return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>
}

export const useThemeContext = () => {
	return useContext(ThemeContext)
}
