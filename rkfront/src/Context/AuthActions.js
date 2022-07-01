export const LoginStart = (data) => ({
    type : 'LOGIN_START'
});

export const LoginSuccess = (data) =>({
    type : 'lOGIN_SUCCESS',
    payload : data
});

export const LoginFailure = (error)=>({
    type : 'lOGIN_FAILURE',
    payload : error
});