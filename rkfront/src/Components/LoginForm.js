import React , { useState ,useContext} from "react";
import styled from "styled-components";
import { AuthContext} from "../Context/AuthContext";
import {loginHandler} from '../Context/apiContext';
const LoginForm = (props) =>{
    // Using useState Hook.
    const [enteredEmail , setEnteredEmail] = useState('');
    const [enteredPassword , setEnteredPassword] = useState('');
    const {data,isFetching,isLoggedIn,error,dispatch} = useContext(AuthContext);
    // AuthContext Hook.
    
    const emailHandler = (event) =>{
        setEnteredEmail(event.target.value);
    }

    const passwordHandler = (event) =>{
        setEnteredPassword(event.target.value);
    }
   
    const submitHandler = (event) =>{
        event.preventDefault();

        const loginUser = {
            title : enteredEmail,
            password : enteredPassword
        }
        
        loginHandler(loginUser,dispatch);
        console.log(data,isFetching,isLoggedIn,error);

        

        setEnteredEmail('');
        setEnteredPassword('');
    }
    return(
        <LoginFormStyled method ='POST' onSubmit = {submitHandler}>
            <h1>Login</h1>
            <div className="form-item">
                <label>Email : </label>
                <input 
                    type="email" 
                    name="form-email" 
                    id="form-email" 
                    placeholder="xyz@gmail.com" 
                    onChange={emailHandler} 
                    value={enteredEmail}/>
            </div>
            <div className="form-item">
                <label>Password : </label>
                <input 
                    type="password" 
                    name="form-password" 
                    id="form-password"  
                    placeholder="********" 
                    onChange={passwordHandler} 
                    value={enteredPassword}/>
            </div>
            <div className="form-btn">
                <button type="submit">{isFetching ? "loading": "Submit"}</button>
            </div>
        </LoginFormStyled>
    )
}

const LoginFormStyled = styled.form`
    border : 1px solid black;
    border-radius : 50px;
    background-color : #F5F5F5;
    padding : 3rem 0;
    display : flex;
    flex-direction : column;
    align-items : center;
    h1{
        text-transform : uppercase;
        margin-bottom : 2rem;
        font-size : 1.5rem;
    }
    .form-item{
        display : flex;
        align-items : center;
        margin-bottom : 2rem;
        label {
            margin-right : 1rem;
            font-size : 1.25rem;
            font-weight : 600;
        }
        input {
            padding : 0.5rem 1rem;;
            font-size :1rem;
            border-radius : 30px;
            color : #2727ce;
        }
    }
    .form-btn{
        padding : .4rem 1rem;
        button{
            padding : .4rem 3rem;
            background-color : #2727ce;
            border-radius : 30px;
            color : white;
            font-size : 1.25rem;
            &:hover{
                cursor : pointer;
                background-color : #27ce59;
            }
        }
    }
`;

export default LoginForm;