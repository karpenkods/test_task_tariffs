'use client'
import { FC, useEffect } from 'react'
import Image from 'next/image'

import { Stack, Typography, Button, Container } from '@mui/material'

import { useMatchMedia } from '@/common'
import background from '../../public/img/error.webp'

export interface ErrorProps {
  error: Error & { digest?: string }
  reset: () => void
}

const Error: FC<ErrorProps> = ({ error, reset }) => {
  const { isTablet, isMobile, isSmallMobile } = useMatchMedia()

  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <Stack
      sx={{
        maxWidth: '100vw',
        height: '100vh',
        width: '100%',
        backgroundColor: '#232829',
        borderRadius: isTablet || isMobile || isSmallMobile ? 0 : '60px',
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
          gap: isSmallMobile || isMobile ? '40px' : '50px'
        }}
      >
        <Image
          priority
          src={background}
          alt="Ошибка"
          width={isSmallMobile ? 300 : isMobile ? 350 : 800}
        />
        <Stack
          gap={isSmallMobile || isMobile ? '30px' : '50px'}
          width="100%"
          alignItems="center"
          justifyContent="center"
        >
          <Typography variant={isMobile || isSmallMobile ? 'h1' : 'h3'} textAlign="center">
            Сервер не отвечает, попробуйте позже
          </Typography>

          <Button onClick={() => reset()}>Попробовать</Button>
        </Stack>
      </Container>
    </Stack>
  )
}

export default Error
