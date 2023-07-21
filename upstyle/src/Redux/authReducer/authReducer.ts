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
  