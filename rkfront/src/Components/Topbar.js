import React from "react";
import styled from "styled-components";
import Navigation from "./Navigation";
const Topbar = () =>{
    return(
        <TopbarStyled>
            <Navigation />
        </TopbarStyled>
    )
}

const TopbarStyled = styled.div`
    position : sticky;
    top : 0;
    width : 100vw;
    height : 5rem;
    z-index : 1000;
    background:white;
`;

export default Topbar;