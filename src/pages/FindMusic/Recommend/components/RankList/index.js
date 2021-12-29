/*
 * @Description:
 * @Autor: Liou
 * @Date: 2021-12-26 13:50:33
 * @LastEditors: Liou
 * @LastEditTime: 2021-12-30 01:08:01
 */
import { memo, useEffect, useState, useCallback, useRef } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux"

import { getTopListAction } from "../../store/actionCreator"
import ThemeHeader from "components/ThemeHeader"
import RankComponent from "./RankComponent"
import { RankWrap } from "./style"

import { ORIGINAL_RANK_ID, UP_RANK_ID, NEW_RANK_ID } from "@/common/constants"




export default memo(() => {
    const { originalRanks, upRanks, newRanks } = useSelector(state => ({
        upRanks: state.recommend.upRanks,
        newRanks: state.recommend.newRanks,
        originalRanks: state.recommend.originalRanks
    }), shallowEqual)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getTopListAction(UP_RANK_ID, 0))
        dispatch(getTopListAction(NEW_RANK_ID, 1))
        dispatch(getTopListAction(ORIGINAL_RANK_ID, 2))
    }, [dispatch])

    // console.log(originalRanks, upRanks, newRanks);
    return (
        <>
            <ThemeHeader title="榜单" />
            <RankWrap>
                <RankComponent info={upRanks} width={230} />
                <RankComponent info={newRanks} width={230} />
                <RankComponent info={originalRanks} width={228} />
            </RankWrap>
        </>
    )
})
