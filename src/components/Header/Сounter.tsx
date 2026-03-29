'use client'
import { FC, useEffect, useState } from 'react'

import { Stack, Typography } from '@mui/material'

import { useAppDispatch, useAppSelector, useMatchMedia } from '@/common'
import { pushWarningNotification, setColor, setMinutes, setSeconds } from '@/store'
import { Star } from './Star'

export const Counter: FC = () => {
  const minutes = useAppSelector((state) => state.counter.minutes)
  const seconds = useAppSelector((state) => state.counter.seconds)
  const color = useAppSelector((state) => state.counter.color)

  const dispatch = useAppDispatch()
  const [visible, setVisible] = useState(true)

  const shouldBlink = minutes === 0 && seconds < 30 && seconds !== 0

  const { isSmallMobile, isMobile } = useMatchMedia()

  useEffect(() => {
    if (minutes === 0 && seconds === 0) {
      dispatch(setColor('#FFF'))
      dispatch(pushWarningNotification('Пробная неделя закончилась'))
      return
    }
    if (minutes === 0 && seconds < 30) {
      dispatch(setColor('#FF4E4E'))
    }
    if (seconds === 0) {
      dispatch(setMinutes(minutes - 1))
      dispatch(setSeconds(59))
      return
    }
    const timer = setInterval(() => dispatch(setSeconds(seconds - 1)), 1000)
    return () => clearInterval(timer)
  }, [dispatch, minutes, seconds])

  useEffect(() => {
    if (!shouldBlink) {
      setVisible(true)
      return
    }
    const interval = setInterval(() => setVisible((v) => !v), 500)
    return () => clearInterval(interval)
  }, [shouldBlink])

  return (
    <Stack direction="row" spacing={1} alignItems="center">
      <Star visible={visible} />
      <Stack direction="row" gap="6px" alignItems="center" justifyContent="center">
        <Typography
          color={visible ? color : 'transparent'}
          variant="h4"
          width={isSmallMobile ? '14px' : isMobile ? '18px' : '28px'}
          textAlign="center"
          textTransform="uppercase"
        >
          {minutes}
        </Typography>
        <Typography color={visible ? color : 'transparent'} variant="h4">
          :
        </Typography>
        <Typography
          color={visible ? color : 'transparent'}
          variant="h4"
          width={isSmallMobile ? '32px' : isMobile ? '40px' : '56px'}
          textAlign="center"
        >
          {seconds % 60 < 10 ? `0${seconds % 60}` : seconds % 60}
        </Typography>
      </Stack>
      <Star visible={visible} />
    </Stack>
  )
}
