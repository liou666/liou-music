/*
 * @Description:
 * @Autor: Liou
 * @Date: 2021-12-29 23:56:52
 * @LastEditors: Liou
 * @LastEditTime: 2021-12-30 00:21:31
 */
import { memo, useEffect, useState, useCallback, useRef } from "react";

import styled from "styled-components"

const StyleWrap = styled.div`
    height: 126px;
    padding-top: 0;
    background-color: #f4f4f4;
    border-bottom: 1px solid #e4e4e4;
    p{
        width: 205px;
    margin: 0 auto;
    padding: 16px 0;
    line-height: 22px;
    color: #666;
    font-size: 12px;
    }
    .login-btn{
        height: 30px;
        width: 100px;
        margin: 0 auto;
        background-color:#da131b;
        border-radius: 4px;
        color: #fff;
        text-align: center;
        line-height:30px;
        cursor: pointer;
    }
`
export default memo(function HotHost() {
    return (
        <StyleWrap>
            <p>登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</p>
            <div className="login-btn">用户登录</div>
        </StyleWrap>
    )
})