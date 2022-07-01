import React from "react";
import styled from "styled-components";
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Link }  from 'react-router-dom';
const Footer = () =>{
    return(
        <FooterStyled>
            <div className="footer-top">
                <div className="footer-icons">
                    <div className="footer-icon">
                        <InstagramIcon />
                    </div>
                    <div className="footer-icon">
                        <LinkedInIcon />
                    </div>
                    <div className="footer-icon">
                        <FacebookIcon />
                    </div>
                </div>
            </div>
            <div className="footer-mid">
                <div className="query">
                    <p className="query-head">For Any Query contact on :</p>
                    <div className="foot-details">
                        <p>rkenterprises356@gmail.com</p>
                        <p>9999999999</p>
                    </div>
                </div>
                <div className="footer-logo">
                    <h2>Rk Enterprise</h2>
                </div>
                <div className="footer-link">
                    <Link to="/led"><p>LedPage</p></Link>
                    <Link to="/app"><p>Home Appliances</p></Link>
                    <Link to="/wire"><p>Wire and Cables</p></Link>
                    <Link to="/policy"><p>Policies</p></Link>
                    <Link to="/login"><p>Login/SignUp</p></Link>
                </div>
            </div>
            <div className="footer-bottom">
                <p>All Rights Reserved to © Chirag Bindal</p>
            </div>
        </FooterStyled>
    )
}
const FooterStyled = styled.footer`
background-color : #11115aed;   //#000000d4
color : white;
text-align : center;
width : 100vw;
display : flex;
flex-direction : column;
padding : 1rem 0.8rem;
margin-top : 3rem;
@media screen and (max-width:1287px){
    margin-top : 3rem;
        }
@media screen and (max-width:1000px){
    margin-top : 3.5rem;
        }
.footer-top{
    width : 100%;
    .footer-icons{
        display : flex;
        justify-content : center;
        text-decoration : overline;
        .footer-icon{
            margin-right : 2rem;
            svg{
            font-size : 2rem;
            }
            &:hover{
                transform : translateY(-6%) ;
                cursor : pointer;
            }
        }
    }
}
.footer-mid{
    display : flex;
    justify-content : space-between;
    width : 100%;
    margin-top: 2rem;
    margin-bottom: 2rem;
    .query{
        width : 33%;
        border-right : 2px solid white;
    .query-head{
        font-size : 0.9rem;
        color : white;
        text-decoration : underline;;
    }
    .foot-details{
        p{
            font-size : 1rem;
        }
        &:hover{
            cursor : pointer;
        }
    }}
    .footer-logo{
        width : 33%;
        border-right : 2px solid white;
        h2{
        color : #3b5cc7;
        font-size : 2rem;

    }
    }
    .footer-link{
        width : 33%;
        display : flex;
        flex-wrap: wrap;
        margin-left : 1rem; 
        p{
            font-size : 1.1rem;
            margin-right : 1.3rem;
            &:hover{
            color : yellow;
        }
       
    }
}
.footer-bottom{
    margin-top: 10rem;
}
`;
export default Footer;