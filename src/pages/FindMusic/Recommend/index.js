/*
 * @Description:
 * @Autor: Liou
 * @Date: 2021-12-19 15:50:51
 * @LastEditors: Liou
 * @LastEditTime: 2021-12-25 15:47:14
 */

import { memo, useEffect } from "react";

import { useSelector, useDispatch, shallowEqual } from "react-redux"

import { getTopBannerAction } from "./store/actionCreator"


export default memo(() => {
    const { topBanners } = useSelector(state => ({
        topBanners: state.recommend.topBanners
    }), shallowEqual);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getTopBannerAction())
    }, [dispatch])

    return (
        <>
            <h1>home recommend page</h1>
            <span>{topBanners.length}</span>
        </>
    )
})