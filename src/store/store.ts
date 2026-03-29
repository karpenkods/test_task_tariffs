import { combineReducers, configureStore } from '@reduxjs/toolkit'

import snackbarReducer from './slices/snackbarSlice'
import counterReducer from './slices/counterSlice'
import { tariffsApi } from './api/tariffsApi'
import { rtkQueryErrorLogger } from './error'

const rootReducer = combineReducers({
  [tariffsApi.reducerPath]: tariffsApi.reducer,
  snackbar: snackbarReducer,
  counter: counterReducer
})

export const makeStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(rtkQueryErrorLogger, tariffsApi.middleware)
  })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
