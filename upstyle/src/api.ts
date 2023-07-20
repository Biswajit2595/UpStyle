
// import axios from 'axios';
// import {  GET_PRODUCT_MEN_FAILURE, GET_PRODUCT_MEN_REQUEST, GET_PRODUCT_MEN_SUCCESS,  GET_PRODUCT_WOMEN_FAILURE,  GET_PRODUCT_WOMEN_REQUEST,  GET_PRODUCT_WOMEN_SUCCESS } from './Redux/actionTypes';

// const API_URL = 'https://upstyle-fq0x.onrender.com';

// // Action Creator Functions
// export const getProductMen = () => {
//   return async (dispatch) => {
//     dispatch({type:GET_PRODUCT_MEN_REQUEST})
//     try {
//       const response = await axios.get(`${API_URL}/mens`);
//       const products = response.data;

//       dispatch({
//         type: GET_PRODUCT_MEN_SUCCESS,
//         payload: products,
//       });
//     } catch (error) {
//       // Handle error if request fails
//       dispatch({
//         type: GET_PRODUCT_MEN_FAILURE,
    
//       })
//     }
//   };
// };

// export const getProductWomen = async () => (dispatch:any)=>{
//   // return async (dispatch) => {
//     dispatch({type:GET_PRODUCT_WOMEN_REQUEST})
//     try {
//       const response = await axios.get(`${API_URL}/women`);
//       const products = response.data;

//       dispatch({
//         type: GET_PRODUCT_WOMEN_SUCCESS,
//         payload: products,
//       });
//     } catch (error) {
//       // Handle error if request fails
//       dispatch({
//         type: GET_PRODUCT_WOMEN_FAILURE,
    
//       })
//     // }
//   };
// };




import axios, { AxiosResponse } from 'axios';
import {
  GET_PRODUCT_MEN_FAILURE,
  GET_PRODUCT_MEN_REQUEST,
  GET_PRODUCT_MEN_SUCCESS,
  GET_PRODUCT_WOMEN_FAILURE,
  GET_PRODUCT_WOMEN_REQUEST,
  GET_PRODUCT_WOMEN_SUCCESS
} from './Redux/actionTypes';

const API_URL = 'https://upstyle-fq0x.onrender.com';

// Action Creator Functions
export const getProductMen = () => {
  return async (dispatch: (action: any) => void) => {
    dispatch({ type: GET_PRODUCT_MEN_REQUEST });
    try {
      const response: AxiosResponse = await axios.get(`${API_URL}/mens`);
      const products = response.data;

      dispatch({
        type: GET_PRODUCT_MEN_SUCCESS,
        payload: products,
      });
    } catch (error) {
      // Handle error if request fails
      dispatch({
        type: GET_PRODUCT_MEN_FAILURE,
      });
    }
  };
};

export const getProductWomen = () => {
  return async (dispatch: (action: any) => void) => {
    dispatch({ type: GET_PRODUCT_WOMEN_REQUEST });
    try {
      const response: AxiosResponse = await axios.get(`${API_URL}/women`);
      const products = response.data;

      dispatch({
        type: GET_PRODUCT_WOMEN_SUCCESS,
        payload: products,
      });
    } catch (error) {
      // Handle error if request fails
      dispatch({
        type: GET_PRODUCT_WOMEN_FAILURE,
      });
    }
  };
};
