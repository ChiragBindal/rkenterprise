import ProductSlide from "./ProductSlide";
import React from "react";
import styled from 'styled-components';

const ProductContainer = () =>{

    
    return(
        <ProductContainerStyled>
            <div className="heading">
                <h1>Best Deal</h1>
            </div>
           <ProductSlide />
        </ProductContainerStyled>
    )
}

const ProductContainerStyled = styled.div`
margin-top : 3rem;
width : 100vw;
height : 81vh;

.heading{
    margin-top : 2rem;
    text-transform: uppercase;
    text-align: center;
    word-spacing: 5px;
    h1{
    font-family: 'Nunito', sans-serif;
    font-size: 2rem;
    font-weight: 600;
}
}
`;
export default ProductContainer;