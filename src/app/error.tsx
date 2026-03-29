'use client'
import { FC, useEffect } from 'react'
import Image from 'next/image'

import { Stack, Typography, Button, Container } from '@mui/material'

import { useAppDispatch, useMatchMedia } from '@/common'
import { pushDangerNotification } from '@/store'
import background from '../../public/img/error.webp'

export interface ErrorProps {
  error: Error & { digest?: string }
  reset: () => void
}

const Error: FC<ErrorProps> = ({ error, reset }) => {
  const { isMobile } = useMatchMedia()
  const dispatch = useAppDispatch()

  useEffect(() => {
    console.error(error)
  }, [error])

  const handleReset = () => {
    reset()
    if (error) dispatch(pushDangerNotification('Сервер не отвечает, попробуйте позже'))
  }

  return (
    <Stack
      sx={{
        maxWidth: '100vw',
        height: '100vh',
        backgroundColor: '#232829',
        borderRadius: '60px',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          justifyContent: 'center',
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
          gap: '50px'
        }}
      >
        <Image priority src={background} alt="Ошибка" width={800} />
        <Stack gap="50px" width="100%" alignItems="center" justifyContent="center">
          <Typography variant={isMobile ? 'h1' : 'h3'}>
            Сервер не отвечает, попробуйте позже
          </Typography>

          <Button onClick={handleReset}>Попробовать</Button>
        </Stack>
      </Container>
    </Stack>
  )
}

export default Error
