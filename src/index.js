/*
 * @Description: 
 * @Autor: Liou
 * @Date: 2021-12-19 15:21:26
 * @LastEditors: Liou
 * @LastEditTime: 2021-12-31 00:30:27
 */
import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, } from "react-router-dom";
import { Provider } from "react-redux"

import "@/assets/css/reset.css";

import App from './App';
import store from "./store"

ReactDOM.render(
    <StrictMode>
        <Provider store={store}>
            <HashRouter>
                <App />
            </HashRouter>
        </Provider>

    </StrictMode>
    ,
    document.getElementById('root')
);