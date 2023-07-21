import { getProductData } from "../../api"
import { GET_PRODUCT_FAILURE, GET_PRODUCT_REQUEST, GET_PRODUCT_SUCCESS } from "../actionTypes"



export const getProduct = ()=> (dispatch:any)=>{
    dispatch({type:GET_PRODUCT_REQUEST})

    getProductData().then((res)=>{
        dispatch({type:GET_PRODUCT_SUCCESS,payload:res.data})

    }).catch((error)=>{
        dispatch({type:GET_PRODUCT_FAILURE})

    })
}