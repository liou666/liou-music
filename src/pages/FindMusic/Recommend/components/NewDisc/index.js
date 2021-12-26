/*
 * @Description:
 * @Autor: Liou
 * @Date: 2021-12-26 13:49:23
 * @LastEditors: Liou
 * @LastEditTime: 2021-12-26 20:17:00
 */
import { memo, useEffect, useState, useCallback, useRef } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux"

import ThemeHeader from "components/ThemeHeader"

import { Carousel } from "antd"
import { NewDiscWrap } from "./style"

import { getNewAlbumsAction } from "../../store/actionCreator"


export default memo(() => {
    const { newAlbums } = useSelector(state => ({
        newAlbums: state.recommend.newAlbums
    }), shallowEqual)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getNewAlbumsAction(10))
    }, [dispatch])
    console.log(newAlbums);
    const currentRef = useRef()
    return (
        <NewDiscWrap>
            <ThemeHeader title="新碟上架" />
            <div onClick={e => currentRef.current.prev()} className="arrow arrow-left " />
            <div className="top-wrapper">
                <Carousel ref={currentRef} dots={false} >
                    {[0, 1].map(x => {
                        return (
                            <div key={x} className="new-carousel-item">
                                {newAlbums.slice(x * 5, (x + 1) * 5).map(y => {
                                    return (
                                        <div key={y.id} className="album-item">
                                            <div className="album-image">
                                                <img src={y.picUrl} />
                                                <a className="cover image_cover">{y.name}</a>
                                            </div>
                                            <div className="text-info">
                                                <h5>{y.name}</h5>
                                                <em>{y.artist.name}</em>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        )
                    })}
                </Carousel>
            </div>
            <div onClick={e => currentRef.current.next()} className="arrow arrow-right " />

        </NewDiscWrap >
    )
})
