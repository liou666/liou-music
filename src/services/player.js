/*
 * @Description:
 * @Autor: Liou
 * @Date: 2022-01-04 23:40:40
 * @LastEditors: Liou
 * @LastEditTime: 2022-01-05 00:12:23
 */
import api from "@/api"

export function getSongDetail(ids) {
    return api.get(`/song/detail`, { ids })
}

export function getSongListAll(id, limit = 10) {
    return api.get(`/playlist/track/all`, { id, limit })
}

export function getSongUrl(id) {
    return api.get(`/song/url`, { id })
}



export function getLyric(id) {
    return api.get(`/lyric`, { id })

}