import axios from 'axios';

import axios from 'axios';

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
