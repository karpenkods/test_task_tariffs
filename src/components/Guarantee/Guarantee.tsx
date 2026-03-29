'use client'
import { FC } from 'react'

import { Stack, Typography } from '@mui/material'

import { useMatchMedia } from '@/common'

export const Guarantee: FC = () => {
  const { isTablet, isMobile, isSmallMobile } = useMatchMedia()

  return (
    <Stack
      gap={isSmallMobile || isMobile ? '10px' : '30px'}
      mt={isSmallMobile ? '22px' : isMobile ? '24px' : '66px'}
      mb={isSmallMobile ? '20px' : isMobile ? '30px' : isTablet ? '60px' : '150px'}
      padding={isSmallMobile || isMobile ? '12px' : '20px'}
      borderRadius={isSmallMobile || isMobile ? '20px' : '30px'}
      border="1px solid #484D4E"
    >
      <Stack
        padding={isSmallMobile || isMobile ? '10px 18px 12px 18px' : '16px 30px'}
        width="fit-content"
        borderRadius="30px"
        border="1px solid #81FE95"
        bgcolor="#2D3233"
      >
        <Typography variant="h3" color="#81FE95" lineHeight="120%">
          гарантия возврата 30 дней
        </Typography>
      </Stack>
      <Typography
        variant="subtitle2"
        color="#DCDCDC"
        lineHeight="130%"
        fontSize={isSmallMobile ? '13px !important' : isMobile ? '14px !important' : undefined}
      >
        Мы уверены, что наш план сработает для тебя и ты увидишь видимые результаты уже через 4
        недели! Мы даже готовы полностью вернуть твои деньги в течение 30 дней с момента покупки,
        если ты не получишь видимых результатов.
      </Typography>
    </Stack>
  )
}
