import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyle from './Style/GlobalStyle';
import { BrowserRouter as Router} from 'react-router-dom';
import {AuthContextProvider} from './Context/AuthContext';
ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Router>
  <AuthContextProvider>
    <App />
    </AuthContextProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);




