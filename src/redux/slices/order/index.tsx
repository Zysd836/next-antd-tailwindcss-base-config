import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

const initialState: any = {
  listService: [],
  listMaps: [],
  dataNewOrder: {},
  dataPlaceMap: {},
}

export const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    saveListService: (state, action: PayloadAction<any>) => {
      state.listService = action.payload
    },
  },
})

export const { saveListService } = orderSlice.actions

export default orderSlice.reducer
