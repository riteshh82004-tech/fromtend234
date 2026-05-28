import { useCallback, useEffect, useState } from 'react'
import type { ThemeName } from '../types'

const STORAGE_KEY = 'agarwal-electropower-theme'

function resolveTheme(stored: string | null): ThemeName {
  if (stored === 'corporate' || stored === 'business') return stored
  return 'corporate'
}

function getSystemTheme(): ThemeName {
  if (typeof window === 'undefined') return 'corporate'
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'business' : 'corporate'
}

export function initTheme(): void {
  const stored = localStorage.getItem(STORAGE_KEY)
  const theme = stored ? resolveTheme(stored) : getSystemTheme()
  document.documentElement.setAttribute('data-theme', theme)
}

export function useTheme() {
  const [theme, setThemeState] = useState<ThemeName>(() => {
    if (typeof window === 'undefined') return 'corporate'
    const stored = localStorage.getItem(STORAGE_KEY)
    return stored ? resolveTheme(stored) : getSystemTheme()
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem(STORAGE_KEY, theme)
  }, [theme])

  const toggleTheme = useCallback(() => {
    setThemeState((prev) => (prev === 'corporate' ? 'business' : 'corporate'))
  }, [])

  const setTheme = useCallback((name: ThemeName) => {
    setThemeState(name)
  }, [])

  return { theme, toggleTheme, setTheme, isDark: theme === 'business' }
}
