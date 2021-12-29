/*
 * @Description:
 * @Autor: Liou
 * @Date: 2021-12-19 15:50:51
 * @LastEditors: Liou
 * @LastEditTime: 2021-12-30 00:03:26
 */

import { memo, useEffect, Fragment } from "react";



import TopBanner from "./components/TopBanner"
import ContentWrapper from "./components/ContentWrapper"
import HotPage from "./components/HotPage"
import NewDisc from "./components/NewDisc"
import RankList from "./components/RankList"
import UserLogin from "./components/UserLogin"
import HotHost from "./components/HotHost"
import NewSonger from "./components/NewSonger"



export default memo(() => {


    return (
        <Fragment>
            <TopBanner />
            <ContentWrapper>
                <Fragment>
                    <HotPage />
                    <NewDisc />
                    <RankList />
                </Fragment>
                <Fragment>
                    <UserLogin />
                    <NewSonger />
                    <HotHost />
                </Fragment>
            </ContentWrapper>
        </Fragment >
    )
})