import { makingSignupPost } from "../../api";
import { signuptype } from "../../constants";
import { USER_FAIL, USER_LOADING, USER_SIGNUP_SUCCESS } from "../actionTypes";


export const makingPost = (data:signuptype)=> (dispatch:any)=>{
    dispatch({type: USER_LOADING});

    makingSignupPost(data).then((res)=>{
        dispatch({type:USER_SIGNUP_SUCCESS})

    }).catch((error)=>{
        dispatch({type: USER_FAIL})
        console.log(error.message)
    })
}