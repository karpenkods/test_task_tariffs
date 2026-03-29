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

  const { isSmallScreen, isDesktop, isTablet, isMobile, isSmallMobile } = useMatchMedia()

  return (
    <Grid
      size={isMobile || isSmallMobile || best ? 12 : 4}
      padding={
        isSmallMobile
          ? '20px 16px 20px 20px'
          : isMobile
            ? '20px 16px 20px 30px'
            : best
              ? '30px 80px 26px 19px'
              : '70px 16px 26px 16px'
      }
      borderRadius={isMobile || isSmallMobile ? '20px' : best ? '34px' : '40px'}
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
        direction={isMobile || isSmallMobile || best ? 'row' : 'column'}
        gap={isSmallMobile ? '30px' : isMobile ? '50px' : '40px'}
        alignItems="center"
        justifyContent={
          isMobile || isSmallMobile ? 'flex-start' : isDesktop ? 'flex-end' : 'center'
        }
      >
        <Stack
          gap={isSmallScreen ? '12px' : '16px'}
          alignItems={isSmallMobile || isMobile ? 'flex-start' : 'center'}
          minWidth="121px"
        >
          <Typography
            variant="h2"
            lineHeight="120%"
            mt={(isSmallScreen && best) || isSmallMobile || isMobile ? 0 : '16px'}
          >
            {tariff?.period}
          </Typography>
          <Stack width="100%" alignItems={isSmallMobile || isMobile ? 'flex-start' : 'center'}>
            <Typography
              mt={(best && (isDesktop || isTablet)) || isSmallMobile || isMobile ? '-15px' : 0}
              variant="h6"
              color={activeCard ? '#FDB056' : '#FFF'}
              whiteSpace="nowrap"
            >
              {`${finished ? tariff?.full_price : tariff?.price} ₽`}
            </Typography>
            {finished ? (
              <Stack height={isSmallMobile || isMobile ? '11px' : '14px'} />
            ) : (
              <Typography
                variant="subtitle2"
                alignSelf="flex-end"
                mt={isSmallMobile || isMobile ? '-9px' : '-15px'}
                sx={{ textDecoration: 'line-through' }}
                color="#919191"
                lineHeight="120%"
                whiteSpace="nowrap"
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
          alignSelf={!isDesktop || best ? 'center' : 'flex-start'}
        >
          {isMobile || isSmallMobile ? tariff?.text.slice(0, 38) : tariff?.text}
        </Typography>
      </Stack>
      {!finished && <Discount interest={discount} select={activeCard} hit={tariff?.is_best} />}
      {tariff?.is_best && <Hit />}
    </Grid>
  )
}
