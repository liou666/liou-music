/*
 * @Description:
 * @Autor: Liou
 * @Date: 2021-12-27 23:46:41
 * @LastEditors: Liou
 * @LastEditTime: 2021-12-28 01:08:49
 */
import { memo, useEffect, useState, useCallback, useRef } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux"

import { ComponentWrap } from "./style"


const mockData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

export default memo((props) => {

    const { width } = props
    return (
        <ComponentWrap width={width}>
            <header>
                <div className="header-image">123</div>
                <div className="right">
                    <span>飙升榜</span>
                    <div className="btn-info">
                        <i className="btn redio-btn" />
                        <i className="btn favor" />
                    </div>
                </div>
            </header>
            <ul className="list-wrap">
                {mockData.map(x => {
                    return (
                        <li key={x} className="list-item">
                            <span className="rank-number">{x}</span>
                            <span className="song-name">{x}</span>
                            <div className="option">
                                <i className="btn redio-btn" />
                                <i className="btn addto" />

                                <i className="btn favor" />
                            </div>
                        </li>
                    )
                })}
            </ul>
            <footer>
                <a>查看全部 &gt;</a>
            </footer>
        </ComponentWrap >
    )
})