import React,{ReactNode} from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom';
import { JsxElement } from 'typescript';

const PrivateRoute= ({ children }:any) => {

  const isAuth = useSelector((store:any)=> store.authReducer.isAuth);
  const location = useLocation()

  if(JSON.parse(isAuth)===false){
    return <Navigate to='/login' state={location.pathname} replace={true}  />
  }

  return children;
}

export default PrivateRoute