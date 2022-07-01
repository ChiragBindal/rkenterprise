import React, { useContext } from "react";
import styled from "styled-components";
import SearchIcon from '@mui/icons-material/Search';
import { Link , NavLink}  from 'react-router-dom';
import { AuthContext } from "../Context/AuthContext";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
const Navigation = () =>{
    const {data} =useContext(AuthContext);
    return(
        <NavigationStyled>
            <div className="nav-logo">
                <Link to="/"><h1>Rk <span>Enterprise</span></h1></Link>
            </div>
            <ul className="nav-items">
                <li className="nav-item"><NavLink to = "/">Home</NavLink></li>
                <li className="nav-item"><NavLink to = "/led">Led</NavLink></li>
                <li className="nav-item"><NavLink to = "/wire">Wire And Cables</NavLink></li>
                <li className="nav-item"><NavLink to = "/app">Home Appliances</NavLink></li>
                <li className="nav-item"><NavLink to = "/policy">Policies</NavLink></li>
                <li className="nav-item"><NavLink to ="/login">Login</NavLink></li>
            </ul>
            <div className="nav-icons">
                <div className="nav-icon">
                <ShoppingCartIcon />
                    <SearchIcon />
                    {data && (<AccountCircleIcon />)}
                </div>

            </div>
        </NavigationStyled>
    )
}

const NavigationStyled = styled.div`
    display : flex;
    justify-content : space-between;
    align-items : center;
    width : 100%;
    height : 100%;
    .nav-logo{
        width : 20%;
        padding : 0rem 2rem;
        @media screen and (max-width:1287px){
           width : 40%;
        }
        h1{
            font-size : 2rem;
            color : #2727ce;
        span{
            color : black;
            margin-left : -0.2rem;
            font-size : 1.4rem; 
        }}
    }
    .nav-items{
        display : flex;
        width : 65%;
        justify-content : space-between;
        padding : 0rem 2rem;
        @media screen and (max-width:1287px){
           display : none;
        }
        .nav-item{
            display : block;
            transition: all 0.4s ease-in-out;

            .active{
                    background-color : #2727ce;
                    color : white;
                }
            a{
                display : block;
                padding : 0.45rem 0.5rem;
                position : relative;
                z-index : 10;
                font-weight : 500;
                transition: all 0.4s ease-in-out;

                &:hover{
                    cursor : pointer;
                    color : white;
                }

                &::before{
                    content : "";
                    position : absolute;
                    bottom : 0;
                    left : 0;
                    width : 0;
                    height : 50%;
                    background-color : #2727ce;
                    opacity : 0.8;
                    transition : all 0.4s ease-in-out;
                    z-index: -1;
                }
            }
            a:hover::before{
                width : 100%;
                height : 100%
            }
        }
    }
    .nav-icons{
        width : 15%;
        text-align : center;
        margin-top : 0.2rem;
        @media screen and (max-width:1287px){
           width : 50%;
           text-align : right;
        }
        .nav-icon{
            padding : 0.45rem 0.45rem;
            svg{
                font-size : 2rem;
                margin-left: 10px ;
                margin-right: 10px ;
                color :#2727ce;
                transition : all 0.4s ease-in-out; 
            }
            &:hover{
                transform : translateY(-6%);
            }
        }
    }
`;


export default Navigation;