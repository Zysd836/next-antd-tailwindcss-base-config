import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query/react'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { baseAPI } from './services/baseApi'
import orderSliceReducer, { orderSlice } from './slices/order'

export const store = configureStore({
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(baseAPI.middleware),
  reducer: {
    [baseAPI.reducerPath]: baseAPI.reducer,
    [orderSlice.name]: orderSliceReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export const useTypedDispatch = () => useDispatch<AppDispatch>()
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector

setupListeners(store.dispatch)
