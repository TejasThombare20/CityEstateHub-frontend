import { configureStore } from '@reduxjs/toolkit'
import estateSliceReducer from './estateSlice'

export const store = configureStore({
  reducer: {

    estate : estateSliceReducer
  },
 
})