import * as actionTypes from './constants';

import {
    getTopBanners,
    getHotRecommends,
    getNewAlbums,
    getTopList,
    getNewSonger,
    getHotHost
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

const changeHotHostAction = (res) => ({
    type: actionTypes.CHANGE_HOT_HOST,
    hotHost: res.djRadios
});

const changeNewSongerAction = (res) => ({
    type: actionTypes.CHANGE_NEW_SONGER,
    newSonger: res.artists
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


export const getHotHostAction = () => {
    return dispatch => {
        getHotHost().then(res => {
            dispatch(changeHotHostAction(res));
        })
    }
}
export const getNewSongerAction = (limit) => {
    return dispatch => {
        getNewSonger(limit).then(res => {
            dispatch(changeNewSongerAction(res));
        })
    }
};
