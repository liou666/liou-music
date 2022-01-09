import * as actionTypes from './constants';

const defaultState = {
  currentSong: {},
  songList: [],
  currentLyric: '',
  sequence: 0, // 0 循环 1 随机 2 单曲,
  currentSongIndex: 0
}


export function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_CURRENT_INDEX:
      return { ...state, currentSongIndex: action.currentSongIndex }
    case actionTypes.CHANGE_CURRENT_SONG:
      return { ...state, currentSong: action.currentSong }
    case actionTypes.CHANGE_SEQUENCE:
      return { ...state, sequence: action.sequence }
    case actionTypes.CHANGE_SONG_LIST:
      return { ...state, songList: action.songList }
    case actionTypes.CHANGE_CURRENT_LYRIC:
      return { ...state, currentLyric: action.currentLyric }
    default:
      return state
  }
}