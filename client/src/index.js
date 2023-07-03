import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk';
import rootReducer from './reducers'


import App from './App';
import { StyledEngineProvider } from "@mui/material/styles";
import './index.css';

const store = configureStore({ 
    reducer: rootReducer,
    middleware: [thunk],
});

const domNode = document.getElementById('root');
const root = createRoot(domNode);

root.render(
    <Provider store = {store}>
          <StyledEngineProvider injectFirst> 
            <App />
        </StyledEngineProvider>, 
    </Provider>);