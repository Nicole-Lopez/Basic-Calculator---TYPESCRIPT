import { useState } from 'react';
import { useThemeDetector } from './useThemeDetector';
import { Themes } from '../models/calculator';

interface useToggleThemeReturn {
    theme: Themes;
    toggleTheme: () => void;
}

export const useToggleTheme = ():useToggleThemeReturn => {
   	let systemTheme = useThemeDetector()
	const [theme, setTheme] = useState<Themes>(systemTheme)

	const toggleTheme = () => {
		setTheme(theme => theme === 'dark' ? 'light' : 'dark')
	}

   	return {
   		theme,
   		toggleTheme
   	}
}