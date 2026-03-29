import { Metadata } from 'next'
import { FC, ReactNode } from 'react'
import { Montserrat } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'

import { AppRouterCacheProvider } from '@mui/material-nextjs/v16-appRouter'

import { ProviderSnackbar, ProviderStore, ProviderTheme } from '@/providers'
import '@/styles/global.scss'

const montserrat = Montserrat({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin', 'cyrillic'],
  display: 'swap'
})

export interface Props {
  children: ReactNode
}

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    icons: 'img/d.png',
    title: 'Тестовое задание 4А.Консалтинг',
    description:
      'Тестовое задание для кандидата на вакансию Frontend-разработчик компании 4А.Консалтинг',
    openGraph: {
      title: 'Тестовое задание 4А.Консалтинг',
      description:
        'Тестовое задание для кандидата на вакансию Frontend-разработчик компании 4А.Консалтинг',
      url: 'https://portfolio-delta-pearl-80.vercel.app',
      images: ['img/d.png']
    }
  }
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body className={montserrat.className} suppressHydrationWarning>
        <AppRouterCacheProvider options={{ prepend: true }}>
          <ProviderStore>
            <ProviderSnackbar>
              <ProviderTheme>
                {children}
                <Analytics />
              </ProviderTheme>
            </ProviderSnackbar>
          </ProviderStore>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}

export default Layout
