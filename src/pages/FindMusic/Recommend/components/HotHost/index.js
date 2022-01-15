/*
 * @Description:
 * @Autor: Liou
 * @Date: 2021-12-29 23:58:46
 * @LastEditors: Liou
 * @LastEditTime: 2022-01-15 15:21:15
 */
import { memo, useEffect, useState, useCallback, useRef } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux"
import { getHotHostAction } from "../../store/actionCreator"

import styled from "styled-components"
import { getSizeImage } from "@/utils"

const StyleWrap = styled.div`
    padding: 20px;
    header{
        font-size: 12px;
        display: flex;
        align-items: center;
        padding: 5px 0;
        border-bottom: 2px solid #e4e4e4;
        margin-bottom: 20px;
        h4{
            font-weight: 600;
            margin: 0;
        }
    }
    .host-item{
        width: 210px;
        height: 42px;
        border:1px solid #e4e4e4;
        margin-top:10px;
        display: flex;
        background-color: #f4f4f4;
        img{
            width: 40px;
            height: 40px;
        }
        .detail-info{
            padding-left: 20px;
            padding-right: 10px;
            width: 150px;
            
            display: flex;
            justify-content: center;
            flex-direction: column;
            p{
                font-size: 12px;
                font-weight: 500;
                margin: 0;
                overflow: hidden;
                text-overflow:ellipsis;
                white-space: nowrap;
            }
            span{
                font-size: 12px;
                font-weight: 200;
                overflow: hidden;
                text-overflow:ellipsis;
                white-space: nowrap;
            }
        }
    }
`

export default memo(function HotHost() {
    const { hotHost } = useSelector(state => ({
        hotHost: state.recommend.hotHost,
    }), shallowEqual)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getHotHostAction())
    }, [dispatch])

    // console.log(hotHost);
    return (
        <StyleWrap>
            <header>
                <h4>热门主播</h4>
            </header>
            <ul className="host-wrap">
                {hotHost.slice(0, 5).map(item => {
                    return (
                        <li key={item.id} className="host-item">
                            <img src={getSizeImage(item.picUrl, 40)} />
                            <div className="detail-info">
                                <p>{item.name}</p>
                                <span>{item.rcmdtext}</span>
                            </div>
                        </li>
                    )
                })}

            </ul>
        </StyleWrap>
    )
})