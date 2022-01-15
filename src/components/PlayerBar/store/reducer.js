import * as actionTypes from './constants';

import { mockSongList } from "@/common/mockData"

const defaultState = {
  currentSong: mockSongList[0] || {},//先使用假数据
  songList: mockSongList || [],//先使用假数据
  currentLyric: '',
  lyricIndex: -1,
  sequence: 0, // 0 循环 1 随机 2 单曲,
  currentSongIndex: 0,
  isShowPanel: false
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
    case actionTypes.CHANGE_LYRIC_INDEX:
      return { ...state, lyricIndex: action.lyricIndex }
    case actionTypes.CHANGE_IS_SHOW_PANEL:
      return { ...state, isShowPanel: action.isShowPanel }
    default:
      return state
  }
}