import React from "react";
import LoginForm from "../Components/LoginForm";
import styled from "styled-components";
import SignUpForm from "../Components/SignUpForm";

const LoginPage = () => {
 
    return (
        <LoginPageStyled>
            <div className="login-form">
             <LoginForm />  
            </div>
            <div className="line">

            </div>
            <div className="signup-form">
            <SignUpForm />
            </div>
           
        </LoginPageStyled>
    )
};

const LoginPageStyled = styled.div`
    display : flex;
    justify-content : space-between;
    margin-top : 2rem;
    .login-form{
        width : 40%;
        margin-left : 3.5rem;
        margin-top : 4rem;
    }
    .line{
        width : 2px;
        height : 80vh;
        background-color : #5d5d5d;
    }
    .signup-form{
        width : 40%;
        margin-right : 3.5rem;
    }
`;

export default LoginPage;