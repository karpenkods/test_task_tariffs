'use client'
import { FC, useEffect } from 'react'

import { Stack, Typography, Button } from '@mui/material'

import { useMediaQueryDown } from '@/common'

export interface ErrorProps {
  error: Error & { digest?: string }
  reset: () => void
}

const Error: FC<ErrorProps> = ({ error, reset }) => {
  const isMobile = useMediaQueryDown('md')

  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <Stack gap="50px" width="100%" height="100vh" alignItems="center" justifyContent="center">
      <Typography variant={isMobile ? 'h1' : 'h3'}>Произошла ошибка</Typography>
      <Button onClick={() => reset()}>Попробовать снова</Button>
    </Stack>
  )
}

export default Error
