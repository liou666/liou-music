/*
 * @Description: 
 * @Autor: Liou
 * @Date: 2021-12-19 15:20:07
 * @LastEditors: Liou
 * @LastEditTime: 2021-12-25 17:00:12
 */
import React, { lazy } from "react"
import { useRoutes } from "react-router-dom";

const Recommend = lazy(() => import("pages/FindMusic/Recommend"));
const TopList = lazy(() => import("pages/FindMusic/TopList"));
const NotFound = lazy(() => import("components/NotFount"));
const FindMusic = lazy(() => import("pages/FindMusic"));
const Follows = lazy(() => import("pages/Follows"))
const MyMusic = lazy(() => import("pages/MyMusic"))


const routeConfig = [
    { path: '/', element: <Recommend /> },
    {
        path: '/discover', element: <FindMusic />,
        children: [
            { path: '', element: <Recommend /> },
            { path: 'toplist', element: <TopList /> }
        ]
    },
    { path: '/my', element: <MyMusic /> },
    { path: '/friend', element: <Follows /> },

    { path: '*', element: <NotFound /> }
]


// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    return useRoutes(routeConfig);
}




