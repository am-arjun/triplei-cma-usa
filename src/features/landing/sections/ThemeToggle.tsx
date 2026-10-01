import { useEffect, useState } from 'react'
import { IconMoon, IconSun } from '@tabler/icons-react'

/** Must match the inline script in index.html, which applies the saved theme before CSS paints. */
const STORAGE_KEY = 'lp:theme'

/** Light/dark switch. The `.dark` class on <html> is the design-system convention. */
export function ThemeToggle() {
  // Start as light on the server and sync on mount so SSR markup and hydration agree.
  const [isDark, setIsDark] = useState(false)
  useEffect(() => setIsDark(document.documentElement.classList.contains('dark')), [])

  const toggle = () => {
    const next = !isDark
    document.documentElement.classList.toggle('dark', next)
    try {
      localStorage.setItem(STORAGE_KEY, next ? 'dark' : 'light')
    } catch {
      /* private mode / storage blocked — the choice just won't persist */
    }
    setIsDark(next)
  }

  return (
    <button
      type="button"
      className="cm-theme-toggle"
      onClick={toggle}
      aria-pressed={isDark}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Light mode' : 'Dark mode'}
    >
      {isDark ? <IconSun size={18} stroke={2} /> : <IconMoon size={18} stroke={2} />}
    </button>
  )
}
