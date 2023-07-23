import { makingSignupPost } from "../../api";
import { signuptype } from "../../constants";
import {  USER_LOADING } from "../actionTypes";


export const makingPost = (data:signuptype)=> (dispatch:any)=>{
    dispatch({type: USER_LOADING});

    return makingSignupPost(data)
}