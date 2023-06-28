import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {createStore, applyMiddleware, compose } from 'redux';

import App from './App';
import { StyledEngineProvider } from "@mui/material/styles";

ReactDOM.render(
    <StyledEngineProvider injectFirst> 
        <App />
    </StyledEngineProvider>, 
    document.getElementById('root'));