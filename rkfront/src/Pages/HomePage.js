import React from 'react';
import styled from 'styled-components';
import SliderContainer from '../Components/mainSlider/SliderContainer';
import ProductContainer from '../Components/productSlider/ProductContainer';

function HomePage() {
  return (
    <HomePageStyled>
        <div className="slider-container-main">
            <SliderContainer />
        </div>
        <div className="slider-container-product">
            <ProductContainer />
        </div>
        <div className="slider-container-product">
            <ProductContainer />
        </div>
        <div className="slider-container-product">
            <ProductContainer />
        </div>
    </HomePageStyled>
  )
}

const HomePageStyled = styled.div`
    
`;

export default HomePage;