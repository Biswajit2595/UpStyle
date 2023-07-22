import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Admin from '../Pages/Admin'
import AdminList from '../Pages/AdminList'
import Cart from '../Pages/Cart'
import Checkout from '../Pages/Checkout'
import Login from '../Pages/Login'
import Men from '../Pages/Men'
import Women from '../Pages/Women'
import Product from '../Pages/Product'
import SignUp from '../Pages/SignUp'
import EditProduct from '../Pages/EditProduct'
import ContactPage from '../Pages/Contact'
import EditProductWomen from '../Pages/EditProductWomen'

const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/about' element={<About />}></Route>
      <Route path='/admin' element={<Admin />}></Route>
      <Route path='/cart' element={<Cart />}></Route>
      <Route path='/payment' element={<Checkout />}></Route>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/mens' element={<Men />}></Route>
      <Route path='/womens' element={<Women />}></Route>
      <Route path='/singleproduct' element={<Product />}></Route>
      <Route path='/signup' element={<SignUp />}></Route>
      <Route path='/contact' element={<ContactPage />}></Route>
      <Route path='/edit/:id' element={<EditProduct/>}></Route>
      <Route path='/edit/:id/women' element={<EditProductWomen/>}></Route>
    </Routes>
  )
}
export default AllRoutes