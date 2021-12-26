/*
 * @Description:
 * @Autor: Liou
 * @Date: 2021-12-19 15:50:51
 * @LastEditors: Liou
 * @LastEditTime: 2021-12-26 18:02:05
 */

import { memo, useEffect, } from "react";



import TopBanner from "./components/TopBanner"
import ContentWrapper from "./components/ContentWrapper"
import HotPage from "./components/HotPage"
import NewDisc from "./components/NewDisc"
import RankList from "./components/RankList"

export default memo(() => {


    return (
        <>
            <TopBanner></TopBanner>
            <ContentWrapper>
                <>
                    <HotPage />
                    <NewDisc />
                    <RankList />
                </>
                <>
                    2
                </>

            </ContentWrapper>
        </>
    )
})