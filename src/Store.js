import { configureStore } from '@reduxjs/toolkit'
import  counterSlice  from './Redux/Slice/counterSlice'
import  cartSlice  from './Redux/Slice/cartSlice'

export const store = configureStore({
  reducer: {

    counter : counterSlice,
    allcart : cartSlice,
  },
})