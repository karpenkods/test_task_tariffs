import { Metadata } from 'next'
import { FC, ReactNode } from 'react'
import { Montserrat } from 'next/font/google'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter'
import { Analytics } from '@vercel/analytics/next'

import { ProviderSnackbar, ProviderStore, ProviderTheme } from '@/providers'

const montserrat = Montserrat({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin', 'cyrillic'],
  display: 'swap'
})

export interface Props {
  children: ReactNode
}

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    icons: '/d.png',
    title: '4A Consulting',
    description: 'Тестовое задание',
    openGraph: {
      title: '4A Consulting',
      description: 'Тестовое задание',
      url: 'https://portfolio-delta-pearl-80.vercel.app',
      images: ['/og-image.jpeg']
    }
  }
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body className={montserrat.className} suppressHydrationWarning>
        <AppRouterCacheProvider>
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
