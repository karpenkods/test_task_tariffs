'use client'
import { FC } from 'react'

import { Typography } from '@mui/material'

export const Hit: FC = () => {
  return (
    <Typography
      position="absolute"
      top={16}
      right={20}
      fontSize="22px"
      fontWeight={500}
      color="#FDB056"
      lineHeight="130%"
      letterSpacing="0.66px"
    >
      хит!
    </Typography>
  )
}
