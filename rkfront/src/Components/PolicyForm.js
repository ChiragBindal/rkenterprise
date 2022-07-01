import React  from "react";
import styled from 'styled-components';

const PolicyForm = (props) => {
    const getState = (event) =>{
        props.onChangingState(event.target.value);
    }

    return (
        <PolicyFormStyled>
            <h1>Filter By State</h1>
                <label>
                    <select value={props.selected} onChange={getState}>
                        <option value="delhi">Delhi</option>
                        <option vlaue="non-delhi">Non-Delhi</option>
                    </select>
                </label>
        </PolicyFormStyled>
    )
}

const PolicyFormStyled = styled.div`
    display: flex;
    justify-content : space-around;
    align-items : center;
    label{
        select{
            padding: 0.4rem 0.4rem;
            padding-right : .7rem;
            color:  #2727ce;

            &:hover{
                color: black;
            }
            option{
                padding : 0.3rem;
                
            }
        }
    }
`;

export default PolicyForm;