import React from 'react'

import './App.css'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Products from './Components/Products/Products'
import Contact from './Components/Contact/Contact'



{
  /* The following line can be included in your src/index.js or App.js file */
}
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Components/Footer/Footer'
import AuthProvider from './Components/AuthProvider/AuthProvider.jsx';
import Cart from './Components/Cart/Cart'
import Checkout from './Components/Checkout/Checkout'
import LoginPage from './Components/LoginPage/LoginPage'



function App() {
  

  return (
    <>
    <Navbar/>

    <AuthProvider>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/products' element={<Products/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/checkout' element ={<Checkout/>}/>
      <Route path='/loginPage' element ={<LoginPage/>}/>
    </Routes>

    </AuthProvider>

    <Footer/>


    </>
  )
}

export default App
