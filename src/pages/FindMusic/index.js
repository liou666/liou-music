/*
 * @Description:
 * @Autor: Liou
 * @Date: 2021-12-19 16:36:07
 * @LastEditors: Liou
 * @LastEditTime: 2021-12-24 20:01:35
 */
import { memo } from "react";
import { Outlet } from "react-router-dom";

export default memo(() => {
    return (
        <Outlet />
    )
})