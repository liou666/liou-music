/*
 * @Description:
 * @Autor: Liou
 * @Date: 2021-12-25 12:38:17
 * @LastEditors: Liou
 * @LastEditTime: 2021-12-25 13:05:29
 */
import api from "@/api"

export function getInfoByKeywrod(keywrod) {
    return api.get(`/search?keywords=${keywrod}`)
}