'use client'
import { FC } from 'react'

import { Stack, Typography } from '@mui/material'

interface DiscountProps {
  interest: number
  select: boolean
}

export const Discount: FC<DiscountProps> = ({ interest, select }) => {
  return (
    <Stack
      position="absolute"
      top={-2}
      left={50}
      padding="4px 8px"
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
