import { configureStore } from '@reduxjs/toolkit'
import { modalSlice } from './modalSlice.jsx'
export const store = configureStore({
  reducer: {
    modalController: modalSlice.reducer,
  },
})
