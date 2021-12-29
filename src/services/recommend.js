/*
 * @Description:
 * @Autor: Liou
 * @Date: 2021-12-25 12:38:17
 * @LastEditors: Liou
 * @LastEditTime: 2021-12-30 01:11:19
 */
import api from "@/api"

export function getInfoByKeywrod(keywords) {
    return api.get(`/search`, { keywords })
}

export function getTopBanners() {
    return api.get("/banner")
}

export function getHotRecommends(limit) {
    return api.get("/personalized", { limit })
}

export function getNewAlbums(limit) {
    return api.get("album/newest", { limit })
}

export function getTopList(id) {
    return api.get("/playlist/detail", { id })
}

export function getHotHost() {
    return api.get("/dj/hot")
}

export function getNewSonger(limit) {
    return api.get("/top/artists", { limit })
}