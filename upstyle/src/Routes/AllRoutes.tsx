import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import PrivateRoute from '../Components/PrivateRoute';

// ... other imports

// Wrap the import statements for lazy loading
const Home = React.lazy(() => import('../Pages/Home'));
const About = React.lazy(() => import('../Pages/About'));
const Admin = React.lazy(() => import('../Pages/Admin'));
const Cart = React.lazy(() => import('../Pages/Cart'));
const Checkout = React.lazy(() => import('../Pages/Checkout'));
const Login = React.lazy(() => import('../Pages/Login'));
const Men = React.lazy(() => import('../Pages/Men'));
const Women = React.lazy(() => import('../Pages/Women'));
const Product = React.lazy(() => import('../Pages/Product'));
const SignUp = React.lazy(() => import('../Pages/SignUp'));
const EditProduct = React.lazy(() => import('../Pages/EditProduct'));
const ContactPage = React.lazy(() => import('../Pages/Contact'));
const EditProductWomen = React.lazy(() => import('../Pages/EditProductWomen'));
const NotFound  = React.lazy(() => import('../Pages/NotFound'));

const SingleProdMen = React.lazy(() => import('../Pages/SingleProdMen'));
const SingleWomen = React.lazy(() => import('../Pages/SingleWomen'));

const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Suspense ><Home /></Suspense>}></Route>
      <Route path='/about' element={<Suspense ><About /></Suspense>}></Route>
      <Route path='/admin' element={<Suspense ><Admin /></Suspense>}></Route>
      <Route path='/cart' element={<PrivateRoute><Suspense ><Cart /></Suspense></PrivateRoute>}></Route>
      <Route path='/payment' element={<PrivateRoute><Suspense ><Checkout /></Suspense></PrivateRoute>}></Route>
      <Route path='/login' element={<Suspense ><Login /></Suspense>}></Route>
      <Route path='/mens' element={<Suspense ><Men /></Suspense>}></Route>
      <Route path='/womens' element={<Suspense ><Women /></Suspense>}></Route>
      <Route path='/singleproduct/men/:id' element={<Suspense><SingleProdMen /></Suspense>}></Route>
      <Route path='/singleproduct/women/:id' element={<Suspense ><SingleWomen /></Suspense>}></Route>
      <Route path='/signup' element={<Suspense ><SignUp /></Suspense>}></Route>
      <Route path='/contact' element={<Suspense ><ContactPage /></Suspense>}></Route>
      <Route path='/edit/:id' element={<Suspense ><EditProduct /></Suspense>}></Route>
      <Route path='/edit/:id/women' element={<Suspense ><EditProductWomen /></Suspense>}></Route>
      <Route path='*' element={<Suspense ><NotFound /></Suspense>}></Route>
    </Routes>
  );
};

export default AllRoutes;
