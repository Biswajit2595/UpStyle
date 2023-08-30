


import axios from 'axios';
import { signuptype } from './constants';



const API_URL = 'https://upstyle-fq0x.onrender.com';

export const getProductData= ()=>{
  return axios.get(`${API_URL}/product`);
}

export const getMensProd=()=>{
  return axios.get(`${API_URL}/mens`);
} 

// export const getMensProdSingle=(id:any)=>{
//   return axios.get(`${API_URL}/mens/${id}`)
// }

export const getWomensProd=()=>{
  return axios.get(`${API_URL}/women`);
}

// export const getWomenProdSingle=(id:any)=>{
//   return axios.get(`${API_URL}/women/${id}`)
// }


export const getMensProduser=(paramObj:any)=>{
  
  return axios.get(`${API_URL}/mens`,paramObj);
} 

export const getWomensProduser=(paramObj:any)=>{
  return axios.get(`${API_URL}/women`,paramObj);
}

export const AddMensProd=(product:any)=>{
  return axios.post(`${API_URL}/mens`,product)
}

export const PutMensProd=(product:any,id:any)=>{
  return axios.put(`${API_URL}/mens/${id}`,product)
}

export const DeletMensProd=(id:any)=>{
  return axios.delete(`${API_URL}/mens/${id}`)
}

export const PutWomenProd=(product:any,id:number)=>{
  return axios.put(`${API_URL}/women/${id}`,product)
}

export const DeletWomenProd=(id:any)=>{
  return axios.delete(`${API_URL}/women/${id}`)
}

export const AddWomensProd=(product:any)=>{
  return axios.post(`${API_URL}/women`,product)
}

export const makingSignupPost = (data:signuptype)=>{
  return axios.post(`${API_URL}/user`,data);

}

