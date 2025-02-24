'use client'

import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/Button'
import { useTheme } from 'next-themes'
import { Moon, Sun } from 'lucide-react'

export function ModeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Ensures theme is only applied on the client side
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null // Prevent rendering until the component has mounted
  }

  return (
    <Button variant="outline" size="icon" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
      {theme === 'dark' ? (
        <Sun className="h-[1.2rem] w-[1.2rem]" />
      ) : (
        <Moon className="h-[1.2rem] w-[1.2rem]" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
