/*
 * @Description:
 * @Autor: Liou
 * @Date: 2021-12-26 00:33:24
 * @LastEditors: Liou
 * @LastEditTime: 2021-12-26 13:41:47
 */
import styled from "styled-components"

export const TopBannerWrap = styled.div`
    background-image: url(${props => props.bgImage});
    background-size: 6000px;
    background-position: center center;
    height: 285px;
    position: relative;
    .content-wrap{
        width: 982px;
        margin: 0 auto;
        display: flex;
        height: 100%;
        .recommend-swapper{
            width: 730px;
            height: 100%;
            .banner-image{
                height: 285px;
                cursor: pointer;
            }
        }
        .download{
            flex: 1;
            height: 100%;
            background-image: url(${require("@/assets/img/download.png")});
        }
    }
    .left-control,.right-control{
        position: absolute;
        z-index:999;
        width: 40px;
        height: 65px;
        top: 40%;
    }
    .left-control{
        background: url(${require("@/assets/img/banner_sprite.png")}) 0 300px;
        left: 180px;
        :hover{
            background: rgba(0,0,0,0.3) url(${require("@/assets/img/banner_sprite.png")}) 0 300px;
        }
    }
    .right-control{
        background: url(${require("@/assets/img/banner_sprite.png")}) 0 150px;
        right: 180px;
        :hover{
            background: rgba(0,0,0,0.3) url(${require("@/assets/img/banner_sprite.png")}) 0 150px;
        }
    }
`
