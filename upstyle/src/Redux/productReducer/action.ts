

import { getMensProd, getMensProduser, getProductData, getWomensProd, getWomensProduser } from "../../api";
import { GET_PRODUCT_FAILURE, GET_PRODUCT_MEN_SUCCESS, GET_PRODUCT_REQUEST, GET_PRODUCT_SUCCESS, GET_PRODUCT_WOMEN_SUCCESS } from "../actionTypes"

import { getMensProd, getProductData, getWomensProd, AddMensProd, AddWomensProd, DeletMensProd, DeletWomenProd } from '../../api';
import { DELETE_PRODUCT_SUCCESS, GET_PRODUCT_MEN_FAILURE, GET_PRODUCT_MEN_SUCCESS, GET_PRODUCT_REQUEST, GET_PRODUCT_SUCCESS, GET_PRODUCT_WOMEN_FAILURE, GET_PRODUCT_WOMEN_SUCCESS, POST_PRODUCT_SUCCESS, PRODUCT_REQUEST_FAILURE } from '../actionTypes';


export const getProduct = ()=> (dispatch:any)=>{
  dispatch({type:GET_PRODUCT_REQUEST})

  getProductData().then((res)=>{
      dispatch({type:GET_PRODUCT_SUCCESS,payload:res.data})

  }).catch((error)=>{
      dispatch({type:GET_PRODUCT_MEN_FAILURE})

  })
}

// admin actions

export const getMens=()=>(dispatch:any)=>{
  dispatch({type:GET_PRODUCT_REQUEST})

  getMensProd().then((res)=>{
    console.log(res.data,"hellooooooo")
    dispatch({type:GET_PRODUCT_MEN_SUCCESS,payload:res.data})

}).catch((error)=>{
    dispatch({type:GET_PRODUCT_MEN_FAILURE})

})
}


export const AddMen = (product:any) => (dispatch:any) => {
  AddMensProd(product)
    .then(() => {
      dispatch({ type: POST_PRODUCT_SUCCESS });
    })
    .catch((err) => {
      dispatch({ type: PRODUCT_REQUEST_FAILURE });
    });
};

export const AddWomen = (product:any) => (dispatch:any) => {
  AddWomensProd(product)
    .then(() => {
      dispatch({ type: POST_PRODUCT_SUCCESS });
    })
    .catch((err) => {
      dispatch({ type: PRODUCT_REQUEST_FAILURE });
    });
};

export const getWomens=()=>(dispatch:any)=>{
  dispatch({type:GET_PRODUCT_REQUEST})

  getWomensProd().then((res)=>{
    dispatch({type:GET_PRODUCT_WOMEN_SUCCESS,payload:res.data})

}).catch((error)=>{
    dispatch({type:GET_PRODUCT_WOMEN_FAILURE})

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



export const deleteWomen=(id:number)=>(dispatch:any)=>{
  dispatch({type:GET_PRODUCT_REQUEST})

  DeletWomenProd(id).then(()=>{
    dispatch({type:DELETE_PRODUCT_SUCCESS})
    dispatch(getWomens())
  }).catch((error)=>{
    console.log(error)
    dispatch({type:GET_PRODUCT_WOMEN_FAILURE})
})
}

export const deleteMen=(id:number)=>(dispatch:any)=>{
  dispatch({type:GET_PRODUCT_REQUEST})
  DeletMensProd(id).then(()=>{
    dispatch({type:DELETE_PRODUCT_SUCCESS})
    dispatch(getMens())
  }).catch((error)=>{
    console.log(error)
    dispatch({type:GET_PRODUCT_WOMEN_FAILURE})
})
}


