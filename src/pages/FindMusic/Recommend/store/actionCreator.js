import * as actionTypes from './constants';

import {
    getTopBanners,
    getHotRecommends,
    getNewAlbums,
    getTopList
} from '@/services/recommend';

const changeTopBannerAction = (res) => ({
    type: actionTypes.CHANGE_TOP_BANNERS,
    topBanners: res.banners
});
const changeHotRecommendsAction = (res) => ({
    type: actionTypes.CHANGE_HOT_RECOMMENDS,
    hotRecommends: res.result
});
const changeNewAlbumsAction = (res) => ({
    type: actionTypes.CHANGE_NEW_ALBUMS,
    newAlbums: res.albums
});

const changeUpRanksAction = (res) => ({
    type: actionTypes.CHANGE_UP_RANKS,
    upRanks: res.playlist
});

const changeNewRanksAction = (res) => ({
    type: actionTypes.CHANGE_NEW_RANKS,
    newRanks: res.playlist
});

const changeOriginalRanksAction = (res) => ({
    type: actionTypes.CHANGE_ORIGINAL_RANKS,
    originalRanks: res.playlist
});

export const getTopBannerAction = () => {
    return dispatch => {
        getTopBanners().then(res => {
            dispatch(changeTopBannerAction(res));
        })
    }
};

export const getHotRecommendsAction = (limit) => {
    return dispatch => {
        getHotRecommends(limit).then(res => {
            dispatch(changeHotRecommendsAction(res));
        })
    }
};

export const getNewAlbumsAction = (limit) => {
    return dispatch => {
        getNewAlbums(limit).then(res => {
            dispatch(changeNewAlbumsAction(res));
        })
    }
};
export const getTopListAction = (id, type) => {
    return dispatch => {
        getTopList(id).then(res => {
            switch (type) {
                case 0:
                    dispatch(changeUpRanksAction(res));
                    break;
                case 1:
                    dispatch(changeNewRanksAction(res));
                    break;
                case 2:
                    dispatch(changeOriginalRanksAction(res));
                    break;
            }
        })
    }
};


