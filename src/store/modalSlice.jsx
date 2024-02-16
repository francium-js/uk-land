import { createSlice } from '@reduxjs/toolkit'
export const modalSlice = createSlice({
  name: 'counter',
  initialState: {
    open: false,
  },
  reducers: {
    openModal: (state, action) => {
      state.open = action.payload
    },
  },
})

export const { openModal } = modalSlice.actions

export default modalSlice.reducer
