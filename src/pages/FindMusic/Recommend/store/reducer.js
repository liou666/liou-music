import * as actionTypes from './constants';

const defaultState = {
  topBanners: [],
  hotRecommends: []
}


export function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_TOP_BANNERS:
      return { ...state, topBanners: action.topBanners }
    case actionTypes.CHANGE_HOT_RECOMMENDS:
      return { ...state, hotRecommends: action.hotRecommends }

    default:
      return state
  }
}