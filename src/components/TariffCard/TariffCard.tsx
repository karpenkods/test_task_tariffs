'use client'
import { FC } from 'react'

import { Grid, Stack, Typography } from '@mui/material'

import { Tariff, useAppSelector, useMatchMedia } from '@/common'
import { Hit } from './Hit'
import { Discount } from './Discount'

interface TariffProps {
  tariff: Tariff
  index: number
  activeCard: boolean
  onSelect: (index: number) => void
}

export const TariffCard: FC<TariffProps> = ({ tariff, index, activeCard, onSelect }) => {
  const minutes = useAppSelector((state) => state.counter.minutes)
  const seconds = useAppSelector((state) => state.counter.seconds)

  const discount = Math.round(((tariff.full_price - tariff.price) / tariff.full_price) * 100)
  const best = tariff.is_best
  const finished = minutes === 0 && seconds === 0

  const { isSmallScreen, isDesktop } = useMatchMedia()

  return (
    <Grid
      size={best ? 12 : 4}
      padding={best ? '30px 80px 26px 19px' : '70px 16px 26px 16px'}
      borderRadius={best ? '34px' : '40px'}
      border={activeCard ? '2px solid #FDB056' : '2px solid #484D4E'}
      bgcolor="#313637"
      position="relative"
      onClick={() => !activeCard && onSelect(index)}
      sx={{
        cursor: activeCard ? 'default' : 'pointer',
        transition: 'all 0.3s ease-in-out',
        '&:hover': {
          boxShadow: activeCard ? 'none' : 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;'
        }
      }}
    >
      <Stack
        direction={best ? 'row' : 'column'}
        gap="40px"
        alignItems="center"
        justifyContent={isDesktop ? 'flex-end' : 'center'}
      >
        <Stack gap="16px" alignItems="center">
          <Typography variant="h2" lineHeight="120%" mt={isSmallScreen && best ? 0 : '16px'}>
            {tariff?.period}
          </Typography>
          <Stack width="100%" alignItems="center">
            <Typography
              mt={best ? '-15px' : 0}
              fontSize="50px"
              fontWeight={600}
              color={activeCard ? '#FDB056' : '#FFF'}
            >
              {`${finished ? tariff?.full_price : tariff?.price} ₽`}
            </Typography>
            {finished ? (
              <Stack height="14px" />
            ) : (
              <Typography
                variant="subtitle2"
                alignSelf="flex-end"
                mt="-15px"
                sx={{ textDecoration: 'line-through' }}
                color="#919191"
                lineHeight="120%"
              >
                {`${tariff?.full_price} ₽`}
              </Typography>
            )}
          </Stack>
        </Stack>
        <Typography
          variant="body1"
          maxWidth={best ? '328px' : '100%'}
          lineHeight="130%"
          py="4px"
          alignSelf={best ? 'center' : 'flex-start'}
        >
          {tariff?.text}
        </Typography>
      </Stack>
      {!finished && <Discount interest={discount} select={activeCard} />}
      {tariff?.is_best && <Hit />}
    </Grid>
  )
}
