import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

const initialState: any = {
  demo: undefined,
}

export const demoSlice = createSlice({
  name: 'demo',
  initialState,
  reducers: {
    saveData: (state, action: PayloadAction<any>) => {
      state.demo = action.payload
    },
  },
})

export const { saveData } = demoSlice.actions

export default demoSlice.reducer
