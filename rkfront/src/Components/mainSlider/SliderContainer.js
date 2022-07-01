import React from "react";
import styled from 'styled-components';
import SliderMain from "./SliderMain";

const SliderContainer = () =>{
    return(

        <SliderContainerStyled>
            <SliderMain />
        </SliderContainerStyled>
        

    )
};

const SliderContainerStyled = styled.div`
     display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width : 90vw;
    height : 75vh;
    background-color: rgba(0, 0, 0, 0.721);
    margin-bottom: 5rem;
    margin-left: auto;
    margin-right: auto;
`;

export default SliderContainer;