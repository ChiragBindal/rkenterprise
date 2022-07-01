import  styled  from "styled-components";
import React from "react";
import bulb from "../Image/bulb.webp";
import { Link }  from 'react-router-dom';

const CardHome = props => {
   
    return(
        
     <Link to = {`/item/${props.id}`}>
    <CardHomeStyled>
        <div className="card-image">
            <img src ={bulb} alt=" " className="card-image-slider"/>
        </div>
        <div className="card-description">
        <p>{props.name}</p>
          <span className="card-description-price">␞{props.price}</span>
        </div>
    </CardHomeStyled>
    </Link>
    )
}

const CardHomeStyled  = styled.div`
   display : flex;
   align-items : center;
   flex-direction : column;
   padding : 0.5rem 0.5rem;
   background-color:#F5F5F5;
   border : 1px solid #F5F5F5;
   border-radius : 15px; 
   .card-image{
       width : 90%;
       object-fit : cover;
       text-align : center;
       padding-top : 0.45rem;
       img{
           width : 70%;
       }
   }
   .card-description{
       text-align : center;
       margin-top : 0.4rem;
       padding : 0.45rem 0.3rem;
       p{
           font-size : 0.9rem;
          font-family: 'Nunito', sans-serif;
          font-weight : 800;
          opacity : 0.8;
       }
       .card-description-price{
           display : block;
           margin-top : 1rem;
           font-weight : 600;
           font-size : 1.4rem;
           color : #2727ce;
       }

   }
`;

export default CardHome;