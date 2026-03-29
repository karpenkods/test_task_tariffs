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
      color: '#FFF',
      '@media (min-width:375px) and (max-width:766px)': {
        fontSize: 24
      },
      '@media (max-width:374px)': {
        fontSize: 22
      }
    },
    h2: {
      fontWeight: 500,
      fontSize: 26,
      color: '#FFF',
      '@media (min-width:375px) and (max-width:766px)': {
        fontSize: 18
      },
      '@media (max-width:374px)': {
        fontSize: 16
      }
    },
    h3: {
      fontWeight: 500,
      fontSize: 28,
      color: '#FFF',
      '@media (min-width:375px) and (max-width:766px)': {
        fontSize: 18
      },
      '@media (max-width:374px)': {
        fontSize: 16
      }
    },
    h4: {
      fontFamily: raleway.style.fontFamily,
      fontWeight: 700,
      fontSize: 40,
      lineHeight: '110%',
      fontVariantNumeric: 'lining-nums',
      '@media (min-width:375px) and (max-width:766px)': {
        fontSize: 32
      },
      '@media (max-width:374px)': {
        fontSize: 28
      }
    },
    h5: {
      fontFamily: urbanist.style.fontFamily,
      fontWeight: 500,
      fontSize: 22,
      lineHeight: '130%',
      '@media (min-width:375px) and (max-width:766px)': {
        fontSize: 16
      },
      '@media (max-width:374px)': {
        fontSize: 13
      }
    },
    h6: {
      fontWeight: 600,
      fontSize: 50,
      color: '#FFF',
      '@media (min-width:375px) and (max-width:766px)': {
        fontSize: 34
      },
      '@media (max-width:374px)': {
        fontSize: 30
      }
    },
    body1: {
      fontWeight: 400,
      fontSize: 16,
      color: '#FFF',
      '@media (min-width:375px) and (max-width:766px)': {
        fontSize: 14
      },
      '@media (max-width:374px)': {
        fontSize: 14
      }
    },
    body2: {
      fontWeight: 400,
      fontSize: 14,
      color: '#FFF',
      '@media (min-width:375px) and (max-width:766px)': {
        fontSize: 10
      },
      '@media (max-width:374px)': {
        fontSize: 10
      }
    },
    subtitle1: {
      fontWeight: 600,
      fontSize: 24,
      color: '#FFF',
      '@media (min-width:375px) and (max-width:766px)': {
        fontSize: 18
      },
      '@media (max-width:374px)': {
        fontSize: 14
      }
    },
    subtitle2: {
      fontWeight: 400,
      fontSize: 24,
      color: '#FFF',
      '@media (min-width:375px) and (max-width:766px)': {
        fontSize: 16
      },
      '@media (max-width:374px)': {
        fontSize: 14
      }
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
          '@media (min-width:375px) and (max-width:766px)': {
            alignSelf: 'center',
            fontSize: 18,
            width: '100%',
            maxWidth: '450px',
            height: '63px',
            padding: 0
          },
          '@media (max-width:374px)': {
            width: '100%',
            fontSize: 18,
            height: '55px',
            padding: 0
          }
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
