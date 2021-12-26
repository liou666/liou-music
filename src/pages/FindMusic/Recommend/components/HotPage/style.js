/*
 * @Description:
 * @Autor: Liou
 * @Date: 2021-12-26 13:59:58
 * @LastEditors: Liou
 * @LastEditTime: 2021-12-26 17:34:44
 */
import styled from "styled-components"

export const HotPageWrap = styled.div`
    .record-wrap{
       display: flex;
       flex-wrap: wrap;
       justify-content: space-between;
       margin-top: 20px;
       .record-item{
            width: 140px;
            
            .record-top{
                position: relative;
                img{
                    width:140px;
                    height: 140px;
                }
                .info-bar{
                    position: absolute;
                    bottom: 0;
                    height: 27px;
                    width: 100%;
                    background:rgba(0,0,0,.3);
                    display: flex;
                    align-items: center;
                    color: #ccc;
                    .erji {
                    margin-right: 5px;
                    display: inline-block;
                    width: 14px;
                    height: 11px;
                    margin-left: 10px;
                    background: url(${require('@/assets/img/sprite_icon.png')})  0 -24px;
                }

                .redio-btn {
                  display: inline-block;
                  width: 16px;
                  height: 16px;
                  background: url(${require('@/assets/img/sprite_icon.png')})  0 0;
                  margin-left: auto;
                  margin-right: 10px;
                }
               
                }
             
            }
            .record-title{
                width: 140px;
            }
       }
    }
`