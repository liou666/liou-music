/*
 * @Description:
 * @Autor: Liou
 * @Date: 2022-01-09 17:28:06
 * @LastEditors: Liou
 * @LastEditTime: 2022-01-13 00:36:03
 */
import react, { memo, useCallback, useEffect, useRef, useState } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux"

import moment from "moment"
import { StyleWrapper } from "./style"

export default memo(function LyricPanel({ lyric, lyricIndex }) {

    const currentLyricRef = useRef()
    useEffect(() => {
        if (lyricIndex >= 0 && lyric < 3) return
        currentLyricRef.current.scrollTo(0, 32 * (lyricIndex - 3) + 40)
    }, [lyricIndex])

    return (
        <StyleWrapper ref={currentLyricRef}>
            <div className='lyric-container'>
                {
                    lyric.map((x, i) => <p data-time={x.time} className={i === lyricIndex ? "active lyric-item" : "lyric-item"} key={i}>{x.lyric}</p>)
                }
            </div>
        </StyleWrapper >
    )
})