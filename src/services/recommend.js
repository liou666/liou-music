/*
 * @Description:
 * @Autor: Liou
 * @Date: 2021-12-25 12:38:17
 * @LastEditors: Liou
 * @LastEditTime: 2021-12-29 00:05:07
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