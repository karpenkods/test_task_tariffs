'use client'
import { Middleware, isRejectedWithValue } from '@reduxjs/toolkit'

import { pushDangerNotification } from './slices/snackbarSlice'
import { makeStore } from './store'

export const rtkQueryErrorLogger: Middleware = () => (next) => (action: any) => {
  if (isRejectedWithValue(action)) {
    if (action.payload?.status >= 500) {
      makeStore().dispatch(pushDangerNotification('Ошибка соединения, повторите попытку позже'))
    }
  }

  return next(action)
}
