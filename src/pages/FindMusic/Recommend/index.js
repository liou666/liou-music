/*
 * @Description:
 * @Autor: Liou
 * @Date: 2021-12-19 15:50:51
 * @LastEditors: Liou
 * @LastEditTime: 2021-12-26 14:50:33
 */

import { memo, useEffect, } from "react";



import TopBanner from "./components/TopBanner"
import ContentWrapper from "./components/ContentWrapper"
import HotPage from "./components/HotPage"

export default memo(() => {


    return (
        <>
            <TopBanner></TopBanner>
            <ContentWrapper>
                <>
                    <HotPage />

                </>
                <>
                    2
                </>

            </ContentWrapper>
        </>
    )
})