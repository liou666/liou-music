/*
 * @Description:
 * @Autor: Liou
 * @Date: 2021-12-25 12:19:19
 * @LastEditors: Liou
 * @LastEditTime: 2021-12-25 13:04:14
 */


import instance from "./instance"


class Api {
    constructor(Axios) {
        this.Axios = Axios;
    }
    get(url, params) {
        return this.Axios({
            url,
            method: "get",
            params,
        });
    }
    post(url, params) {
        return this.Axios({
            url,
            method: "post",
            data: params,
        });
    }
}

export default new Api(instance)


