import { useEffect, useState } from 'react';
import { Themes } from '../models/calculator';

export const useThemeDetector = (): Themes => {
    const getTheme = (e: MediaQueryList | MediaQueryListEvent):Themes => e.matches ? 'dark' : 'light'  

    const [theme, setTheme] = useState<Themes>(getTheme(window.matchMedia("(prefers-color-scheme: dark)")))


    useEffect(() => {
        let darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)")
        
        const mqListener = (e: MediaQueryListEvent) => setTheme(getTheme(e))


        darkThemeMq.addListener(mqListener)
        return () => darkThemeMq.removeListener(mqListener)
    }, [])

    return theme
}