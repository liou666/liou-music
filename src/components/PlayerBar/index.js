/*
 * @Description:
 * @Autor: Liou
 * @Date: 2021-12-26 13:52:21
 * @LastEditors: Liou
 * @LastEditTime: 2022-01-07 00:34:53
 */
import react, { memo, useCallback, useEffect, useRef, useState } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux"

import { getCurrentSongAction } from "./store/actionCreator"

import { getSongUrl } from "../../services/player"

import { Slider } from 'antd';
import { StyleWrap } from "./style"

import moment from "moment"


export default memo(() => {

    const [currentTime, setCurrentTime] = useState(0);
    const [progress, setProgress] = useState(0);
    const [isChangingSlide, setIsChangingSlide] = useState(false);


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
    const showDuration = moment(duration).format("mm:ss");
    const showCurrentTime = moment(currentTime).format("mm:ss");
    // console.log(currentSong);

    //others hooks
    const audioRef = useRef()
    const sliderRef = useRef()
    useEffect(async () => {
        const { data } = await getSongUrl(167876);
        audioRef.current.src = data[0].url;
    }, [currentSong.id])

    const timeUpdate = (e) => {
        const { currentTime } = e.target
        if (!isChangingSlide) {
            setProgress((currentTime * 1000 / duration * 100) | 0)
            setCurrentTime(currentTime * 1000)
        }


    }

    const slideChange = useCallback((value) => {
        setIsChangingSlide(true);
        setProgress(value);
    }, [duration])

    const sliderAfterChange = useCallback((value) => {
        const currentTime = value / 100 * duration / 1000;
        audioRef.current.currentTime = currentTime;
        setCurrentTime(currentTime * 1000);
        setIsChangingSlide(false);
    }, [duration])

    const handleMusicEnded = () => {
        setIsPlaying(false)
    }

    const changePlayState = () => {
        if (isPlaying) {
            audioRef.current.pause()
        } else {
            audioRef.current.play()
        }
        // console.log(isPlaying);
        setIsPlaying(!isPlaying)
    }
    // console.log(picUrl, singerName, showDuration, showCurrentTime);

    return (
        <StyleWrap isPlaying={isPlaying} sequence={0}>
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
                            <Slider onAfterChange={sliderAfterChange} value={progress} ref={sliderRef} onChange={(value) => slideChange(value)} tooltipVisible={false} ></Slider>
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