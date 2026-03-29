'use client'
import { Montserrat, Raleway, Urbanist } from 'next/font/google'
import { createTheme } from '@mui/material/styles'

const montserrat = Montserrat({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin', 'cyrillic'],
  display: 'swap'
})
const raleway = Raleway({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin', 'cyrillic'],
  display: 'swap'
})
const urbanist = Urbanist({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap'
})

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1280,
      xl: 1440
    }
  },
  typography: {
    fontFamily: montserrat.style.fontFamily,
    h1: {
      fontWeight: 700,
      fontSize: 40,
      color: '#FFF'
    },
    h2: {
      fontWeight: 500,
      fontSize: 26,
      color: '#FFF'
    },
    h3: {
      fontWeight: 500,
      fontSize: 28,
      color: '#FFF'
    },
    h4: {
      fontFamily: raleway.style.fontFamily,
      fontWeight: 700,
      fontSize: 40,
      lineHeight: '110%',
      fontVariantNumeric: 'lining-nums',
      '@media (min-width:376px) and (max-width:766px)': {
        fontSize: 32
      },
      '@media (max-width:375px)': {
        fontSize: 28
      }
    },
    h5: {
      fontFamily: urbanist.style.fontFamily,
      fontWeight: 500,
      fontSize: 22,
      lineHeight: '130%'
    },
    body1: {
      fontWeight: 400,
      fontSize: 16,
      color: '#FFF'
    },
    body2: {
      fontWeight: 400,
      fontSize: 14,
      color: '#FFF'
    },
    subtitle1: {
      fontWeight: 600,
      fontSize: 24,
      color: '#FFF',
      '@media (min-width:376px) and (max-width:766px)': {
        fontSize: 18
      },
      '@media (max-width:375px)': {
        fontSize: 14
      }
    },
    subtitle2: {
      fontWeight: 400,
      fontSize: 24,
      color: '#FFF'
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          width: '352px',
          height: '66px',
          textTransform: 'none',
          padding: '20px 60px',
          fontSize: '20px',
          borderRadius: '20px',
          backgroundColor: '#FDB056',
          color: '#191E1F',
          fontWeight: 700,
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            backgroundColor: '#fb9b2d'
          },
          '@media (max-width:600px)': {}
        }
      }
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          margin: '0 !important',
          padding: 0,
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            backgroundColor: 'transparent',
            opacity: 0.8
          }
        }
      }
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: '#CDCDCD',
          textDecoration: 'underline',
          textDecorationColor: '#CDCDCD',
          textUnderlineOffset: '3px',
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            textDecorationColor: 'transparent'
          }
        }
      }
    }
  }
})
