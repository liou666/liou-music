import * as actionTypes from './constants';

import {
    getSongListAll,
    getSongDetail,
    getLyric
} from '@/services/player';

import { parseLyric } from "../../../utils/index"

//播放顺序规则
export const changeSequenceAction = (sequence) => ({
    type: actionTypes.CHANGE_SEQUENCE,
    sequence
});

const changeCurrentSongAction = (currentSong) => ({
    type: actionTypes.CHANGE_CURRENT_SONG,
    currentSong
});

const changeSongListAction = (songList) => ({
    type: actionTypes.CHANGE_SONG_LIST,
    songList
})

const changeCurrentIndexAction = (currentSongIndex) => ({
    type: actionTypes.CHANGE_CURRENT_INDEX,
    currentSongIndex
})

const changeLyricAction = (res) => ({
    type: actionTypes.CHANGE_CURRENT_LYRIC,
    currentLyric: parseLyric(res.lrc.lyric)
})

//歌词滚动
export const changeLyricIndexAction = (lyricIndex) => ({
    type: actionTypes.CHANGE_LYRIC_INDEX,
    lyricIndex
});


export const changeIsShowPanelAction = (isShowPanel) => ({
    type: actionTypes.CHANGE_IS_SHOW_PANEL,
    isShowPanel
});



//直接从songList，currentSongIndex中取，不需要网络请求
// //更新当前播放的音乐
// export const getCurrentSongAction = (ids) => {
//     return (dispatch) => {
//         getSongDetail(ids).then(res => {
//             dispatch(changeCurrentSongAction(res.songs[0]));
//         })
//     }
// };

//更新播放列表
export const getSongListAction = (id) => {
    return dispatch => {
        getSongListAll(id).then(res => {
            dispatch(changeSongListAction(res.songs));
            dispatch(changeCurrentSongAction(res.songs[0]));
            dispatch(getLyricAction(res.songs[0].id))

        })
    }
};

//添加歌曲到播放列表
export const addSongFromListAction = (id) => {
    return (dispatch, getState) => {
        const { player: { songList } } = getState();

        const index = songList.findIndex(x => x.id === id)

        if (index > 0) {
            dispatch(changeCurrentIndexAction(index))
            dispatch(changeCurrentSongAction(songList[index]))
            dispatch(getLyricAction(songList[index].id))

        } else {
            getSongDetail(id).then(res => {
                const newSongList = [...songList, res.songs[0]]
                dispatch(changeSongListAction(newSongList))
                dispatch(changeCurrentIndexAction(newSongList.length - 1))
                dispatch(changeCurrentSongAction(res.songs[0]))
                dispatch(getLyricAction(res.songs[0].id))

            })
        }


    }
}

//删除歌曲从播放列表
export const deleteSongFromListAction = (index) => {
    return (dispatch, getState) => {
        const { player: { songList, currentSongIndex } } = getState();

        if (songList.length <= 1) return
        const i = index === 0 ? index + 1 : index - 1
        const newSongList = [...songList.slice(0, index), ...songList.slice(index + 1)];

        dispatch(changeSongListAction(newSongList));
        dispatch(changeCurrentIndexAction(i))
        dispatch(changeCurrentSongAction(newSongList(i)))
        dispatch(getLyricAction(newSongList(i).id))

    }
}

//下一曲
export const getNextSongAction = () => {
    return (dispatch, getState) => {
        // 0 循环 1 随机 2 单曲,

        const { player: { songList, currentSongIndex, sequence } } = getState();
        console.log(getState(), songList, sequence);
        const length = songList.length;
        let newIndex;

        switch (sequence) {
            case 0:
            case 2:
                console.log("ss");
                newIndex = currentSongIndex + 1 === length ? 0 : currentSongIndex + 1
                dispatch(changeCurrentIndexAction(newIndex))
                dispatch(changeCurrentSongAction(songList[newIndex]))
                dispatch(getLyricAction(songList[newIndex].id))

                break
            case 1:
                newIndex = getRandomIndex(length)
                dispatch(changeCurrentIndexAction(newIndex))
                dispatch(changeCurrentSongAction(songList[newIndex]))
                dispatch(getLyricAction(songList[newIndex].id))

                break
            default:
                break
        }
    }
}

//上一曲
export const getPrevSongAction = () => {
    return (dispatch, getState) => {
        // 0 循环 1 随机 2 单曲,
        const { player: { songList, currentSongIndex, sequence } } = getState();
        const length = songList.length;
        let newIndex;

        switch (sequence) {
            case 0:
            case 2:
                newIndex = currentSongIndex - 1 === -1 ? length - 1 : currentSongIndex - 1
                dispatch(changeCurrentIndexAction(newIndex))
                dispatch(changeCurrentSongAction(songList[newIndex]))
                dispatch(getLyricAction(songList[newIndex].id))
                break
            case 1:
                newIndex = getRandomIndex(length)
                dispatch(changeCurrentIndexAction(newIndex))
                dispatch(changeCurrentSongAction(songList[newIndex]))
                dispatch(getLyricAction(songList[newIndex].id))

                break
            default:
                break
        }
    }
}

//获取歌词
const getLyricAction = (id) => {
    return dispatch => {
        getLyric(id).then(res => {
            dispatch(changeLyricAction(res))
        })
    }
}



const getRandomIndex = (length) => {
    return Math.floor(Math.random() * length)
}

