/*
 * @Description:
 * @Autor: Liou
 * @Date: 2021-12-29 23:57:20
 * @LastEditors: Liou
 * @LastEditTime: 2021-12-30 01:59:22
 */
import { memo, useEffect, useState, useCallback, useRef } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux"

import { getNewSongerAction } from "../../store/actionCreator"

import styled from "styled-components"

const StyleWrap = styled.div`
    padding: 20px;
    header{
        font-size: 12px;
        display: flex;
        align-items: center;
        padding: 5px 0;
        border-bottom: 2px solid #e4e4e4;
        h4{
            font-weight: 600;
            margin: 0;
        }
        span{
            margin-left: auto;
        }
    }
    .songer-item{
        width: 210px;
        height: 60px;
        border:1px solid #e4e4e4;
        margin-top:20px;
        display: flex;
        img{
            width: 60px;
            height: 60px;
        }
        .detail-info{
            padding-left: 20px;
            flex: 1;
            background-color: #f4f4f4;
            display: flex;
            justify-content: center;
            flex-direction: column;
            p{
                font-size: 14px;
                font-weight: 700;
                margin: 0;
            }
            span{
                font-size: 12px;
            }
        }
    }
    footer{
        div{
            width: 210px;
            height: 32px;
            line-height: 28px;
            text-align: center;
            background-color: #f4f4f4;
            border-radius: 4px;
            border: 2px solid #e4e4e4;
            margin-top: 20px;
            color: #333;
            font-size: 12px;
            cursor: pointer;
            font-weight: 700;
        }
    }
`

export default memo(function HotHost() {
    const { newSonger } = useSelector(state => ({
        newSonger: state.recommend.newSonger,
    }), shallowEqual)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getNewSongerAction(5))
    }, [dispatch])

    // console.log(newSonger);

    return (
        <StyleWrap>
            <header>
                <h4>入驻歌手</h4>
                <span>查看全部</span>
            </header>
            <ul className="songer-wrap">
                {newSonger.map(item => {
                    return (
                        <li key={item.id} className="songer-item">
                            <img src={item.picUrl} />
                            <div className="detail-info">
                                <p>{item.name}</p>
                                <span>{item.alias.join("/")}</span>
                            </div>
                        </li>
                    )
                })}

            </ul>
            <footer>
                <div>申请成为网易音乐人</div>
            </footer>
        </StyleWrap>
    )
})