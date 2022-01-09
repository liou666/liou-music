/*
 * @Description:
 * @Autor: Liou
 * @Date: 2022-01-09 01:22:04
 * @LastEditors: Liou
 * @LastEditTime: 2022-01-09 22:55:42
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
import LyricPanel from "../LyricPanel"

import { StyleWrapper } from "./style"
import { Divider } from 'antd';

import { parseLyric } from "../../utils/index"



export default memo(function PlayerPanel() {
    const { songList, currentLyric, currentSongIndex, currentSong } = useSelector(state => ({
        songList: state.player.songList,
        currentLyric: state.player.currentLyric,
        currentSongIndex: state.player.currentSongIndex,
        currentSong: state.player.currentSong
    }), shallowEqual)

    // const dispatch = useDispatch()

    return (
        <StyleWrapper>
            <div className="listhd">
                <h4>播放列表(<span className="j-flag">{songList.length}</span>)</h4>
                <a className="addall" data-action="likeall">
                    <i className="icon icon-favor" />
                        收藏全部
                </a>
                <Divider type="vertical" />
                <a className="clear" data-action="clear">
                    <i className="icon icon-delete" />
                    清除
                </a>

                <div className="header-rigth">
                    <p>{currentSong?.name}</p>
                    <span className="close" >x</span>
                </div>

            </div>

            <div className="listbd">
                <div className="song-list-panel">
                    <SongListPanel songList={songList} currentSongIndex={currentSongIndex} />
                </div>
                <div className="lyric-panel">
                    <LyricPanel lyric={parseLyric(currentLyric)} />
                </div>
            </div>

        </StyleWrapper>
    )
})
