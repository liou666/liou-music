/*
 * @Description:
 * @Autor: Liou
 * @Date: 2021-12-26 15:05:55
 * @LastEditors: Liou
 * @LastEditTime: 2021-12-26 15:34:18
 */
import styled from "styled-components"

export const ThemeHeaderWrap = styled.div`
        height: 33px;
        background-position: -225px -156px;
        border-bottom: 2px solid #C10D0C;
        background:url(${require("@/assets/img/sprite_02.png")}) no-repeat -225px -156px;
        display: flex;
        align-items: center;
       padding: 0 12px 0 30px;
        .header-title{
            margin-right: 10px;
            h3{
                font-size: 20px;
                margin-bottom: 2px;
                
            }
        }
        .other-info{
            display: flex;
            a{
                font-size:12px;
                padding: 0px 10px;
                border-right: 1px solid #ccc;
                color: #333;
                :last-child{
                    border:0
                }
            }
        }
        .more-btn{
            font-size: 12px;
            margin:0 4px 0 auto;
            color: #333;
        }
        .icon {
      display: inline-block;
      width: 12px;
      height: 12px;
      background:url(${require("@/assets/img/sprite_02.png")}) no-repeat 0 -240px;
    }
     

`