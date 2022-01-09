/*
 * @Description:
 * @Autor: Liou
 * @Date: 2022-01-09 18:25:48
 * @LastEditors: Liou
 * @LastEditTime: 2022-01-09 21:33:55
 */
import styled from "styled-components"

export const StyleWrapper = styled.ul`
    padding: 5px 0 !important;
    width: 100%;
    overflow: auto;
    color: #a4a4a4;
    height: 100%;
    font-size: 12px;
    ::-webkit-scrollbar-track-piece {
         //滚动条凹槽的颜色，还可以设置边框属性
          background-color:#0b0c0c; 
    } 
    ::-webkit-scrollbar {
        //滚动条的宽度 
        width:8px; 
    } 
    ::-webkit-scrollbar-thumb {
        //滚动滑块的设置 
        background-color:#414142; 
        background-clip:padding-box;
        border-radius : 10px;
    } 
    /* ::-webkit-scrollbar-thumb:hover { 
        background-color:#bbb; 
    } */
    li{
        padding: 3px 0 3px 25px;
        display: flex;
        :hover{
            color: #fff;
            background-color: #555;
            cursor: pointer;
            .right .options{
                display: flex;
            }
          }
        
        
        &.active {
          color: #fff;
          background-color: #000;
          position: relative;
          ::before {
            content: "";
            position: absolute;
            left: 8px;
            width: 10px;
            top: 7px;
            height: 13px;
            background: url(${require("@/assets/img/playlist_sprite.png")}) -182px 0;
          }
        }
        

        .left{
            margin-right: auto;
        }
        .right{
            display: flex;
            .options{
                /* display: flex; */
                display: none;
                align-items: center;
                i{
                    width: 16px;
                    height: 16px;
                    margin: 0px 4px;
                }
            }
            .time-total{
                padding: 0 10px;
                margin-right: auto;
            }
            .songer-name{
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                width: 80px;
                margin-left:8px ;
            }
            .link{
                padding: 0 8px;
            }
        }
    }
`