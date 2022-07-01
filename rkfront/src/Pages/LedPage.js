import React , { useEffect , useState} from "react";
import CardContainer from "../Components/CardContainer";
import styled from 'styled-components';
import axios from "axios";


const ledApi = axios.create({
    baseURL : `http://localhost:8000/api/v1/products/?category=Led`
});

const LedPage  = () => {
   const [ledData , setLedData] = useState({});
    const[loading , isLoading] = useState(true);
   useEffect(()=>{
    async function fetchData(){
        const storedLedData =await ledApi.get();
        setLedData(storedLedData.data);
        isLoading(false);
    }
    fetchData();
},[]);

    return (
        <LedPageStyled>
            <div className="right-side">
               {loading === false && <CardContainer 
               key = {Math.random()}
               data={ledData}/>}
            </div>
            
        </LedPageStyled>
       
    )
}

const LedPageStyled = styled.div`
   
    width : 100vw;
    position : relative; 

    
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

export default LedPage;