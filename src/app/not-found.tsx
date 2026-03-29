'use client'
import { FC, useEffect } from 'react'
import Image from 'next/image'

import { Stack, Typography, Button, Link, Container } from '@mui/material'

import { useAppDispatch } from '@/common'
import { pushWarningNotification } from '@/store'
import background from '../../public/img/404.png'

const NotFound: FC = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(pushWarningNotification('Страница не найдена'))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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
          flexDirection: 'column'
        }}
      >
        <Image priority src={background} alt="404" width={500} />
        <Stack gap="32px" width="100%" alignItems="center" justifyContent="center">
          <Typography fontSize={64} fontWeight={500} color="#FDB056">
            404
          </Typography>
          <Typography variant="h1">Страница не найдена</Typography>
          <Link href="/">
            <Button>На главную</Button>
          </Link>
        </Stack>
      </Container>
    </Stack>
  )
}

export default NotFound
