import axios from "axios";

export const loginHandler = async(loginUser,dispatch)=>{
    dispatch({type : "LOGIN_START"});
    try{
        const response = await axios.post('http://localhost:8000/api/v1/users/login' ,{
            email : loginUser.title,
            password : loginUser.password});
        dispatch({type : "LOGIN_SUCCESS" , payload : response.data});
    }catch(error){
        dispatch({type : "LOGIN_FAILURE" , payload : error });
    }
}