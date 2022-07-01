import React , { useEffect , useState } from "react";
import CardContainer from "../Components/CardContainer";
import styled from 'styled-components';
import axios from 'axios';

const homeAppApi = axios.create({
    baseURL : `http://localhost:8000/api/v1/products/?category=HomeAppliances`
});

const HomeAppPage  = () => {
    const[homeData , homeState] = useState({});
    const[loading , isLoading] = useState(true);
    useEffect(()=>{
        async function fetchDataHome(){
            const storedHomeData = await homeAppApi.get();
            homeState(storedHomeData.data);
            isLoading(false);
        }
        fetchDataHome();
    },[]);
    return (
        <HomeAppPageStyled>
           
            <div className="right-side">
            {loading === false && <CardContainer 
               key = {Math.random()}
               data={homeData}/>}
            </div>
            
        </HomeAppPageStyled>
       
    )
}

const HomeAppPageStyled = styled.div`
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
        margin : auto;
    }
`;

export default HomeAppPage;