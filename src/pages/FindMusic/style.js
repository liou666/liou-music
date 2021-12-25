/*
 * @Description:
 * @Autor: Liou
 * @Date: 2021-12-25 18:27:19
 * @LastEditors: Liou
 * @LastEditTime: 2021-12-25 20:22:26
 */

import styled from "styled-components"

export const DiscoverSubNavWrap = styled.div`
    height: 35px;
    box-sizing: border-box;
    background-color: #C20C0C;
    border-bottom: 1px solid #a40011;
    margin-top: -5px;
    .sub-nav-wrap{
        display: flex;
        align-items: center;
        padding-left: 180px;
        .sub-item{
            height: 35px;
            a{
               display:flex ;
               align-items: center;
                height: 100%;
                padding: 0 13px;
                font-size: 12px;
                .sub-item-active{
                    background-color: rgba(0,0,0,0.2);
                    border-radius: 20px;
                    margin: 0 ;
                    padding:1px 13px;
                }
                
                .sub-item-title{
                    margin: 0 13px;
                    &:hover{
                    background-color: rgba(0,0,0,0.2);
                    border-radius: 20px;
                    margin: 0 ;
                    padding:1px 13px;
                }
                
             
                
              }
               
            }
          
        }
    }

`