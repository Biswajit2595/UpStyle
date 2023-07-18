
const initState={
    isAuth:true,
    user:{},
    isLoading:false,
    isError:false
}

export const authReducer=(state=initState,{ type,payload})=>{
    switch (type) {
        default:
            return state;
    }
}