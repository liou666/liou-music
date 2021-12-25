/*
 * @Description: 
 * @Autor: Liou
 * @Date: 2021-12-19 15:21:26
 * @LastEditors: Liou
 * @LastEditTime: 2021-12-25 10:57:35
 */
import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, } from "react-router-dom";


import "./assets/css/reset.css";
import App from './App';


ReactDOM.render(
    <StrictMode>
        <HashRouter>
            <App />
        </HashRouter>
    </StrictMode>
    ,
    document.getElementById('root')
);