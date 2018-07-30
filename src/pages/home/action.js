import { GET_BANNER, GET_ITEM, GET_RECOMMED, GET_FIND } from './actionTypes'

export const bannerData = (data) => {
    return {
        type: GET_BANNER,
        data
    }
}

export const itemData = (data) => {
    return {
        type: GET_ITEM,
        data
    }
}

export const recommedData = (data) => {
    return {
        type: GET_RECOMMED,
        data
    }
}

export const findData = (data) => {
    return {
        type: GET_FIND,
        data
    }
}

export const getBannerData = () =>{
    return dispatch => {
        fetch('api/msj/home')
        .then(response => response.json())
        .then(data => {
            dispatch(bannerData(data.bannerData))
            dispatch(itemData(data.itemData))
            dispatch(recommedData(data.recommend))
        })
    }
}

export const getFindData = () =>{
    return dispatch => {
        fetch('api/msj/find')
        .then(response => response.json())
        .then(data => {
            dispatch(findData(data.data))
        })
    }
}