/*
 * @Description:
 * @Autor: Liou
 * @Date: 2022-01-09 17:28:18
 * @LastEditors: Liou
 * @LastEditTime: 2022-01-15 15:02:14
 */
import react, { memo, useCallback, useEffect, useRef, useState } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux"

import moment from "moment"

import { addSongFromListAction } from "../PlayerBar/store/actionCreator"

import { StyleWrapper } from "./style"

export default memo(function SongListPanel({ songList, currentSongIndex }) {

    const dispatch = useDispatch()

    return (
        <StyleWrapper>
            {songList.map((x, i) => {
                return (
                    <li onClick={() => dispatch(addSongFromListAction(x.id))} key={x.id} className={i === currentSongIndex ? 'active' : ''}>
                        <div className="left">{x?.name}</div>
                        <div className="right">
                            <div className="options">
                                <i className="icon-favor" />
                                <i className="icon-share" />
                                <i className="icon-download" />
                                <i className="icon-delete" />
                            </div>
                            <span className="songer-name">{x?.ar[0]?.name}</span>
                            <span className="time-total">{moment(x.dt || 0).format("mm:ss")}</span>
                            <i className="icon-link link" />
                        </div>
                    </li>
                )
            })}

        </StyleWrapper >
    )
})