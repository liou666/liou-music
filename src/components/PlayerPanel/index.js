/*
 * @Description:
 * @Autor: Liou
 * @Date: 2022-01-09 01:22:04
 * @LastEditors: Liou
 * @LastEditTime: 2022-01-09 19:12:02
 */
import react, { memo, useCallback, useEffect, useRef, useState } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux"


// import {
//     getSongListAction,
//     changeSequenceAction,
//     getNextSongAction,
//     getPrevSongAction
// } from "/store/actionCreator"

import SongListPanel from "../SongListPanel"

import { StyleWrapper } from "./style"
import { Divider } from 'antd';



export default memo(function PlayerPanel() {
    const { songList, currentLyric, currentSongIndex } = useSelector(state => ({
        songList: state.player.songList,
        currentLyric: state.player.currentLyric,
        currentSongIndex: state.player.currentSongIndex,

    }), shallowEqual)

    // const dispatch = useDispatch()

    return (
        <StyleWrapper>
            <div className="listhd">
                <h4>播放列表(<span className="j-flag">94</span>)</h4>
                <a className="addall" data-action="likeall">
                    <span className="ico ico-add" />
                        收藏全部
                </a>
                <Divider type="vertical" />
                <a className="clear" data-action="clear">
                    <span className="ico ico-del" />
                    清除
                </a>

                <div className="header-rigth">
                    <p>11</p>
                    <span className="close" />
                </div>

            </div>

            <div className="listbd">
                <div className="song-list-panel">
                    <SongListPanel songList={songList} currentSongIndex={currentSongIndex} />
                </div>
                <div className="lyric-panel">
                    2
                </div>
            </div>

        </StyleWrapper>
    )
})
