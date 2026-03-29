'use client'
import { FC } from 'react'

import { Stack, Typography } from '@mui/material'

import { useMatchMedia } from '@/common'

export const Guarantee: FC = () => {
  const { isTablet, isMobile } = useMatchMedia()

  return (
    <Stack
      gap="30px"
      mt="66px"
      mb={isTablet || isMobile ? '80px' : '150px'}
      padding="20px"
      borderRadius="30px"
      border="1px solid #484D4E"
    >
      <Stack
        padding="16px 30px"
        width="fit-content"
        borderRadius="30px"
        border="1px solid #81FE95"
        bgcolor="#2D3233"
      >
        <Typography variant="h3" color="#81FE95" lineHeight="120%">
          гарантия возврата 30 дней
        </Typography>
      </Stack>
      <Typography variant="subtitle2" color="#DCDCDC" lineHeight="130%">
        Мы уверены, что наш план сработает для тебя и ты увидишь видимые результаты уже через 4
        недели! Мы даже готовы полностью вернуть твои деньги в течение 30 дней с момента покупки,
        если ты не получишь видимых результатов.
      </Typography>
    </Stack>
  )
}
