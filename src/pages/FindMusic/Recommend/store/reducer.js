import * as actionTypes from './constants';

const defaultState = {
  topBanners: [],
  hotRecommends: [],
  newAlbums: [],

  originalRanks: {},
  newRanks: {},
  upRanks: {},

  newSonger: [],
  hotHost: []
}


export function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_TOP_BANNERS:
      return { ...state, topBanners: action.topBanners }
    case actionTypes.CHANGE_HOT_RECOMMENDS:
      return { ...state, hotRecommends: action.hotRecommends }
    case actionTypes.CHANGE_NEW_ALBUMS:
      return { ...state, newAlbums: action.newAlbums }

    case actionTypes.CHANGE_NEW_RANKS:
      return { ...state, newRanks: action.newRanks }
    case actionTypes.CHANGE_ORIGINAL_RANKS:
      return { ...state, originalRanks: action.originalRanks }
    case actionTypes.CHANGE_UP_RANKS:
      return { ...state, upRanks: action.upRanks }

    case actionTypes.CHANGE_HOT_HOST:
      return { ...state, hotHost: action.hotHost }
    case actionTypes.CHANGE_NEW_SONGER:
      return { ...state, newSonger: action.newSonger }
    default:
      return state
  }
}