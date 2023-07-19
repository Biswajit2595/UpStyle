
import { ProductType } from "../../constants";

type AuthAction = {
    type: string;
    payload?: any;
};
  
  type AuthState = {
    isLoading: boolean;
    isError: boolean;
    mens: Array<ProductType>;
    womens: Array<ProductType>;
    cart: Array<ProductType>;
    buy: Array<ProductType>;
    product: Array<ProductType>;
  };
  
  const initialState: AuthState = {
    isLoading: false,
    isError: false,
    mens: [],
    womens: [],
    cart: [],
    buy: [],
    product:[],
  };
  
  export const productReducer = (state: AuthState = initialState, action: AuthAction) => {
    switch (action.type) {
      case "SET_LOADING":
        return {
          ...state,
          isLoading: true,
        };
      case "SET_ERROR":
        return {
          ...state,
          isError: true,
        };
      
      default:
        return state;
    }
  };