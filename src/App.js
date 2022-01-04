/*
 * @Description: 
 * @Autor: Liou
 * @Date: 2021-12-19 15:20:07
 * @LastEditors: Liou
 * @LastEditTime: 2021-12-31 00:30:47
 */
import { memo, Suspense } from "react"

import Header from "components/Header";
import Footer from "components/Footer";

import RouteView from "./router";

import PlayerBar from "@/components/PlayerBar"


export default memo(function App() {
    return (
        <>
            <Header />
            <Suspense fallback={<span>loading</span>}>
                <RouteView />
            </Suspense>
            <Footer />
            <PlayerBar />
        </>
    )

})


