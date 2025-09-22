'use client'

import { createContext, useContext, useEffect, useState } from 'react'

type Theme = 'light' | 'dark'

interface ThemeContextType {
  theme: Theme
  setTheme: (theme: Theme) => void
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light')
  const [mounted, setMounted] = useState(false)

  // Check for saved theme preference or default to 'light'
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme
    if (savedTheme) {
      setTheme(savedTheme)
    } else {
      // Check system preference if no saved preference
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
      setTheme('light') // Default to light as requested
      localStorage.setItem('theme', 'light')
    }
    setMounted(true)
  }, [])

  // Update localStorage and document class when theme changes
  useEffect(() => {
    if (mounted) {
      localStorage.setItem('theme', theme)
      if (theme === 'dark') {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    }
  }, [theme, mounted])

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  // Prevent hydration mismatch
  if (!mounted) {
    return <div className="min-h-screen bg-white">{children}</div>
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
