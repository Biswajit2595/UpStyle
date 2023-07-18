import { applyMiddleware, combineReducers, legacy_createStore } from 'redux';
import { authReducer } from './authReducer/reducer'
import { productReducer } from './productReducer/reducer'
import thunk from 'redux-thunk'


const rootReducer=combineReducers({
    authReducer,
    productReducer
})


export const store=legacy_createStore(rootReducer,applyMiddleware(thunk))