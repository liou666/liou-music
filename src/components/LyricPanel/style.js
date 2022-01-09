/*
 * @Description:
 * @Autor: Liou
 * @Date: 2022-01-09 22:50:53
 * @LastEditors: Liou
 * @LastEditTime: 2022-01-09 23:39:42
 */
import styled from "styled-components"

export const StyleWrapper = styled.div`
    overflow: auto;
    width: 100%;
    height: 100%;
    font-size: 12px;
    padding: 20px 0 !important;
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
    .lyric-item{
        color: #989898;
        word-wrap: break-word;
        text-align: center;
        line-height: 32px;
        height: auto !important;
        height: 32px;
        min-height: 32px;
        transition: color 0.7s linear;
        &.active{
        color: #fff;
        font-size: 14px;
       }
        
    }
   
`