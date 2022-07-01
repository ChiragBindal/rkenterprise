import React, { createContext, useEffect, useReducer } from "react";
import AuthReducer from "./AuthReducer";
const INITIAL_STATE = {
    data : JSON.parse(localStorage.getItem("user")) || null,
    isFetching : null,
    isLoggedIn : false,
    error : false
}

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = (props)=>{
    const[state,dispatch] = useReducer(AuthReducer,INITIAL_STATE);

    useEffect(()=>{
        localStorage.setItem("user" , JSON.stringify(state.data));
    } , [state.data]);
    return (
        <AuthContext.Provider value={{
            data : state.data,
            isFetching : state.isFetching,
            isLoggedIn : state.isLoggedIn,
            error : state.error,
            dispatch
        }}>{props.children}</AuthContext.Provider>
        )
}