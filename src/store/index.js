/*
 * @Description:
 * @Autor: Liou
 * @Date: 2021-12-25 11:27:55
 * @LastEditors: Liou
 * @LastEditTime: 2021-12-25 13:46:46
 */
import { createStore, applyMiddleware, compose } from "redux"
import thunk from "redux-thunk"

import reducer from "./reducer.js"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

export default store
