'use client'
import { FC } from 'react'

import { Typography } from '@mui/material'

import { useMatchMedia } from '@/common'

export const Hit: FC = () => {
  const { isMobile, isSmallMobile } = useMatchMedia()

  return (
    <Typography
      position="absolute"
      top={isSmallMobile || isMobile ? 6 : 16}
      right={isSmallMobile || isMobile ? 14 : 20}
      fontSize={isSmallMobile ? '13px' : isMobile ? '16px' : '22px'}
      fontWeight={500}
      color="#FDB056"
      lineHeight="130%"
      letterSpacing={isSmallMobile ? '0.39px' : isMobile ? '0.48px' : '0.66px'}
    >
      хит!
    </Typography>
  )
}
