import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { authReducer } from './authReducer/authReducer';
import { productReducer } from './productReducer/productReducer';
import thunk from "redux-thunk"


let rootreducer = combineReducers({
    authReducer,
    productReducer
})

export const store = legacy_createStore(rootreducer, applyMiddleware(thunk))

