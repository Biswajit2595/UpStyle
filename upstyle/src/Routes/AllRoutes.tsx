import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Admin from '../Pages/Admin'
import Cart from '../Pages/Cart'
import Checkout from '../Pages/Checkout'
import Login from '../Pages/Login'
import Men from '../Pages/Men'
import Women from '../Pages/Women'
import SignUp from '../Pages/SignUp'
import EditProduct from '../Pages/EditProduct'
import ContactPage from '../Pages/Contact'
import EditProductWomen from '../Pages/EditProductWomen'
import { NotFound } from '../Pages/NotFound'
import PrivateRoute from '../Components/PrivateRoute'
import SingleProdMen from '../Pages/SingleProdMen'
import SingleWomen from '../Pages/SingleWomen'


const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/about' element={<About />}></Route>
      <Route path='/admin' element={<Admin />}></Route>
      <Route path='/cart' element={<PrivateRoute><Cart /></PrivateRoute>}></Route>
      <Route path='/payment' element={<PrivateRoute><Checkout /></PrivateRoute>}></Route>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/mens' element={<Men />}></Route>
      <Route path='/womens' element={<Women />}></Route>
      <Route path='/singleproduct/men/:id' element={<SingleProdMen />}></Route>
      <Route path='/singleproduct/women/:id' element={<SingleWomen />}></Route>
      <Route path='/signup' element={<SignUp />}></Route>
      <Route path='/contact' element={<ContactPage />}></Route>
      <Route path='/edit/:id' element={<EditProduct/>}></Route>
      <Route path='/edit/:id/women' element={<EditProductWomen/>}></Route>
      <Route path='*' element={<NotFound />}></Route>

    </Routes>
  )
}
export default AllRoutes