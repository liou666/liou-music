/*
 * @Description:
 * @Autor: Liou
 * @Date: 2021-12-27 23:46:41
 * @LastEditors: Liou
 * @LastEditTime: 2021-12-29 01:05:48
 */
import { memo, useEffect, useState, useCallback, useRef } from "react";

import { ComponentWrap } from "./style"



export default memo((props) => {

    const { width, info: { id, name, coverImgUrl, tracks = [] } } = props;
    return (
        <ComponentWrap width={width}>
            <header>
                <div className="header-image">
                    <img src={coverImgUrl}></img>
                </div>
                <div className="right">
                    <span>{name}</span>
                    <div className="btn-info">
                        <i className="btn redio-btn" />
                        <i className="btn favor" />
                    </div>
                </div>
            </header>
            <ul className="list-wrap">
                {tracks.slice(0, 10).map((item, index) => {
                    return (
                        <li key={item.id} className="list-item">
                            <span className={index >= 3 ? "rank-number" : 'rank-number active'}>{index + 1}</span>
                            <span className="song-name">{item.name}</span>
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