/*
 * @Description:
 * @Autor: Liou
 * @Date: 2022-01-09 15:23:06
 * @LastEditors: Liou
 * @LastEditTime: 2022-01-10 00:01:54
 */
// [00:14.00]Tossing turning
// [00:17.00]Up all night fire burning
// [00:21.00]I miss the way
// [00:23.00]That it felt
// [00:27.00]Now we ain't speaking
// [00:31.00]I’ll watch you leaving


export const parseLyric = (lyric) => {
    return [...lyric.matchAll(/\[(.+)(\..+)\](.+)/g)].reduce((pre, cur) => {
        let obj = {};
        const temp = cur[1].split(":");
        obj.time = temp[0] * 60 + +temp[1]
        obj.lyric = cur[3];
        pre.push(obj);
        return pre
    }, [])
}

