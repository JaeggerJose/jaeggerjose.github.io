'use client'
import { ThemeProvider, useTheme } from 'next-themes'
import { useState, useEffect, useMemo } from 'react'

export function ColorModeProvider({ children }) {
  return (
    <ThemeProvider attribute="class" disableTransitionOnChange defaultTheme="light">
      {children}
    </ThemeProvider>
  )
}

export function useColorMode() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  return {
    colorMode: mounted ? (resolvedTheme || 'light') : 'light',
    setColorMode: setTheme,
    toggleColorMode: () => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark'),
    mounted,
  }
}

export function useColorModeValue(light, dark) {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  // SSR 和 hydration 階段一律回傳 light 值，確保 server/client 一致
  if (!mounted) return light
  return resolvedTheme === 'dark' ? dark : light
}
