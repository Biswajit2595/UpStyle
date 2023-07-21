
import { ProductType } from "../../constants";
import { DELETE_PRODUCT_SUCCESS, GET_PRODUCT_MEN_FAILURE, GET_PRODUCT_MEN_REQUEST, GET_PRODUCT_MEN_SUCCESS, GET_PRODUCT_WOMEN_FAILURE, GET_PRODUCT_WOMEN_REQUEST, GET_PRODUCT_WOMEN_SUCCESS, POST_PRODUCT_SUCCESS } from "../actionTypes";

export type ProductAction = {
    type: string;
    payload?: any;
};
  
export type AuthState = {
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
  
  export const productReducer = (state: AuthState = initialState, action: ProductAction) => {
    switch (action.type) {
      case GET_PRODUCT_MEN_REQUEST:
        return {
          ...state,
          isLoading: true,
        };
        case GET_PRODUCT_MEN_FAILURE:
          return {
            ...state,
            isLoading:false,
            isError:true,
          }
        case GET_PRODUCT_MEN_SUCCESS:
        return {
          ...state,
        isLoading:false,
        mens:action.payload
        };

        case GET_PRODUCT_WOMEN_REQUEST:
          return {
            ...state,
            isLoading: true,
          };
          case GET_PRODUCT_WOMEN_FAILURE:
            return {
              ...state,
              isLoading:false,
              isError:true,
            }
          case GET_PRODUCT_WOMEN_SUCCESS:
          return {
            ...state,
          isLoading:false,
          womens:action.payload
          };
        // admin actions------------------->
        case POST_PRODUCT_SUCCESS:
          return {
            ...state,
            isLoading:false,
            isError:false,
          }
        case DELETE_PRODUCT_SUCCESS:
          return {
            ...state,
            isLoading:false,
            isError:false,
          }
      default:
        return state;
    }
  };