/*
 * @Description:
 * @Autor: Liou
 * @Date: 2021-12-25 12:38:17
 * @LastEditors: Liou
 * @LastEditTime: 2021-12-25 13:26:05
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
    return api.get("/top/album", { limit })
}

export function getTopList(idx) {
    return api.get("/top/list", { idx })
}