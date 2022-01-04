/*
 * @Description:
 * @Autor: Liou
 * @Date: 2021-12-25 11:28:11
 * @LastEditors: Liou
 * @LastEditTime: 2022-01-05 00:09:29
 */
import { combineReducers } from "redux"

import recommend from "pages/FindMusic/Recommend/store"
import player from "components/PlayerBar/store"

export default combineReducers({
    recommend,
    player
})