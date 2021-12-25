/*
 * @Description:
 * @Autor: Liou
 * @Date: 2021-12-19 15:46:59
 * @LastEditors: Liou
 * @LastEditTime: 2021-12-25 17:48:22
 */
import { memo, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Input } from "antd"
import { SearchOutlined } from '@ant-design/icons'

import {
    HeaderWrapper,
    HeaderLeft,
    HeaderRight
} from './style';
{/* <Link to="/" >发现音乐</Link>
            <Link to="/my" >我的音乐</Link>
            <Link to="/discover" >推荐</Link>
            <Link to="/discover/toplist" >排行榜</Link>
            <Link to="/discover/playlist" >歌单</Link>
            <Link to="/discover/djradio" >主播电台</Link>
            <Link to="/discover/artist" >歌手</Link>
            <Link to="/discover/album" >新碟上架</Link> */}
const navs = [
    { title: "发现音乐", path: "/" },
    { title: "我的音乐", path: "/my" },
    { title: "关注", path: "/friend" },
    { title: "商城", path: "https://music.163.com/store/product" },
    { title: "音乐人", path: "https://music.163.com/st/musician" },
    { title: "下载客户端", path: "/download" },
]

const showSelectItem = (item, index) => {
    if (index < 3) {
        return (
            <NavLink activeClassName="active" to={item.path}>
                {item.title}
                <i className="sprite_01 icon"></i>
            </NavLink>
        )
    } else {
        return <a href={item.path}>{item.title}</a>
    }
}
export default memo(() => {
    return (
        <HeaderWrapper>
            <div className="content wrap-v1">
                <HeaderLeft>
                    <a href="#/" className="logo sprite_01">网易云音乐</a>
                    <div className="select-list">
                        {
                            navs.map((item, index) => {
                                return (
                                    <div key={item.title} className={"select-item"}>
                                        {showSelectItem(item, index)}
                                    </div>
                                )
                            })
                        }
                    </div>
                </HeaderLeft>
                <HeaderRight>
                    <Input className="search" placeholder="音乐/视频/电台/用户" prefix={<SearchOutlined />} />
                    <div className="center">创作者中心</div>
                    <div>登录</div>
                </HeaderRight>
            </div>
            <div className="divider"></div>
        </HeaderWrapper>
    )
})