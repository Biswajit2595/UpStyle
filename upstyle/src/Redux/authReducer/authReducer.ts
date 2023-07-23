import { ADMIN_SUCCESS, USER_FAIL, USER_LOADING, USER_LOGIN_SUCCESS, USER_LOGOUT, USER_SIGNUP_SUCCESS } from "../actionTypes";

export type AuthAction = {
    type: string;
    payload?: any;
};
  
export   type AuthState = {
    isLoading: boolean;
    isError: boolean;
    user: any,
    isAuth: boolean;
    isAdmin: boolean;
  };
  
  const initialState: AuthState = {
    isLoading: false,
    isError: false,
    user: {},
    isAuth: false,
    isAdmin: false
  };
  
  export const authReducer = (state: AuthState = initialState, action: AuthAction) => {
    switch (action.type) {
      case USER_LOADING:
        return {
          ...state,
          isLoading: true,
        };

        case USER_LOGOUT: 
        return {
          ...state,isAuth: false, isAdmin: false,user: {}
        }

        case USER_SIGNUP_SUCCESS:
          return {
            ...state,
            isLoading: false,
          };

        case USER_LOGIN_SUCCESS:
          return {
            ...state,
            isLoading: false,isAuth: true, user: action.payload,isAdmin: false,isError: false
          };

          case ADMIN_SUCCESS:
          return {
            ...state,
            isLoading: false, isAdmin: true,isAuth: false,isError: false
          };

      case USER_FAIL:
        return {
          ...state,
          isLoading: false,
          isError: true
        };
      
      default:
        return state;
    }
  };
  