import { ADMIN_SUCCESS, USER_FAIL, USER_LOADING, USER_LOGIN_SUCCESS, USER_LOGOUT, USER_SIGNUP_SUCCESS } from "../actionTypes";

export type AuthAction = {
    type: string;
    payload?: any;
};
  
export   type AuthState = {
    isLoading: boolean;
    isError: boolean;
    user: Object,
    isAuth: string;
    isAdmin: string;
  };

const userFromLocalStorage = localStorage.getItem("login_data");

const parsedUser = userFromLocalStorage ? JSON.parse(userFromLocalStorage) : {};
  
  const initialState: AuthState = {
    isLoading: false,
    isError: false,
    user: parsedUser,
    isAuth: localStorage.getItem("login_user_auth") || "false",
    isAdmin: localStorage.getItem("login_admin_auth") || "false"
  };
  
  export const authReducer = (state: AuthState = initialState, action: AuthAction) => {
    switch (action.type) {
      case USER_LOADING:
        return {
          ...state,
          isLoading: true,
        };

        case USER_LOGOUT: 
          localStorage.setItem("login_data","");
          localStorage.setItem("login_user_auth","false");
          localStorage.setItem("login_admin_auth","false");
        return {
          ...state,isAuth: false, isAdmin: false,user: {}
        }

        case USER_SIGNUP_SUCCESS:
          return {
            ...state,
            isLoading: false,
          };

        case USER_LOGIN_SUCCESS:
          localStorage.setItem("login_data",JSON.stringify(action.payload));
          localStorage.setItem("login_user_auth","true");
          localStorage.setItem("login_admin_auth","false");
          return {
            ...state,
            isLoading: false,isAuth: "true", user: action.payload,isAdmin: "false",isError: false
          };

          case ADMIN_SUCCESS:
            localStorage.setItem("login_data",JSON.stringify(action.payload));
            localStorage.setItem("login_user_auth","false");
            localStorage.setItem("login_admin_auth","true");
          return {
            ...state,
            isLoading: false, isAdmin: "true",user: action.payload,isAuth: "false",isError: false
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
  