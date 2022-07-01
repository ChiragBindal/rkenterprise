import React , { useState } from "react";
import PolicyForm from "../Components/PolicyForm";
import styled from "styled-components";

const PolicyPage = () => {
    const [filterState , setState] = useState('Delhi')
    const getSpecificState = (selectedState) =>{
        console.log(selectedState);
        setState(selectedState);
    }
    return(
        <PolicyPageStyled>
            <div className="policyFilter">
                <PolicyForm selected={filterState} onChangingState={getSpecificState}/>
            </div>
            <div className="policyLine">

            </div>
            <div className="policyContent">
                {filterState === 'Delhi' && <p>This Policies are for delhi</p>}
                {filterState === 'Non-Delhi' && <p>This Policies are for non-delhi</p>}
            </div>
        </PolicyPageStyled>
    )
}
const PolicyPageStyled = styled.div`
display : flex;
flex-direction : column;
justify-content : center;
align-items : center;
.policyFilter{
    margin-top : 0.5rem ;
    width : 100%;
}  
.policyLine{
    background : #5d5d5d;
    width : 80%;
    height : 2px;
    margin-top : 1.5rem;
    text-align : center;
    border-radius : 15px;
}
 .policyContent{
        margin : 3rem;
        margin-left : 7rem;
}
    
`;

export default PolicyPage;