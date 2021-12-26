/*
 * @Description:
 * @Autor: Liou
 * @Date: 2021-12-26 13:47:44
 * @LastEditors: Liou
 * @LastEditTime: 2021-12-26 15:18:54
 */
import { memo, useEffect, useState, useCallback, useRef } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux"


import { HotPageWrap } from "./style"
import ThemeHeader from "components/ThemeHeader"

const recommendList = ["华语", "流行", "摇滚", "民谣", "电子"]

export default memo(() => {


    return (
        <HotPageWrap>
            <ThemeHeader title="热门推荐" keywords={recommendList} />
            <ul className="record-wrap">
                <li className="record-item">
                    <div className="record-top">
                        <img />
                        <div className="info-bar">
                            <span></span>
                            <a className="redio-btn"></a>
                        </div>
                    </div>
                    <div className="record-title"></div>
                </li>
            </ul>
        </HotPageWrap>
    )
})
