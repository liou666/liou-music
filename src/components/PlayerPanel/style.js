/*
 * @Description:
 * @Autor: Liou
 * @Date: 2022-01-09 16:02:38
 * @LastEditors: Liou
 * @LastEditTime: 2022-01-09 21:51:12
 */

import styled from "styled-components"

export const StyleWrapper = styled.div`
    position: fixed;
    left: 50%;
    bottom: 47px;
    width: 986px;
    height: 301px;
    margin-left: -493px;
    z-index:999999;
    /* background: red; */
    *{
        margin: 0;
        padding: 0;
    }
    .listhd {
        height: 41px;
        background: url(${require("@/assets/img/playpanel_bg.png")}) no-repeat  0 0;
        color:#fff;
        display: flex;
        padding: 0 16px 0 30px;
        align-items: center;
        a{
            display: flex;
            align-items: center;
        }
        .icon{
            width: 16px;
            height: 16px;
            cursor: pointer;
            margin-right: 8px;
        }
        h4{
            margin-right:275px;
            color:#fff
        }
        .addall,.clear{
            color: #a4a4a4;
            font-size: 12px;
            padding: 10px;
        }
        .header-rigth{
            margin-left: auto;
            display: flex;
            align-items: center;
            width: 420px;
            p{
                text-align: center;
                margin-right: auto;
                flex: 1;
            }
            .close{
                font-size: large;
                color: #a4a4a4;
                cursor: pointer;
            }
        }
    }
    .listbd{  
        display: flex;

        width: 100%;
        height: 260px;
        overflow: hidden;
        background: url(${require("@/assets/img/playpanel_bg.png")}) repeat-y   -1014px 0;
        .song-list-panel{
            flex: 1;
            padding: 0 10px;
        }
        .lyric-panel{
            width: 430px;
        }
    }
`