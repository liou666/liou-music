import * as actionTypes from './constants';

const defaultState = {
  currentSong: {},
  songList: [],
  sequence: 0, // 0 循环 1 随机 2 单曲
}


export function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_CURRENT_SONG:
      return { ...state, currentSong: action.currentSong }

    default:
      return state
  }
}