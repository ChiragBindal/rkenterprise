import axios from "axios";
import React , { useState } from "react";
import styled from "styled-components";

const SignUpForm = () =>{
    const [enteredName , setEnteredName] = useState('');
    const [enteredEmail , setEnteredEmail] = useState('');
    const [enteredPassword , setEnteredPassword] = useState('');
    const [enteredPasswordConfirm , setEnteredPasswordConfirm] = useState('');

    const nameHandler = (event) =>{
        setEnteredName(event.target.value);
    }
    const emailHandler = (event) =>{
        setEnteredEmail(event.target.value);
    }

    const passwordHandler = (event) =>{
        setEnteredPassword(event.target.value);
    }

    const passwordConfirmHandler = (event) =>{
        setEnteredPasswordConfirm(event.target.value);
    }

    const submitHandler = async(event) =>{
        event.preventDefault();
      //  if(enteredPassword !== enteredPasswordConfirm){
      //      enteredPasswordConfirm.setCustomValidity("Password Don't match!")
      //  }
        const signUser = {
            username : enteredName,
            email : enteredEmail,
            password : enteredPassword,
            passwordConfirm : enteredPasswordConfirm
        }
        console.log(signUser);
        try{
            const res = await axios.post('http://localhost:8000/api/v1/users/signUp' , signUser);
            localStorage.setItem("user" , res.data);
        }catch(error){
            console.log(error);
        }
        
        setEnteredName('');
        setEnteredEmail('');
        setEnteredPassword('');
        setEnteredPasswordConfirm('');
    }
    return(
        <SignUpFormStyled onSubmit={submitHandler}>
            <h1>Sign Up</h1>
            <div className="form-item">
                <label>Name : </label>
                <input type="text" name="form-name" id="form-name-sign" placeholder="eg : Ram / Sita" onChange={nameHandler} value={enteredName}/>
            </div>
            <div className="form-item">
                <label>Email : </label>
                <input type="email" name="form-email" id="form-email-sign" placeholder="xyz@gmail.com" onChange={emailHandler} value={enteredEmail}/>
            </div>
            <div className="form-item">
                <label>Password : </label>
                <input type="password" name="form-password" id="form-password-sign"  placeholder="********" onChange={passwordHandler} value={enteredPassword}/>
            </div>
            <div className="form-item">
                <label>Password Confirm : </label>
                <input type="password" name="form-password" id="form-passwordConfirm-sign" onChange={passwordConfirmHandler} value={enteredPasswordConfirm}/>
            </div>
            <div className="form-btn">
                <button type="submit">Submit</button>
            </div>
        </SignUpFormStyled>
    )
}

const SignUpFormStyled = styled.form`
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

export default SignUpForm;