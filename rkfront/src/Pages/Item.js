import axios from "axios";
import React, { useEffect , useState } from "react";
import { useParams } from "react-router-dom";
import styled from 'styled-components';
import bulb from "../Image/bulb.webp";
// import { useLocation } from "react-router-dom";
const productApi = axios.create({
    baseURL : `http://localhost:8000/api/v1/products/`
});
const Item = () =>{
    const [product , setProduct] = useState({});
    const [isLoading , setIsLoading] = useState(true);
    const { id } = useParams();
    
    useEffect(()=>{
        const getItem = async() =>{
            const getproduct = await productApi.get(`${id}`);
            setProduct(getproduct.data.data.product);
            setIsLoading(false);
            
        }
        getItem();
    },[id]);
    if(!isLoading) {
        console.log(product);
    }
    return( 
        <ItemStyled>
            {!isLoading &&  (<><div className="img-side">
                <img src ={bulb} alt=" " className="card-image"/>
            </div>
            <div className="details">
                <h1>{product.name}</h1>
               
                   <p>{product.description}</p>
                    <h2> ␞{product.price}</h2>
                
                <div className="cart">
                    <button>Add To Cart</button>
                </div>
            </div></>)}
            {isLoading && <div>LOADING ! </div>}
           
        </ItemStyled>
    )
}

const ItemStyled = styled.div`
    display : flex;
    width : 90vw;
    position : relative; 
    justify-content : space-evenly;
    margin-top : 2rem;
    .img-side{
        width : 60%;
       object-fit : cover;
       padding-top : 0.6rem;
       text-align:center;
      // border-right : 2px solid black;
        img{
           width : 60%;
           margin-right : 50px;
       }
    }
    .details{
       text-align : center;
       width : 40%;
       margin-top : 0.4rem;
       padding : 1.6rem 0.3rem;
       
       h1{
        font-size :1.5rem;
          font-family: 'Nunito', sans-serif;
          font-weight : 800;
          color : #2727ce;
          text-align : left;
          border-bottom : 2px solid black;
       }
       
       p{
        font-size : 1rem;
          font-family: 'Nunito', sans-serif;
          font-weight : 600;
          margin-top : 1rem;
          opacity : 0.8;
         text-align : left;
       }
       h2{
        font-size : 3rem;
          font-family: 'Nunito', sans-serif;
          font-weight : 600;
          opacity : 0.8;
         text-align : left;
         margin-top : 2rem;
       }
    
    .cart{
        margin-top : 30px;
        padding : .7rem 3rem;
        button{
            padding : .4rem 3rem;
            background-color : #2727ce;
            border-radius : 10px;
            color : white;
            font-size : 1.25rem;
            &:hover{
                cursor : pointer;
                background-color : #27ce59;
            }
        }
    }
       }
`;
export default Item;