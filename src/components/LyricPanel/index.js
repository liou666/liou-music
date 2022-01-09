/*
 * @Description:
 * @Autor: Liou
 * @Date: 2022-01-09 17:28:06
 * @LastEditors: Liou
 * @LastEditTime: 2022-01-09 23:38:58
 */
import react, { memo, useCallback, useEffect, useRef, useState } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux"

import moment from "moment"
import { StyleWrapper } from "./style"

export default memo(function LyricPanel({ lyric }) {
    return (
        <StyleWrapper>
            {
                lyric.map((x, i) => <p className={i === 0 ? "active lyric-item" : "lyric-item"} key={x.time}>{x.lyric}</p>)
            }
        </StyleWrapper >
    )
})