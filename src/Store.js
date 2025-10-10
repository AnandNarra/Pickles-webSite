import { configureStore } from '@reduxjs/toolkit'
import  counterSlice  from './Redux/Slice/counterSlice'
import  cartSlice  from './Redux/Slice/cartSlice'
import  LoginSlice  from './Redux/Slice/LoginSlice'

export const store = configureStore({
  reducer: {

    counter : counterSlice,
    allcart : cartSlice,
    loginFrom : LoginSlice,
  },
})