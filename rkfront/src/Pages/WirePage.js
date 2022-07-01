import React , { useEffect , useState} from "react";
import CardContainer from "../Components/CardContainer";
import styled from 'styled-components';
import axios from 'axios';

const wireApi = axios.create({
    baseURL : `http://localhost:8000/api/v1/products/?category=WiresAndCables`
});
const WirePage  = () => {
    const[wireData , wireState] = useState({});
    const[loading , isLoading] = useState(true);
    useEffect(()=>{
        async function fetchDataWire(){
            const storedWireData = await wireApi.get();
            wireState(storedWireData.data);
           isLoading(false);
        }
        fetchDataWire();
    },[]);
    return (
        <WirePageStyled>
           
            <div className="right-side">
            {loading === false && <CardContainer 
               key = {Math.random()}
               data={wireData}/>}
            </div>
        </WirePageStyled>
       
    )
}

const WirePageStyled = styled.div`
    display : flex;
    width : 100vw;
    position : relative; 
    justify-content : space-between;
  /* .left-side{
        width : 25%;
        border-right : 2px solid black;
        margin-left : 1rem;
    }
    .center-side{
        position : absolute;
        width : 5%;
        .lines{
            width : 1px;
            color : black
        }
    } */
    .right-side{
        width : 90%;
        margin: auto;
    }
`;

export default WirePage;