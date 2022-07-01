import React, { useContext } from "react";
import Topbar from "./Components/Topbar";
import styled from 'styled-components';
import LedPage from "./Pages/LedPage";
import WirePage from "./Pages/WirePage";
import HomeAppPage from "./Pages/HomeAppPage";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import PolicyPage from "./Pages/PolicyPage";
import Item from "./Pages/Item";
// import { AuthContextProvider } from "./Context/apiContext";
import {
  Routes,
  Route,
} from "react-router-dom";
import Footer from "./Components/Footer";
import { AuthContext } from "./Context/AuthContext";

function App() {
  const {data} = useContext(AuthContext);
  return (
    <div className='App'>
        <Topbar />
        <MainContentStyled>
          <Routes>
            <Route  path = "/" element={ <HomePage />} />
            <Route  path = "/led" element={<LedPage />} />
            <Route  path = "/wire" element={<WirePage />} />
            <Route  path = "/app" element={<HomeAppPage />} />
            <Route  path = "/policy" element={<PolicyPage />} />
            <Route  path = "/login" element={data ? <HomePage />: <LoginPage />} />
            <Route  path = "/item/:id" element={<Item />} />
          </Routes>
        </MainContentStyled>
        <Footer />
    </div>
  );
}
const MainContentStyled = styled.main`
  margin-top : 1rem;
  min-height : 100vh;
`;
export default App;

