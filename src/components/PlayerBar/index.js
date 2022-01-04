/*
 * @Description:
 * @Autor: Liou
 * @Date: 2021-12-26 13:52:21
 * @LastEditors: Liou
 * @LastEditTime: 2022-01-05 00:56:49
 */
import react, { memo, useEffect, useRef, useState } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux"

import { getCurrentSongAction } from "./store/actionCreator"

import { getSongUrl } from "../../services/player"

import { Slider } from 'antd';
import { StyleWrap } from "./style"

export default memo(() => {

    const [currentTime, setCurrentTime] = useState(0);

    const [isPlaying, setIsPlaying] = useState(false)

    const { currentSong } = useSelector(state => ({
        currentSong: state.player.currentSong,
    }), shallowEqual)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getCurrentSongAction(167876))
    }, [dispatch])

    const picUrl = (currentSong.al && currentSong.al.picUrl) || "";
    const singerName = (currentSong.ar && currentSong.ar[0].name) || "未知歌手";
    const duration = currentSong.dt || 0;
    const showDuration = duration;
    const showCurrentTime = currentTime;
    console.log(currentSong);

    //others hooks
    const audioRef = useRef()
    useEffect(async () => {
        const { data } = await getSongUrl(167876);
        audioRef.current.src = data[0].url;
    }, [currentSong.id])

    const timeUpdate = () => {
        console.log(111);
    }

    const handleMusicEnded = () => {
        console.log(111);
    }

    const changePlayState = () => {
        if (isPlaying) {
            audioRef.current.pause()
        } else {
            audioRef.current.play()
        }
        console.log(isPlaying);
        setIsPlaying(!isPlaying)
    }
    console.log(picUrl, singerName, showDuration, showCurrentTime);

    return (
        <StyleWrap isPlaying={isPlaying} sequence={1}>
            <div className="bg-wrap">
                <div className="control-btns">
                    <i className="prev" />
                    <i className="play" onClick={() => changePlayState()} />
                    <i className="next" />
                </div>
                <div className="player-bar">
                    <img src={picUrl}></img>
                    <div className="player-other">
                        <div className="player-info">
                            <span className="song">{currentSong?.name}</span>
                            <span className="singer-name">{" / " + singerName}</span>
                        </div>
                        <div className="play-progress">
                            <Slider defaultValue={30}></Slider>
                            <div className="time-info">
                                <span className="now-time">{showCurrentTime}</span>/
                                <span className="total-time">{showDuration}</span>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="option">
                    <div className="left">
                        <button className="playbar_sprite btn favor"></button>
                        <button className="playbar_sprite btn share"></button>
                    </div>
                    <div className="right playbar_sprite">
                        <button className="playbar_sprite btn volume"></button>
                        <button className=" playbar_sprite btn loop"></button>
                        <button className="playbar_sprite btn playlist"></button>
                    </div>

                </div>
            </div>

            <audio ref={audioRef}
                onTimeUpdate={e => timeUpdate(e)}
                onEnded={e => handleMusicEnded()}></audio>
        </StyleWrap>
    )
})