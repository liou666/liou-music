/*
 * @Description:
 * @Autor: Liou
 * @Date: 2021-12-25 23:32:03
 * @LastEditors: Liou
 * @LastEditTime: 2021-12-26 13:40:47
 */

import { memo, useEffect, useState, useCallback, useRef } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux"

import { Carousel } from 'antd';
import { TopBannerWrap } from "./style"

import { getTopBannerAction } from "../../store/actionCreator"




export default memo(() => {

    const [currentIndex, setCurrentIndex] = useState(0)

    const bannerRef = useRef()

    const dispatch = useDispatch();
    const { topBanners } = useSelector(state => ({
        topBanners: state.recommend.topBanners
    }), shallowEqual);

    useEffect(() => {
        dispatch(getTopBannerAction())
    }, [dispatch])

    const changeBanner = useCallback((from, to) => setCurrentIndex(to), [])

    const bgImage = topBanners[currentIndex] && topBanners[currentIndex].imageUrl + "?imageView&blur=40x20"

    return (
        <TopBannerWrap bgImage={bgImage}>
            <div className="content-wrap">
                <div className="recommend-swapper">
                    <Carousel ref={bannerRef} beforeChange={changeBanner} autoplay>
                        {topBanners.map((item) => {
                            return (
                                <img alt={item.typeTitle} className="banner-image" key={item.targetId} src={item.imageUrl}></img>
                            )
                        })}
                    </Carousel>,
                </div>
                <div className="download"></div>
            </div>
            <a onClick={e => bannerRef.current.prev()} className="left-control" />
            <a onClick={e => bannerRef.current.next()} className="right-control" />
        </TopBannerWrap >
    )
})