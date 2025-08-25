"use client"

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export function NameTag() {
  const [mounted, setMounted] = useState(false)
  const { theme, resolvedTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  // Show a placeholder during initial render to prevent hydration mismatch
  if (!mounted) {
    return (
      <div className="h-4 sm:h-12 w-auto bg-transparent" style={{ width: '200px' }}>
        {/* Invisible placeholder to maintain layout */}
      </div>
    )
  }

  const isDark = resolvedTheme === 'dark'

  return (
    <img
      src={isDark ? "name-dark.svg" : "name.svg"}
      draggable="false"
      className="h-12 sm:h-15 w-auto"
      alt="Nicole Trieu"
    />
  )
}