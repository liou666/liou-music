import * as actionTypes from './constants';

const defaultState = {
  topBanners: [],
  hotRecommends: [],
  newAlbums: []
}


export function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_TOP_BANNERS:
      return { ...state, topBanners: action.topBanners }
    case actionTypes.CHANGE_HOT_RECOMMENDS:
      return { ...state, hotRecommends: action.hotRecommends }
    case actionTypes.CHANGE_NEW_ALBUMS:
      return { ...state, newAlbums: action.newAlbums }

    default:
      return state
  }
}