
import axios from 'axios';
import { signuptype } from './constants';


const API_URL = 'https://upstyle-fq0x.onrender.com';

export const getProductData= ()=>{
  return axios.get(`${API_URL}/product`);
}

export const getMensProd=()=>{
  return axios.get(`${API_URL}/mens`);
}

export const getWomensProd=()=>{
  return axios.get(`${API_URL}/women`);
}


export const AddMensProd=(product:any)=>{
  return axios.post(`${API_URL}/mens`,product)
}

export const PutMensProd=(product:any)=>{
  return axios.post(`${API_URL}/mens`,product)
}

export const DeletMensProd=(id:any)=>{
  return axios.delete(`${API_URL}/mens/${id}`)
}

export const PutWomenProd=({product}:any)=>{
  return axios.post(`${API_URL}/women`,product)
}

export const DeletWomenProd=(id:any)=>{
  return axios.delete(`${API_URL}/women/${id}`)
}

export const AddWomensProd=(product:any)=>{
  return axios.post(`${API_URL}/women`,product)

export const makingSignupPost = (data:signuptype)=>{
  return axios.post(`${API_URL}/user`,data);

}