const initState={

    isLoading:false,
    isError:false,
    men:[],
    women:[],
    product:[],
    cart:[],
    buy:[],
}

export const productReducer=(state=initState,{ type,payload})=>{
    switch (type) {
        default:
            return state;
    }
}