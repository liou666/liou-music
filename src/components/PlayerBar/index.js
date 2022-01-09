/*
 * @Description:
 * @Autor: Liou
 * @Date: 2021-12-26 13:52:21
 * @LastEditors: Liou
 * @LastEditTime: 2022-01-09 15:20:46
 */
import react, { memo, useCallback, useEffect, useRef, useState } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux"

import {
    getSongListAction,
    changeSequenceAction,
    getNextSongAction,
    getPrevSongAction
} from "./store/actionCreator"

// import { getSongUrl } from "../../services/player"
import moment from "moment"
import { Slider } from 'antd';
import { StyleWrap } from "./style"




export default memo(() => {

    const [currentTime, setCurrentTime] = useState(0);
    const [progress, setProgress] = useState(0);
    const [isChangingSlide, setIsChangingSlide] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false)

    const { currentSong, sequence, songList, currentLyric } = useSelector(state => ({
        currentSong: state.player.currentSong,
        sequence: state.player.sequence,
        songList: state.player.songList,
        currentLyric: state.player.currentLyric,
    }), shallowEqual)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getSongListAction(24381616))
    }, [dispatch])

    //字段解析
    const picUrl = (currentSong.al && currentSong.al.picUrl) || "";
    const singerName = (currentSong.ar && currentSong.ar[0].name) || "未知歌手";
    const duration = currentSong.dt || 0;
    const showDuration = moment(duration).format("mm:ss");
    const showCurrentTime = moment(currentTime).format("mm:ss");

    //others hooks
    const audioRef = useRef()
    const sliderRef = useRef()
    useEffect(async () => {
        // const { data } = await getSongUrl(currentSong.id);
        // audioRef.current.src = data[0].url;
        audioRef.current.src = `https://music.163.com/song/media/outer/url?id=${currentSong.id}.mp3`;
        audioRef.current.play().then(res => {
            setIsPlaying(true);
        }).catch(err => {
            setIsPlaying(false);
        });

        console.log(currentLyric);
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
        if (sequence === 2) {
            audioRef.current.currentTime = 0;
            audioRef.current.play();
        } else {
            goNextSong()
        }
    }

    //更改播放顺序
    const changeSequence = () => {
        sequence >= 2 ?
            dispatch(changeSequenceAction(0)) :
            dispatch(changeSequenceAction(sequence + 1))
    }



    //暂停或播放
    const changePlayState = () => {
        isPlaying ? audioRef.current.pause() : audioRef.current.play()
        setIsPlaying(!isPlaying)
    }

    //下一曲
    const goNextSong = () => {
        dispatch(getNextSongAction())
    }

    //上一曲
    const goPrevSong = () => {
        dispatch(getPrevSongAction())
    }

    return (
        <StyleWrap isPlaying={isPlaying} sequence={sequence}>
            <div className="bg-wrap">
                <div className="control-btns">
                    <i className="prev" onClick={() => goPrevSong()} />
                    <i className="play" onClick={() => changePlayState()} />
                    <i className="next" onClick={() => goNextSong()} />
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
                        <button onClick={() => changeSequence()} className=" playbar_sprite btn loop"></button>
                        <button className="playbar_sprite btn playlist">{songList?.length}</button>
                    </div>

                </div>
            </div>

            <audio ref={audioRef}
                onTimeUpdate={e => timeUpdate(e)}
                onEnded={e => handleMusicEnded()}></audio>
        </StyleWrap>
    )
})