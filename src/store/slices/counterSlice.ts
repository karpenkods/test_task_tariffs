import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { ICounter } from '@/common'

const initialState: ICounter = {
  minutes: 1,
  seconds: 59,
  color: '#FFBB00'
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setMinutes: (state, action: PayloadAction<number>) => {
      state.minutes = action.payload
    },
    setSeconds: (state, action: PayloadAction<number>) => {
      state.seconds = action.payload
    },
    setColor: (state, action: PayloadAction<string>) => {
      state.color = action.payload
    }
  }
})

export const { setMinutes, setSeconds, setColor } = counterSlice.actions

export default counterSlice.reducer
