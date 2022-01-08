import * as actionTypes from './constants';

import {
    getSongListAll,
    getSongDetail
} from '@/services/player';

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
        })
    }
};

//添加歌曲到播放列表
export const addSongFromListAction = (id) => {
    return (dispatch, getState) => {
        const { player: { songList } } = getState()
        getSongDetail(id).then(res => {
            const newSongList = [...songList, res.songs[0]]
            dispatch(changeSongListAction(newSongList))
            dispatch(changeCurrentIndexAction(newSongList.length - 1))
            dispatch(changeCurrentSongAction(res.songs[0]))
        })
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
                break
            case 1:
                newIndex = getRandomIndex(length)
                dispatch(changeCurrentIndexAction(newIndex))
                dispatch(changeCurrentSongAction(songList[newIndex]))
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

                break
            case 1:
                newIndex = getRandomIndex(length)
                dispatch(changeCurrentIndexAction(newIndex))
                dispatch(changeCurrentSongAction(songList[newIndex]))

                break
            default:
                break
        }
    }
}



const getRandomIndex = (length) => {
    return Math.floor(Math.random() * length)
}

