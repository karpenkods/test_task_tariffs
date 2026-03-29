'use client'
import { FC, useState } from 'react'
import Image from 'next/image'
import { nanoid } from '@reduxjs/toolkit'

import { Button, Checkbox, Container, Grid, Link, Stack, Typography } from '@mui/material'

import { Tariff, useAppDispatch, useMatchMedia } from '@/common'
import { pushDangerNotification, pushSuccessNotification, useGetTariffsQuery } from '@/store'
import { Header } from '../Header'
import { TariffCard } from '../TariffCard'
import { Guarantee } from '../Guarantee'

interface LandingProps {
  tariffs: Tariff[]
}

export const Landing: FC<LandingProps> = ({ tariffs }) => {
  const [activeCard, setActiveCard] = useState(-1)
  const [check, setCheck] = useState(true)
  const [selectCheckbox, setSelectCheckbox] = useState(true)

  //___________________________________________________________________________
  const { data: tariffsData } = useGetTariffsQuery()
  // В проекте реализован RTK Query.
  // В данном случае, я использую хук useGetTariffsQuery для получения данных о тарифах.
  // Просто для примера, вывожу полученный массив в консоль.
  console.log(tariffsData)
  //___________________________________________________________________________

  const tariffsReverse = [...tariffs]?.reverse() || []
  const dispatch = useAppDispatch()

  const successfulPurchase = () => {
    setSelectCheckbox(true)
    dispatch(pushSuccessNotification('Покупка успешно оформлена!'))
  }

  const unsuccessfulPurchase = () => {
    setSelectCheckbox(false)
    dispatch(
      pushDangerNotification(
        'Ознакомьтесь с офертой и политикой конфиденциальности, чтобы совершить покупку'
      )
    )
  }

  const { isDesktop, isTablet, isMobile } = useMatchMedia()

  return (
    <Stack
      sx={{
        maxWidth: '100vw',
        minHeight: '100vh',
        backgroundColor: '#232829',
        borderRadius: isTablet || isMobile ? 0 : '60px'
      }}
    >
      <Container maxWidth="lg">
        <Header />
        <Typography variant="h1" mt="153px" mb="110px" lineHeight="110%" letterSpacing="0.4px">
          Выбери подходящий для себя <span style={{ color: '#FDB056' }}>тариф</span>
        </Typography>
        <Stack direction={isDesktop ? 'row' : 'column'} gap="86px" alignItems="center">
          <Stack position="relative" maxHeight="767px" alignItems="center">
            <Image priority src="/img/man.png" alt="Man" width={380} height={767} />
            <Stack
              position="absolute"
              left={0}
              bottom={0}
              width="100%"
              height="80px"
              sx={{
                background: 'linear-gradient(180deg, rgba(35, 40, 41, 0.00) 0%, #232829 100%)'
              }}
            />
          </Stack>
          <Stack width="100%" gap="20px">
            {!tariffsReverse?.length ? (
              <Typography
                variant="h2"
                fontSize="40px"
                color="#FDB056"
                align="center"
                lineHeight="110%"
                letterSpacing="0.4px"
              >
                Тарифы в обработке и скоро появятся на сайте
              </Typography>
            ) : (
              <Grid container spacing={1.75}>
                {tariffsReverse.map((tariff, index) => (
                  <TariffCard
                    key={nanoid()}
                    tariff={tariff}
                    index={index}
                    activeCard={activeCard < 0 ? tariff?.is_best : activeCard === index}
                    onSelect={setActiveCard}
                  />
                ))}
              </Grid>
            )}
            <Stack
              direction="row"
              gap="8px"
              maxWidth="499px"
              padding="18px 20px"
              borderRadius="20px"
              sx={{
                background: '#2D3233'
              }}
            >
              <Image src="/svg/alert.svg" alt="alert" width={24} height={26} />
              <Typography variant="body1" lineHeight="130%">
                Следуя плану на 3 месяца и более, люди получают в 2 раза лучший результат, чем за 1
                месяц
              </Typography>
            </Stack>
            <Stack direction="row" gap="12px" alignItems="center" maxWidth="605px" mt="10px">
              <Checkbox
                disableRipple
                checked={check}
                sx={{ mt: '3px' }}
                onChange={() => setCheck((prev) => !prev)}
                icon={
                  <Image
                    src={selectCheckbox ? '/svg/checkbox.svg' : '/svg/checkbox-red.svg'}
                    alt=""
                    width={32}
                    height={32}
                  />
                }
                checkedIcon={
                  <Image src="/svg/checkbox-checked.svg" alt="" width={32} height={32} />
                }
              />
              <Typography variant="body1" color="#CDCDCD" lineHeight="120%">
                Я согласен с <Link href="#">офертой рекуррентных платежей</Link> и{' '}
                <Link href="#">Политикой конфиденциальности</Link>
              </Typography>
            </Stack>
            <Button sx={{ mt: '-4px' }} onClick={check ? successfulPurchase : unsuccessfulPurchase}>
              Купить
            </Button>
            <Typography variant="body2" lineHeight="120%" color="#9B9B9B" mt="-6px">
              Нажимая кнопку «Купить», Пользователь соглашается на разовое списание денежных средств
              для получения пожизненного доступа к приложению. Пользователь соглашается, что данные
              кредитной/дебетовой карты будут сохранены для осуществления покупок дополнительных
              услуг сервиса в случае желания пользователя.
            </Typography>
          </Stack>
        </Stack>
        <Guarantee />
      </Container>
    </Stack>
  )
}
