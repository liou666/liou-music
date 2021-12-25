/*
 * @Description:
 * @Autor: Liou
 * @Date: 2021-12-19 16:36:07
 * @LastEditors: Liou
 * @LastEditTime: 2021-12-25 20:52:17
 */
import { memo, useState } from "react";
import { Outlet, NavLink } from "react-router-dom";

import { dicoverMenu } from "@/common/localData"

import { DiscoverSubNavWrap } from "./style"





export default memo(() => {
    const [currentIndex, setCurrentIndex] = useState(0)
    return (
        <>
            <DiscoverSubNavWrap>
                <div className="wrap">
                    <ul className="sub-nav-wrap">
                        {dicoverMenu.map((item, index) => {
                            return (
                                <li key={item.title} onClick={() => setCurrentIndex(index)} className="sub-item">
                                    <NavLink to={item.link}>
                                        <span className={currentIndex === index ? 'sub-item-active' : 'sub-item-title'}>{item.title}</span>
                                    </NavLink>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </DiscoverSubNavWrap>
            <Outlet />
        </>
    )
})