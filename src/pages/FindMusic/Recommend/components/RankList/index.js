/*
 * @Description:
 * @Autor: Liou
 * @Date: 2021-12-26 13:50:33
 * @LastEditors: Liou
 * @LastEditTime: 2021-12-28 01:07:44
 */
import { memo, useEffect, useState, useCallback, useRef } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux"

import ThemeHeader from "components/ThemeHeader"
import RankComponent from "./RankComponent"

import { RankWrap } from "./style"


export default memo(() => {
    return (
        <>
            <ThemeHeader title="榜单" />
            <RankWrap>
                <RankComponent width={230} />
                <RankComponent width={230} />
                <RankComponent width={230} />
            </RankWrap>
        </>
    )
})
