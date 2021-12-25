/*
 * @Description:
 * @Autor: Liou
 * @Date: 2021-12-19 15:46:59
 * @LastEditors: Liou
 * @LastEditTime: 2021-12-24 20:33:08
 */
import { memo } from "react";
import { Link } from "react-router-dom";


export default memo(() => {
    return (
        <div>
            <h1>header</h1>
            <Link to="/" >发现音乐</Link>
            <Link to="/my" >我的音乐</Link>
            <Link to="/discover" >推荐</Link>
            <Link to="/discover/toplist" >排行榜</Link>
            <Link to="/discover/playlist" >歌单</Link>
            <Link to="/discover/djradio" >主播电台</Link>
            <Link to="/discover/artist" >歌手</Link>
            <Link to="/discover/album" >新碟上架</Link>
        </div>
    )
})