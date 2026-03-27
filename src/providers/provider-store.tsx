'use client'
import { FC, ReactNode, useRef } from 'react'
import { Provider } from 'react-redux'

import { AppStore, makeStore } from '@/store'

export interface ProviderStoreProps {
  children: ReactNode
}

export const ProviderStore: FC<ProviderStoreProps> = ({ children }) => {
  const storeRef = useRef<AppStore | null>(null)

  if (!storeRef.current) storeRef.current = makeStore()

  return <Provider store={storeRef.current}>{children}</Provider>
}
