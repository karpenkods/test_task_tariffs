'use client'
/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useLayoutEffect } from 'react'

const queries = [
  '(max-width: 375px)',
  '(min-width: 376px) and (max-width: 766px)',
  '(min-width: 767px) and (max-width: 1199px)',
  '(min-width: 1200px)',
  '(min-width: 1280px)'
]

interface MediaQueryResult {
  isSmallMobile: boolean
  isMobile: boolean
  isTablet: boolean
  isDesktop: boolean
  isSmallScreen: boolean
}

export const useMatchMedia = (): MediaQueryResult => {
  const [values, setValues] = useState<boolean[]>(queries.map(() => false))

  useLayoutEffect(() => {
    const mediaQueryLists = queries.map((query) => matchMedia(query))

    setValues(mediaQueryLists.map((list) => list.matches))

    const handler = () => setValues(mediaQueryLists.map((list) => list.matches))

    mediaQueryLists.forEach((list) => list.addEventListener('change', handler))

    return () => mediaQueryLists.forEach((list) => list.removeEventListener('change', handler))
  }, [])

  return ['isSmallMobile', 'isMobile', 'isTablet', 'isDesktop', 'isSmallScreen'].reduce(
    (acc, screen, index) => ({
      ...acc,
      [screen]: values[index]
    }),
    {} as MediaQueryResult
  )
}
