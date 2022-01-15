/*
 * @Description:
 * @Autor: Liou
 * @Date: 2021-12-27 23:46:41
 * @LastEditors: Liou
 * @LastEditTime: 2022-01-15 15:18:14
 */
import { memo, useEffect, useState, useCallback, useRef } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux"

import { ComponentWrap } from "./style"

import { getSongListAction, addSongFromListAction } from "components/PlayerBar/store/actionCreator"

import { getSizeImage } from "@/utils"

export default memo((props) => {

    const { width, info: { id, name, coverImgUrl, tracks = [] } } = props;


    const dispatch = useDispatch()



    return (
        <ComponentWrap width={width}>
            <header>
                <div className="header-image">
                    <img src={getSizeImage(coverImgUrl, 80)}></img>
                </div>
                <div className="right">
                    <span>{name}</span>
                    <div className="btn-info">
                        <i onClick={() => { dispatch(getSongListAction(id)) }} className="btn redio-btn" />
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
                                <i onClick={() => { dispatch(addSongFromListAction(item.id)) }} className="btn redio-btn" />
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