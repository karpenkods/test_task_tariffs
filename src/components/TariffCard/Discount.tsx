'use client'
import { FC } from 'react'

import { Stack, Typography } from '@mui/material'

import { useMatchMedia } from '@/common'

interface DiscountProps {
  interest: number
  select: boolean
  hit: boolean
}

export const Discount: FC<DiscountProps> = ({ interest, select, hit }) => {
  const { isMobile, isSmallMobile } = useMatchMedia()

  return (
    <Stack
      width="fit-content"
      position="absolute"
      top={-2}
      left={isSmallMobile || isMobile ? '' : 50}
      right={isSmallMobile ? (hit ? 50 : 28) : isMobile ? (hit ? 62 : 30) : ''}
      padding={isSmallMobile || isMobile ? '3px 6px' : '4px 8px'}
      borderRadius="0 0 8px 8px"
      bgcolor="#FD5656"
      borderTop={select ? '2px solid #FDB056' : '2px solid transparent'}
    >
      <Typography variant="h5" lineHeight="130%">
        {`-${interest}%`}
      </Typography>
    </Stack>
  )
}
