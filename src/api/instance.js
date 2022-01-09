/*
 * @Description:
 * @Autor: Liou
 * @Date: 2021-12-25 13:03:53
 * @LastEditors: Liou
 * @LastEditTime: 2022-01-09 01:41:39
 */
import axios from "axios";


const BASE_URL = "http://localhost:3000"
const TIME_OUT = 6000

const instance = axios.create({
    baseURL: BASE_URL,
    timeout: TIME_OUT,
    withCredentials: true
})

instance.interceptors.request.use((config) => {

    // config.params.cookie=""
    //请求头携带token，loading操作
    return config
})

instance.interceptors.response.use((res) => {
    return res.data
}, err => {
    if (err && err.response) {
        switch (err.response.status) {
            case 400:
                console.log("请求错误");
                break;
            case 401:
                console.log("未授权访问");
                break;
            default:
                console.log("其他错误信息");
        }
    }
    return err;
})

export default instance

