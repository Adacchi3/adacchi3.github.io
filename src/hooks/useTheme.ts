'use client'

import { useEffect, useState } from 'react'

type Theme = 'light' | 'dark'

const applyTheme = (t: Theme) => {
  document.documentElement.classList.toggle('dark', t === 'dark')
  document.documentElement.classList.toggle('light', t === 'light')
}

const getSavedTheme = (): Theme | null => {
  const raw = sessionStorage.getItem('theme')
  return raw === 'dark' || raw === 'light' ? raw : null
}

export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>('light')

  useEffect(() => {
    const initial =
      getSavedTheme() ??
      (window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light')
    applyTheme(initial)
    setTheme(initial)
  }, [])

  const toggleTheme = () => {
    const next = theme === 'light' ? 'dark' : 'light'
    sessionStorage.setItem('theme', next)
    applyTheme(next)
    setTheme(next)
  }

  return { theme, toggleTheme }
}
