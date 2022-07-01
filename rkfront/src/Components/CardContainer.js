import React from "react";
import CardHome from "./CardHome";
import styled from 'styled-components';

const CardContainer = (props) => {
    
    return(
       <CardContainerStyled>
        {props.data.data.products.map((product,index) => (
            <CardHome 
                key={index} 
                id={product._id}
                name={product.name} 
                description={product.description} 
                quantity={product.quantity}
                price={product.price}/>
        ))}
       </CardContainerStyled>
      
    )
}
const CardContainerStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit , minmax(250px , 1fr));
    grid-column-gap: 50px ;
    grid-row-gap: 40px;
    padding-top: 15px;
    &:hover{
        cursor : pointer;
        box-shadow : red;
    }
`;

export default CardContainer;