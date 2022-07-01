const AuthReducer = (state , action)=>{
    switch(action.type){
        case 'LOGIN_START':
            return{
                data : null,
                isFetching : true,
                isLoggedIn : false,
                error : false
            };
        case 'LOGIN_SUCCESS' :
            return{
                data : action.payload,
                isFetching : false,
                isLoggedIn : true,
                error : false
            };
        case 'LOGIN_FAILURE' :
            return{
                data : action.payload,
                isFetching : false,
                isLoggedIn : false,
                error : true
            };
            default:
                return state;
    }
}

export default AuthReducer;