'use client'
import { FC } from 'react'

import { Stack, Typography } from '@mui/material'

import { useMatchMedia } from '@/common'
import { Counter } from './Сounter'

export const Header: FC = () => {
  const { isSmallMobile, isMobile, isDesktop } = useMatchMedia()

  return (
    <Stack position="fixed" top={0} left={0} width="100%" zIndex="100" sx={{ background: '#FFF' }}>
      <Stack
        justifyContent="center"
        alignItems="center"
        padding="8px 0"
        height={isSmallMobile ? '74px' : isMobile ? '85px' : '103px'}
        gap={isSmallMobile || isMobile ? '4px' : 0}
        sx={{
          backgroundColor: '#1D5B43',
          borderTopLeftRadius: !isDesktop ? 0 : '60px',
          borderTopRightRadius: !isDesktop ? 0 : '60px'
        }}
      >
        <Typography variant="subtitle1" component="p" lineHeight="130%">
          Успейте открыть пробную неделю
        </Typography>
        <Counter />
      </Stack>
    </Stack>
  )
}
