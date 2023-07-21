
import axios from 'axios';

const API_URL = 'https://upstyle-fq0x.onrender.com';


export const getProductData= ()=>{
  return axios.get(`${API_URL}/product`);
}

