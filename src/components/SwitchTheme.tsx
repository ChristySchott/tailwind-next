'use client'
import { Lightbulb, LightbulbOff } from 'lucide-react'
import { useTheme, UseThemeProps } from 'next-themes'

import { Button } from './Button'

export type CustomUseThemeProps = UseThemeProps & {
  resolvedTheme: 'dark' | 'light'
}

export function SwitchTheme() {
  const { setTheme, resolvedTheme } = useTheme() as CustomUseThemeProps

  const handleSetTheme = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
  }

  return (
    <Button
      type="button"
      className="fixed bottom-6 right-6 shadow-sm"
      onClick={handleSetTheme}
    >
      {resolvedTheme === 'dark' ? <Lightbulb /> : <LightbulbOff />}
    </Button>
  )
}
