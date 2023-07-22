
import { ProductType } from "../../constants";
import { GET_PRODUCT_MEN_FAILURE, GET_PRODUCT_MEN_REQUEST, GET_PRODUCT_MEN_SUCCESS, GET_PRODUCT_REQUEST, GET_PRODUCT_SUCCESS, GET_PRODUCT_WOMEN_FAILURE, GET_PRODUCT_WOMEN_REQUEST, GET_PRODUCT_WOMEN_SUCCESS, PRODUCT_REQUEST_FAILURE } from "../actionTypes";

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

          case GET_PRODUCT_REQUEST:
          return {
            ...state,
            isLoading: true,
          };
          case PRODUCT_REQUEST_FAILURE:
            return {
              ...state,
              isLoading:false,
              isError:true,
            }
          case GET_PRODUCT_SUCCESS:
          return {
            ...state,
          isLoading:false,
          product:action.payload
          };

      default:
        return state;
    }
  };