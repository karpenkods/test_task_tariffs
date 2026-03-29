'use client'
import { FC } from 'react'
import Image from 'next/image'

import { Stack, Typography, Button, Link, Container } from '@mui/material'

import { useMatchMedia } from '@/common'
import background from '../../public/img/404.png'

const NotFound: FC = () => {
  const { isTablet, isMobile, isSmallMobile } = useMatchMedia()

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
          flexDirection: 'column'
        }}
      >
        <Image priority src={background} alt="404" width={isSmallMobile || isMobile ? 300 : 500} />
        <Stack gap="32px" width="100%" alignItems="center" justifyContent="center">
          <Typography
            fontSize={isSmallMobile || isMobile ? '48px !important' : 64}
            fontWeight={500}
            color="#FDB056"
          >
            404
          </Typography>
          <Typography variant="h1">Страница не найдена</Typography>
          <Link href="/" sx={{ minWidth: '200px' }}>
            <Button>На главную</Button>
          </Link>
        </Stack>
      </Container>
    </Stack>
  )
}

export default NotFound
