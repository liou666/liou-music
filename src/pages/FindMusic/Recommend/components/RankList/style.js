/*
 * @Description:
 * @Autor: Liou
 * @Date: 2021-12-28 01:05:03
 * @LastEditors: Liou
 * @LastEditTime: 2021-12-29 01:01:15
 */
import styled from "styled-components"

export const ComponentWrap = styled.div`
    border:1px solid #ccc;
    width: ${props => props.width + "px"};
    header{
        height: 120px;
        display: flex;
        align-items: center;
        background-color: #f4f4f4;
        .header-image{
            width: 80px;
            height: 80px;
            margin-left: 20px;
            img{
                width: 100%;
            }
        }
        .right{
            height: 80px;
            padding: 4px 14px;
            span{
                font-weight: 700;
            }
            .btn-info{
                display: flex;
                margin: 7px 0 0 -8px;
            }
        }
    }
    .list-wrap{
        margin: 0;
        .list-item{
            display: flex;
            align-items: center;
            padding-left: 20px;
            background-color: #e8e8e8;
            height: 32px;
            &:nth-child(2n){
                background-color: #f4f4f4;
            }
            &:hover{
                .option{
                    display: flex;
                    z-index:2;
                    width: 82px;
            }
            }
            .rank-number{
                width: 35px;
                font-family: Arial, Helvetica, sans-serif;
                text-align: center;
                font-size: 16px;
            }
            .active{
                color: red;
            }
            .song-name{
                flex: 1;
                overflow: hidden;
                text-overflow:ellipsis;
                white-space: nowrap;
                padding-right: 8px;
            }
            .option{
                z-index:-1;
                position: relative;
                /* display: none; */
                align-items: center;
                width: 0px;
               margin-left: auto;
            }
        }
    }
    .btn{
        width: 17px;
        height: 17px;
        margin-left: 8px;
        cursor: pointer;
    }
    .favor{
           background:url(${require("@/assets/img/sprite_02.png")}) no-repeat  -297px -268px;
    }
    .redio-btn{
            background:url(${require("@/assets/img/sprite_02.png")}) no-repeat  -267px -268px;
    }
    .addto{
        position: relative;
        top: 2px;
        background:url(${require("@/assets/img/sprite_icon2.png")}) no-repeat  0 -700px
    }
    footer{
        height: 32px;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        background-color: #e8e8e8;
        font-size: 12px;
        padding-right: 10px;
        a {
          color: #000
        }
    }
`
export const RankWrap = styled.div`
    display: flex;
    margin-top: 20px;
`