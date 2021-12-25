/*
 * @Description:
 * @Autor: Liou
 * @Date: 2021-12-24 20:45:53
 * @LastEditors: Liou
 * @LastEditTime: 2021-12-25 10:59:26
 */
const path = require("path");

const resolve = dir => path.resolve(__dirname, dir);

module.exports = {
    webpack: {
        alias: {
            "@": resolve("src"),
            "components": resolve("src/components"),
            "pages": resolve("src/pages")
        }
    }
}