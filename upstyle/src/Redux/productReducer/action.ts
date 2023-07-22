
import { getMensProd, getMensProduser, getProductData, getWomensProd, getWomensProduser } from "../../api";
import { GET_PRODUCT_FAILURE, GET_PRODUCT_MEN_SUCCESS, GET_PRODUCT_REQUEST, GET_PRODUCT_SUCCESS, GET_PRODUCT_WOMEN_SUCCESS } from "../actionTypes"

export const getProduct = ()=> (dispatch:any)=>{
  dispatch({type:GET_PRODUCT_REQUEST})

  getProductData().then((res)=>{
      dispatch({type:GET_PRODUCT_SUCCESS,payload:res.data})

  }).catch((error)=>{
      dispatch({type:GET_PRODUCT_FAILURE})

  })
}

// admin actions

export const getMens=()=>(dispatch:any)=>{
  dispatch({type:GET_PRODUCT_REQUEST})

  getMensProd().then((res)=>{
    console.log(res.data,"hellooooooo")
    dispatch({type:GET_PRODUCT_MEN_SUCCESS,payload:res.data})

}).catch((error)=>{
    dispatch({type:GET_PRODUCT_FAILURE})

})
}

export const getWomens=()=>(dispatch:any)=>{
  dispatch({type:GET_PRODUCT_REQUEST})

  getWomensProd().then((res)=>{
    dispatch({type:GET_PRODUCT_WOMEN_SUCCESS,payload:res.data})

}).catch((error)=>{
    dispatch({type:GET_PRODUCT_FAILURE})

})
}

export const getMensuser=(paramObj:any)=>(dispatch:any)=>{
  dispatch({type:GET_PRODUCT_REQUEST})

  getMensProduser(paramObj).then((res)=>{
    console.log(res.data,"hellooooooo")
    dispatch({type:GET_PRODUCT_MEN_SUCCESS,payload:res.data})

}).catch((error)=>{
    dispatch({type:GET_PRODUCT_FAILURE})

})
}

export const getWomensuser=(paramObj:any)=>(dispatch:any)=>{
  dispatch({type:GET_PRODUCT_REQUEST})

  getWomensProduser(paramObj).then((res)=>{
    dispatch({type:GET_PRODUCT_WOMEN_SUCCESS,payload:res.data})

}).catch((error)=>{
    dispatch({type:GET_PRODUCT_FAILURE})

})
}



