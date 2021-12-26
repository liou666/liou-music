/*
 * @Description:
 * @Autor: Liou
 * @Date: 2021-12-26 13:47:44
 * @LastEditors: Liou
 * @LastEditTime: 2021-12-26 17:38:07
 */
import { memo, useEffect, useState, useCallback, useRef } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux"

import { getHotRecommendsAction } from "../../store/actionCreator"

import { HotPageWrap } from "./style"
import ThemeHeader from "components/ThemeHeader"

const recommendList = ["华语", "流行", "摇滚", "民谣", "电子"]

function getCount(count) {
    if (count < 0) return;
    if (count < 10000) {
        return count;
    } else if (Math.floor(count / 10000) < 10000) {
        return Math.floor(count / 1000) / 10 + "万";
    } else {
        return Math.floor(count / 10000000) / 10 + "亿";
    }
}

export default memo(() => {
    const { hotRecommends } = useSelector(state => ({
        hotRecommends: state.recommend.hotRecommends
    }), shallowEqual)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getHotRecommendsAction(8))
    }, [dispatch])


    return (
        <HotPageWrap>
            <ThemeHeader title="热门推荐" keywords={recommendList} />
            <ul className="record-wrap">
                {hotRecommends.map((item) => {
                    return (
                        <li key={item.id} className="record-item">
                            <div className="record-top">
                                <img alt={item.copywrite} src={item.picUrl} />
                                <div className="info-bar">
                                    <i className="sprite_icon erji"></i>
                                    <span>{getCount(item.playCount)}</span>
                                    <a className="redio-btn sprite_icon "></a>
                                </div>
                            </div>
                            <div className="record-title">{item.name}</div>
                        </li>
                    )
                })}

            </ul>
        </HotPageWrap>
    )
})
